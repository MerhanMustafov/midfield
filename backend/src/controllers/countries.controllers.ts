import { customAxios } from '@configs/axios.configs';
import { Request, Response } from 'express';
import sortCountriesOrder from '@constants/sort/sortCountriesOrder.constants';
import sortLeaguesOrder from '@constants/sort/sortLeaguesOrder.constants';
import { customStringComparator } from '@utils/sort.utils';

type ByLeagueKey = {
  [LeagueName: string]: {
    leagueId: number;
    leagueName: string;
    leagueLogo: string;
  };
};
type ByCountryKey = {
  [CountryName: string]: {
    countryName: string;
    countryFlag: string;
    countryCode: string;
    leagues: ByLeagueKey;
  };
};
type League = {
  league: {
    id: 39; //ex: 39
    name: string; // ex: 'Premier League'
    type: string; // ex: 'League'
    logo: string; // ex: 'https://media.api-sports.io/football/leagues/2.png'
  };
  country: {
    name: string; // ex: 'England'
    code: string; //  ex: 'GB'
    flag: string; // ex: 'https://media.api-sports.io/flags/gb.svg'
  };

  // TODO: Add more properties for season... IF needed
};

type LeaguesResponseTypes<T> = {
  response: T;
};

// type CountriesWithLeaguesReturnTypeSuccess = {
//   data: {
//     [CountryName: string]: {
//       countryName: string;
//       countryFlag: string;
//       countryCode: string;
//       leagues: ByLeagueKey;
//     };
//   };
//   error: null;
// };

// type CountriesWithLeaguesReturnTypeError = {
//   data: null;
//   error: string;
// };

export async function getCountriesWithLeaguesData(req: Request, res: Response) {
  try {
    const response = await customAxios.get('/leagues');
    const status = response.status;
    const responseData = response.data as LeaguesResponseTypes<League[]>;

    const modifiedDataStructure = responseData.response.reduce((acc, curr) => {
      const country = curr.country.name;
      const league = curr.league.name;

      const leaguesData = {} as ByLeagueKey;
      leaguesData[league] = {
        leagueId: curr.league.id,
        leagueName: curr.league.name,
        leagueLogo: curr.league.logo,
      };

      const countriesData = {} as ByCountryKey;
      countriesData[country] = {
        countryName: country,
        countryFlag: curr.country.flag,
        countryCode: curr.country.code,
        leagues: { ...acc[country]?.leagues, ...leaguesData } || leaguesData,
      };

      return { ...acc, ...countriesData };
    }, {} as ByCountryKey);

    const sortedData = Object.keys(modifiedDataStructure)
      .sort((a: string, b: string) =>
        customStringComparator(a, b, { customArr: sortCountriesOrder }),
      )
      .reduce((countryAcc, countryCurr) => {
        const leagues = Object.keys(modifiedDataStructure[countryCurr].leagues)
          .sort((a: string, b: string) =>
            customStringComparator(a, b, {
              customArr: sortLeaguesOrder,
            }),
          )
          .reduce((leaguesAcc, leaguesCurr) => {
            leaguesAcc[leaguesCurr] = modifiedDataStructure[countryCurr].leagues[leaguesCurr];
            return leaguesAcc;
          }, {} as ByLeagueKey);

        countryAcc[countryCurr] = modifiedDataStructure[countryCurr];
        countryAcc[countryCurr].leagues = leagues;

        return countryAcc;
      }, {} as ByCountryKey);

    if (status !== 200) {
      throw new Error('Error has occurred while fetching leagues data from the API !');
    }

    return res.status(200).json(sortedData);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({ customError: error.message });
    }
  }
}
