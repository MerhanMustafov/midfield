import { User } from '@/types/user';
import React from 'react';

export type UserState = {
  user: User | null;
};

export type UserAction = {
  type: 'LOGIN' | 'LOGOUT' | 'REGISTER' | 'INIT';
  payload?: User | null;
};

export type UseUserStateHook = {
  user: {
    state: UserState;
    dispatch: React.Dispatch<UserAction>;
  };
};
