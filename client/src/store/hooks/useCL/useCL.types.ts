import { CountryDataType } from '@/types/countriesAndLeagues';

export type UseClState = {
  showClMobile: boolean;
  searchInput: string;
  clData: CountryDataType | null;
  clFilteredData: CountryDataType | null;
  selectedCountry: string | null;
};

export type UseClAction = {
  type:
    | 'INIT'
    | 'RESET'
    | 'SET_CL_DATA'
    | 'SET_CL_FILTERED_DATA'
    | 'TOGGLE_MOBILE'
    | 'SET_SELECTED_COUNTRY'
    | 'SET_SEARCH_INPUT';
  payload?: Partial<UseClState>;
};

export type UseClHook = {
  cl: {
    state: UseClState;
    dispatch: React.Dispatch<UseClAction>;
  };
};
