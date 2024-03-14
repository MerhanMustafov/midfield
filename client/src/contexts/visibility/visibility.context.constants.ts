import { VisibilityContextState } from './visibility.context.types';

export const contextState: VisibilityContextState = {
  navMobile: {
    showNavMobile: false,
    toggleNavMobile: () => {},
  },
  countriesAndLeagues: {
    showCountriesAndLeagues: false,
    toggleCountriesAndLeagues: () => {},
  },
  country: {
    showLeaguesTo: {},
    toggleCountryLeagues: () => {},
  },
  league: {
    showFixturesTo: {},
    toggleLeagueFixtures: () => {},
  },
};
