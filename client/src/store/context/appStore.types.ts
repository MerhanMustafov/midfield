import { UseUserStateHook } from '@/store/hooks/useUserState/useUserState.types';
import { UseNavigationStateHook } from '@/store/hooks/useNavigationState/useNavigationState.types';
import { UseCountryLeaguesFixturesHook } from '@/store/hooks/useCountryLeaguesFixtures/useCountryLeaguesFixtures.types';
import { UseClHook } from '../hooks/useCL/useCL.types';
import { UseCalendarHook } from '@/store/hooks/useCalendar/useCalendar.types';

export type AppStoreProviderProps = {
  children: React.ReactNode;
};

export type AppStore = UseUserStateHook &
  UseNavigationStateHook &
  UseCountryLeaguesFixturesHook &
  UseClHook &
  UseCalendarHook;
