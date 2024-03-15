import { useEffect, useReducer } from 'react';
import { getLocalStorageUser } from '@/utils/user.utils';
import { UseUserStateHook } from './useUserState.types';
import { initialState } from './useUserState.constants';
import { reducer } from './useUserState.reducer';

export const useUserState = (): UseUserStateHook => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = getLocalStorageUser();
    dispatch({ type: 'INIT', payload: user });
  }, []);

  return {
    user: {
      state: state ?? initialState,
      dispatch,
    },
  };
};
