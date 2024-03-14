export type VisibilityContextState = {
  navMobile: {
    showNavMobile: boolean;
    toggleNavMobile: (display?: boolean) => void;
  };
  countriesAndLeagues: {
    showCountriesAndLeagues: boolean;
    toggleCountriesAndLeagues: (display?: boolean) => void;
  };
  country: {
    showLeaguesTo: {
      [countryName: string]: boolean;
    };
    toggleCountryLeagues: (countryName: string, display?: boolean) => void;
  };
  league: {
    showFixturesTo: {
      [leagueName: string]: boolean;
    };
    toggleLeagueFixtures: (leagueName: string, display?: boolean) => void;
  };
};

export type VisibilityProviderProps = { children: React.ReactNode };
