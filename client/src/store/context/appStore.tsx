'use client';
import React, { createContext, useMemo } from 'react';
import { AppStoreProviderProps } from './appStore.types';
import { useUserState } from '@/store/hooks/useUserState/useUserState';
import { useNavigationState } from '@/store/hooks/useNavigationState/useNavigationState';
import { useCountryLeaguesFixtures } from '@/store/hooks/useCountryLeaguesFixtures/useCountryLeaguesFixtures';
import { AppStore } from './appStore.types';

const appStoreContext = createContext<AppStore | undefined>(undefined);

const AppStoreProvider: React.FC<AppStoreProviderProps> = ({ children }) => {
  const { user } = useUserState();
  const { navigation } = useNavigationState();
  const { countryLeaguesFixtures } = useCountryLeaguesFixtures();

  const value: AppStore = useMemo(
    () => ({ user, navigation, countryLeaguesFixtures }),
    [user, navigation, countryLeaguesFixtures],
  );

  return <appStoreContext.Provider value={value}>{children}</appStoreContext.Provider>;
};

export { appStoreContext, AppStoreProvider };
