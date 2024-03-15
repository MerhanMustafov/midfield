import { UseUserStateHook } from '@/store/hooks/useUserState/useUserState.types';
import { UseNavigationStateHook } from '@/store/hooks/useNavigationState/useNavigationState.types';
export type AppStoreProviderProps = {
  children: React.ReactNode;
};

export type AppStore = UseUserStateHook & UseNavigationStateHook;
