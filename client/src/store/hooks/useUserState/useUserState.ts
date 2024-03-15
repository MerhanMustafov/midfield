import { useEffect, useReducer } from 'react';
import { getLocalStorageUser } from '@/utils/user.utils';
// TYPES
import { User } from '@/types/user';
import { UserStateHook } from './useUserState.types';

// REDUCER
import { reducer } from './useUserState.reducer';

// CONSTANTS & INITIAL STATE
import { initialState } from './useUserState.constants';

export const useUserState = (): UserStateHook => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = getLocalStorageUser();
    dispatch({ type: 'INIT', payload: user });
  }, []);

  const login = (user: User) => {
    dispatch({ type: 'LOGIN', payload: user });
  };
  const register = (user: User) => {
    dispatch({ type: 'REGISTER', payload: user });
  };
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return {
    user: {
      state: state ?? initialState,
      actions: {
        login,
        register,
        logout,
      },
    },
  };
};
