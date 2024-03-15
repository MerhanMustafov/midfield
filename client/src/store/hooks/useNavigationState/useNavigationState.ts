import { useReducer } from 'react';
import { UseNavigationStateHook } from './useNavigationState.types';
import { initialState } from './useNavigationState.constants';
import { reducer } from './useNavigationState.reducer';

export const useNavigationState = (): UseNavigationStateHook => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    navigation: {
      state: state ?? initialState,
      dispatch,
    },
  };
};
