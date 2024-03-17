import { UseUserStateHook } from '@/store/hooks/useUserState/useUserState.types';
import { UseNavigationStateHook } from '@/store/hooks/useNavigationState/useNavigationState.types';
import { UseCountryLeaguesFixturesHook } from '@/store/hooks/useCountryLeaguesFixtures/useCountryLeaguesFixtures.types';
export type AppStoreProviderProps = {
  children: React.ReactNode;
};

export type AppStore = UseUserStateHook & UseNavigationStateHook & UseCountryLeaguesFixturesHook;
