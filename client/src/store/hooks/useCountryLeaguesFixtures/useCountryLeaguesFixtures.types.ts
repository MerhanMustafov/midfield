import { Fixture } from '@/types/fixture';
import { League } from '@/types/league';
import React from 'react';
type Data = {
  [countryName: string]: {
    [leagueName: string]: {
      leagueInfo: League;
      leagueData: Fixture[];
    };
  };
};
export type CountryLeaguesFixturesState = {
  countryLeagueFixtureData: Data | null;
  filteredData: Data | null;
  searchInput: string;
  showLeaguesTo: {
    [countryName: string]: boolean;
  };
  showFixturesTo: {
    [leagueName: string]: boolean;
  };
};

export type CountryLeaguesFixturesAction = {
  type:
    | 'INIT'
    | 'SET_COUNTRY_LEAGUE_FIXTURE_DATA'
    | 'SET_FILTERED_DATA'
    | 'SET_SEARCH_INPUT'
    | 'TOGGLE_SHOW_LEAGUES_TO'
    | 'TOGGLE_SHOW_FIXTURES_TO'
    | 'SET_ACTIVE_COUNTRY'
    | 'SET_ACTIVE_LEAGUE';
  payload?: Partial<CountryLeaguesFixturesState>;
};

export type UseCountryLeaguesFixturesHook = {
  countryLeaguesFixtures: {
    state: CountryLeaguesFixturesState;
    dispatch: React.Dispatch<CountryLeaguesFixturesAction>;
  };
};
