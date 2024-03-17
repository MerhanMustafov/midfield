'use client';
// import { getTodayDate } from '@/utils/date.utils';
import React, { useEffect } from 'react';
import CountryNameBox from '@/components/common/Box/Country/CountryNameBox';
import CountryLeaguesFixturesLayout from '@/components/layouts/CountryLeaguesFixturesLayout/CountryLeaguesFixturesLayout';
import LeaguesLayout from '@/components/layouts/LeaguesLayout/LeaguesLayout';
import FixturesLayout from '@/components/layouts/FixturesLayout/FixturesLayout';
import LeagueNameBox from '@/components/common/Box/League/LeagueNameBox';
import FixtureBox from '@/components/common/Box/Fixture/FixtureBox';
import { League } from '@/types/league';
import { Fixture } from '@/types/fixture';
import { useAppStore } from '@/store/store';

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
}

const CountryLeaguesFixturesClient: React.FC<CountryLeaguesFixturesClientProps> = (props) => {
  const appStore = useAppStore();
  useEffect(() => {
    appStore.countryLeaguesFixtures.dispatch({ type: 'INIT', payload: { countryLeagueFixtureData: props.fixtures } });
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
          appStore.countryLeaguesFixtures.state.filteredData ??
            appStore.countryLeaguesFixtures?.state?.countryLeagueFixtureData ??
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
                              status={fixtureData.fixture.status.short}
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

export default CountryLeaguesFixturesClient;
