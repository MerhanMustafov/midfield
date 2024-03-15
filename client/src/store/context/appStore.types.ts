import { UserStateHook } from '@/store/hooks/useUserState/useUserState.types';
export type AppStoreProviderProps = {
  children: React.ReactNode;
};

export type AppStore = UserStateHook;
