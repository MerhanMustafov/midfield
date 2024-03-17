import { customAxios } from '@configs/axios.configs';
import { Request, Response } from 'express';
import sortCountriesOrder from '@constants/sort/sortCountriesOrder.constants';
import sortLeaguesOrder from '@constants/sort/sortLeaguesOrder.constants';
import { customStringComparator } from '@utils/sort.utils';

interface IFixture {
  fixture: {
    id: number;
    referee: string | null;
    timezone: string;
    date: Date;
    timestamp: number;
    periods: {
      first: number | null;
      second: number | null;
    };
    venue: {
      id: number | null;
      name: string | null;
      city: string | null;
    };
    status: {
      long: string;
      short: string;
      elapsed: number | null;
    };
  };
  league: ILeague;
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: true;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: false;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  score: {
    halftime: {
      home: number | null;
      away: number | null;
    };
    fulltime: {
      home: number | null;
      away: number | null;
    };
    extratime: {
      home: number | null;
      away: number | null;
    };
    penalty: {
      home: number | null;
      away: number | null;
    };
  };
}
interface ILeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}
interface IDataReturnType {
  [countryName: string]: {
    [leagueName: string]: {
      leagueInfo: ILeague;
      leagueData: IFixture[];
    };
  };
}

export async function getFixturesByDate(req: Request, res: Response) {
  const date = req.params.date;

  try {
    const response = await customAxios.get(`/fixtures?date=${date}`);

    const data = response.data.response as IFixture[];

    const modifiedData = data.reduce((acc, curr) => {
      const countryName = curr.league.country;
      const leagueName = curr.league.name;

      let leagueInfo = {} as ILeague;
      // if already exists use the same leagueInfo (already existing one)
      if (acc[countryName]?.[leagueName]?.leagueInfo) {
        leagueInfo = acc[countryName][leagueName].leagueInfo;
      } else {
        // else create set the new one
        leagueInfo = curr.league;
      }

      return {
        ...acc,
        [countryName]: {
          ...acc[countryName],
          [leagueName]: {
            leagueInfo,
            leagueData: [...(acc[countryName]?.[leagueName]?.leagueData || []), curr],
          },
        },
      } as IDataReturnType;
    }, {} as IDataReturnType);

    const sortedData = Object.keys(modifiedData)
      .sort((countryName1, countryName2) =>
        customStringComparator(countryName1, countryName2, { customArr: sortCountriesOrder }),
      )
      .reduce((acc, countryName) => {
        return {
          ...acc,
          [countryName]: Object.keys(modifiedData[countryName])
            .sort((leagueName1, leagueName2) =>
              customStringComparator(leagueName1, leagueName2, { customArr: sortLeaguesOrder }),
            )
            .reduce(
              (accLeagues, leagueName) => {
                return {
                  ...accLeagues,
                  [leagueName]: modifiedData[countryName][leagueName],
                } as { [leagueName: string]: IFixture[] };
              },
              {} as { [leagueName: string]: IFixture[] },
            ),
        } as IDataReturnType;
      }, {} as IDataReturnType);
    return res.status(200).json(sortedData);
  } catch {
    return res.status(400).json({ error: 'Something went wrong' });
  }
}
