'use client';
// import { getTodayDate } from '@/utils/date.utils';
import React, { useEffect } from 'react';
import CountryNameBox from '@/components/client/common/Box/Country/CountryNameBox';
import CountryLeaguesFixturesLayout from '@/components/client/layouts/CountryLeaguesFixturesLayout/CountryLeaguesFixturesLayout';
import LeaguesLayout from '@/components/client/layouts/LeaguesLayout/LeaguesLayout';
import FixturesLayout from '@/components/client/layouts/FixturesLayout/FixturesLayout';
import LeagueNameBox from '@/components/client/common/Box/League/LeagueNameBox';
import FixtureBox from '@/components/client/common/Box/Fixture/FixtureBox';
import { League } from '@/types/league';
import { Fixture } from '@/types/fixture';
import { useAppStore } from '@/store/store';
import { MonthNumbersNormalType, NumberOfDaysInAMonthType } from '@/libs/calendar/month/month.types';

interface DataReturnType {
  [countryName: string]: {
    [leagueName: string]: {
      leagueInfo: League;
      leagueData: Fixture[];
    };
  };
}

interface CountryLeaguesFixturesClientProps {
  fixtures: DataReturnType;
  selectedDate?: string;
}

const CountryLeaguesFixtures: React.FC<CountryLeaguesFixturesClientProps> = (props) => {
  const appStore = useAppStore();
  useEffect(() => {
    appStore.countryLeaguesFixtures.dispatch({ type: 'INIT', payload: { countryLeagueFixtureData: props.fixtures } });
    if (props.selectedDate) {
      const [y, m, d] = props.selectedDate.split('-');

      appStore.calendar.dispatch({
        type: 'SET_SELECTED_DATE_DATA',
        payload: {
          selectedYear: y,
          selectedMonth: parseInt(m, 10) as MonthNumbersNormalType,
          selectedDay: parseInt(d, 10) as NumberOfDaysInAMonthType,
        },
      });
    }
    appStore.calendar.dispatch({
      type: 'SET_SELECTED_DATE_QUERY_STRING',
      payload: { selectedDateQueryString: props.selectedDate },
    });
  }, [props.fixtures]);

  const handleToggleLeagues = (countryName: string) => {
    appStore.countryLeaguesFixtures.dispatch({
      type: 'TOGGLE_SHOW_LEAGUES_TO',
      payload: {
        showLeaguesTo: {
          [countryName]: !appStore.countryLeaguesFixtures.state.showLeaguesTo[countryName] ?? true,
        },
      },
    });
  };

  const handleToggleFixtures = (leagueName: string) => {
    appStore.countryLeaguesFixtures.dispatch({
      type: 'TOGGLE_SHOW_FIXTURES_TO',
      payload: {
        showFixturesTo: {
          [leagueName]: !appStore.countryLeaguesFixtures.state.showFixturesTo[leagueName] ?? true,
        },
      },
    });
  };

  return (
    <div className="mx-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {Object.entries(
          appStore.countryLeaguesFixtures.state.filteredData ||
            appStore.countryLeaguesFixtures.state.countryLeagueFixtureData ||
            props.fixtures,
        ).map(([countryName, values], i) => {
          return (
            <CountryLeaguesFixturesLayout key={JSON.stringify(`${countryName}_${values}_${i}`)}>
              <CountryNameBox countryName={countryName} handleToggleLeagues={handleToggleLeagues} />
              {appStore.countryLeaguesFixtures.state.showLeaguesTo[countryName] && (
                <LeaguesLayout>
                  {Object.entries(values).map(([leagueName, leagueValues], i) => (
                    <div className="flex flex-col gap-4" key={JSON.stringify(`${leagueName}_${leagueValues}_${i}`)}>
                      <LeagueNameBox leagueName={leagueName} handleToggleFixtures={handleToggleFixtures} />

                      {appStore.countryLeaguesFixtures.state.showFixturesTo[leagueName] && (
                        <FixturesLayout>
                          {leagueValues.leagueData.map((fixtureData, i) => (
                            <FixtureBox
                              key={JSON.stringify(`${fixtureData}_${i}`)}
                              homeTeam={{
                                name: fixtureData.teams.home.name,
                                goals: fixtureData.goals.home,
                                logo: fixtureData.teams.home.logo,
                              }}
                              awayTeam={{
                                name: fixtureData.teams.away.name,
                                goals: fixtureData.goals.away,
                                logo: fixtureData.teams.away.logo,
                              }}
                              fixtureData={fixtureData.fixture.date}
                              status={{
                                long: fixtureData.fixture.status.long,
                                short: fixtureData.fixture.status.short,
                              }}
                            />
                          ))}
                        </FixturesLayout>
                      )}
                    </div>
                  ))}
                </LeaguesLayout>
              )}
            </CountryLeaguesFixturesLayout>
          );
        })}
      </div>
    </div>
  );
};

export default CountryLeaguesFixtures;
