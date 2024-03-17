import { useReducer } from 'react';
import { UseClHook } from './useCL.types';
import { initialState } from './useCL.constants';
import { reducer } from './useCL.reducer';
import { filterObjectByKey } from '@/utils/filter/filterObjectByKey.utils';
import { useDebounceEffect } from '@/hooks/useDebounceEffect';

export const useCL = (): UseClHook => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterCountriesCb = () => {
    if (state.clData) {
      const filtered = filterObjectByKey(state.clData, state.searchInput);
      const isFiltered = Object.keys(filtered).length > 0;
      dispatch({ type: 'SET_CL_FILTERED_DATA', payload: { clFilteredData: isFiltered ? filtered : state.clData } });
    }
  };

  useDebounceEffect(filterCountriesCb, 700, [state.searchInput]);

  return {
    cl: {
      state: state ?? initialState,
      dispatch,
    },
  };
};
