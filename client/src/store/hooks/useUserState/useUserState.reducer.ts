import { UserAction, UserState } from './useUserState.types';
import { removeLocalStorageUser, setLocalStorageUser } from '@/utils/user.utils';
import { initialState } from './useUserState.constants';

export const reducer = (state: UserState = initialState, action: UserAction) => {
  if (action.type === 'INIT') {
    return {
      ...state,
      user: action?.payload ?? null,
    };
  }
  if (action.type === 'LOGIN' || action.type === 'REGISTER') {
    if (action.payload) {
      setLocalStorageUser(action.payload);
      return {
        ...state,
        user: action.payload,
      };
    }
    return {
      ...state,
      user: null,
    };
  }
  if (action.type === 'LOGOUT') {
    removeLocalStorageUser();
    return {
      ...state,
      user: null,
    };
  }
};
