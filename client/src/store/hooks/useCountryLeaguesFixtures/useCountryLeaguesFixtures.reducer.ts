import { initialState } from './useCountryLeaguesFixtures.constants';
import { CountryLeaguesFixturesState, CountryLeaguesFixturesAction } from './useCountryLeaguesFixtures.types';
export const reducer = (state: CountryLeaguesFixturesState = initialState, action: CountryLeaguesFixturesAction) => {
  if (action.type === 'INIT') {
    return {
      ...state,
      countryLeagueFixtureData: action?.payload?.countryLeagueFixtureData || null,
      filteredData: action?.payload?.countryLeagueFixtureData || null,
      searchInput: '',
    } as CountryLeaguesFixturesState;
  }
  if (action.type === 'SET_FILTERED_DATA') {
    return {
      ...state,
      filteredData: action?.payload?.filteredData || null,
    } as CountryLeaguesFixturesState;
  }
  if (action.type === 'SET_SEARCH_INPUT') {
    return {
      ...state,
      searchInput: action?.payload?.searchInput || '',
    } as CountryLeaguesFixturesState;
  }
  if (action.type === 'TOGGLE_SHOW_LEAGUES_TO') {
    if (action.payload?.showLeaguesTo) {
      const [[countryName, show]] = Object.entries(action.payload?.showLeaguesTo);
      return {
        ...state,
        showLeaguesTo: {
          ...state.showLeaguesTo,
          [countryName]: show ?? !state.showLeaguesTo[countryName] ?? true,
        },
      } as CountryLeaguesFixturesState;
    }
  }
  if (action.type === 'TOGGLE_SHOW_FIXTURES_TO') {
    if (action.payload?.showFixturesTo) {
      const [[leagueName, show]] = Object.entries(action.payload?.showFixturesTo);
      return {
        ...state,
        showFixturesTo: {
          ...state.showFixturesTo,
          [leagueName]: show ?? !state.showFixturesTo[leagueName] ?? true,
        },
      } as CountryLeaguesFixturesState;
    }
  }

  return state;
};
