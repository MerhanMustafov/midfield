import { User } from '@/types/user';

export type UserState = {
  user: User | null;
};

export type UserAction = {
  type: 'LOGIN' | 'LOGOUT' | 'REGISTER' | 'INIT';
  payload?: User | null;
};

export type UserStateHook = {
  user: {
    state: UserState;
    actions: {
      login: (user: User) => void;
      register: (user: User) => void;
      logout: () => void;
    };
  };
};
