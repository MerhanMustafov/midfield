'use client';
import React, { createContext, useMemo } from 'react';
import { AppStoreProviderProps } from './appStore.types';
import { useUserState } from '@/store/hooks/useUserState/useUserState';
import { useNavigationState } from '@/store/hooks/useNavigationState/useNavigationState';
import { useCountryLeaguesFixtures } from '@/store/hooks/useCountryLeaguesFixtures/useCountryLeaguesFixtures';
import { useCL } from '@/store/hooks/useCL/useCL';
import { useCalendar } from '@/store/hooks/useCalendar/useCalendar';
import { AppStore } from './appStore.types';

const appStoreContext = createContext<AppStore | undefined>(undefined);

const AppStoreProvider: React.FC<AppStoreProviderProps> = ({ children }) => {
  const { user } = useUserState();
  const { navigation } = useNavigationState();
  const { countryLeaguesFixtures } = useCountryLeaguesFixtures();
  const { cl } = useCL();
  const { calendar } = useCalendar();

  const value: AppStore = useMemo(
    () => ({ user, navigation, countryLeaguesFixtures, cl, calendar }),
    [user, navigation, countryLeaguesFixtures, cl, calendar],
  );

  return <appStoreContext.Provider value={value}>{children}</appStoreContext.Provider>;
};

export { appStoreContext, AppStoreProvider };
