'use client';
import { useDebounceEffect } from '@/hooks/useDebounceEffect';
// import { getTodayDate } from '@/utils/date.utils';
import { filterObjectByKey } from '@/utils/filter/filterObjectByKey.utils';
import React, { useCallback, useState } from 'react';
import SearchInput from '@/components/common/Inputs/SearchInput';
import CountryNameBox from '@/components/common/Box/Country/CountryNameBox';
import { useVisibilityState } from '@/contexts/visibility/visibility.context';
import CountryLeaguesFixturesLayout from '@/components/layouts/CountryLeaguesFixturesLayout/CountryLeaguesFixturesLayout';
import LeaguesLayout from '@/components/layouts/LeaguesLayout/LeaguesLayout';
import LeagueNameBox from '@/components/common/Box/League/LeagueNameBox';

interface Fixture {
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
  league: League;
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

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}
interface DataReturnType {
  [countryName: string]: {
    [leagueName: string]: {
      leagueInfo: League;
      leagueData: Fixture[];
    };
  };
}

interface FixturesProps {
  fixtures: DataReturnType;
}

const CountryLeaguesFixturesClient: React.FC<FixturesProps> = ({ fixtures }) => {
  const [filteredData, setFilteredData] = useState<DataReturnType>(fixtures);
  const [searchInput, setSearchInput] = useState<string>('');
  // const [date] = useState<string>(getTodayDate());

  const {
    country: { showLeaguesTo },
  } = useVisibilityState();

  const filterFixturesCb = useCallback(() => {
    const filtered = filterObjectByKey(fixtures, searchInput);
    const isFiltered = Object.keys(filtered).length > 0;
    setFilteredData(isFiltered ? filtered : fixtures);
  }, [searchInput, fixtures]);

  useDebounceEffect(filterFixturesCb, 700, [searchInput]);

  return (
    <div className="mx-4 flex flex-col gap-4">
      {/* TODO: CREATE context for state and perform this 
      operation of filtering there so that you can move the input in 
      the HomeNavigation */}
      <div className="sticky top-[53px] bg-white">
        <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
      <div className="flex flex-col gap-4">
        {Object.entries(filteredData).map(([countryName, values]) => {
          const showLeagues = showLeaguesTo[countryName];

          return (
            <CountryLeaguesFixturesLayout key={JSON.stringify(values)}>
              <CountryNameBox countryName={countryName} />
              {showLeagues && (
                <LeaguesLayout>
                  {Object.entries(values).map(([leagueName, leagueData]) => {
                    return <LeagueNameBox key={JSON.stringify(leagueData)} leagueName={leagueName} />;
                  })}
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
