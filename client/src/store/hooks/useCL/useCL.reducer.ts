import { UseClState, UseClAction } from './useCL.types';
import { initialState } from './useCL.constants';

export const reducer = (state: UseClState = initialState, action: UseClAction): UseClState => {
  if (action.type === 'INIT') {
    return { ...state, clData: action.payload?.clData ?? {} } as UseClState;
  }
  if (action.type === 'RESET') {
    return {
      ...state,
      clFilteredData: null,
      searchInput: '',
      selectedCountry: null,
      showClMobile: false,
    } as UseClState;
  }
  if (action.type === 'SET_CL_DATA') {
    return { ...state, clData: action.payload?.clData ?? {} } as UseClState;
  }
  if (action.type === 'SET_CL_FILTERED_DATA') {
    return { ...state, clFilteredData: action.payload?.clFilteredData ?? {} } as UseClState;
  }
  if (action.type === 'SET_SEARCH_INPUT') {
    return { ...state, searchInput: action.payload?.searchInput ?? '' } as UseClState;
  }
  if (action.type === 'TOGGLE_MOBILE') {
    return { ...state, showClMobile: action.payload?.showClMobile ?? !state.showClMobile } as UseClState;
  }
  if (action.type === 'SET_SELECTED_COUNTRY') {
    return { ...state, selectedCountry: action.payload?.selectedCountry ?? null } as UseClState;
  }

  return state;
};
