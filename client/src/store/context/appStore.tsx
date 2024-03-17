'use client';
import React, { createContext, useMemo } from 'react';
import { AppStoreProviderProps } from './appStore.types';
import { useUserState } from '@/store/hooks/useUserState/useUserState';
import { useNavigationState } from '@/store/hooks/useNavigationState/useNavigationState';
import { useCountryLeaguesFixtures } from '@/store/hooks/useCountryLeaguesFixtures/useCountryLeaguesFixtures';
import { useCL } from '@/store/hooks/useCL/useCL';
import { AppStore } from './appStore.types';

const appStoreContext = createContext<AppStore | undefined>(undefined);

const AppStoreProvider: React.FC<AppStoreProviderProps> = ({ children }) => {
  const { user } = useUserState();
  const { navigation } = useNavigationState();
  const { countryLeaguesFixtures } = useCountryLeaguesFixtures();
  const { cl } = useCL();

  const value: AppStore = useMemo(
    () => ({ user, navigation, countryLeaguesFixtures, cl }),
    [user, navigation, countryLeaguesFixtures, cl],
  );

  return <appStoreContext.Provider value={value}>{children}</appStoreContext.Provider>;
};

export { appStoreContext, AppStoreProvider };
