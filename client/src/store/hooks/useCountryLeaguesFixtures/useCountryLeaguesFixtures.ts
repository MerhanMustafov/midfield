'use client';
import { useReducer } from 'react';
import { UseCountryLeaguesFixturesHook } from './useCountryLeaguesFixtures.types';
import { initialState } from './useCountryLeaguesFixtures.constants';
import { reducer } from './useCountryLeaguesFixtures.reducer';
import { filterObjectByKey } from '@/utils/filter/filterObjectByKey.utils';
import { useDebounceEffect } from '@/hooks/useDebounceEffect';

export const useCountryLeaguesFixtures = (): UseCountryLeaguesFixturesHook => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterCountriesCb = () => {
    if (state.countryLeagueFixtureData) {
      const filtered = filterObjectByKey(state.countryLeagueFixtureData, state.searchInput);
      const isFiltered = Object.keys(filtered).length > 0;
      dispatch({
        type: 'SET_FILTERED_DATA',
        payload: { filteredData: isFiltered ? filtered : state.countryLeagueFixtureData },
      });
    }
  };

  useDebounceEffect(filterCountriesCb, 700, [state.searchInput]);

  return {
    countryLeaguesFixtures: {
      state: state ?? initialState,
      dispatch,
    },
  };
};
