'use client';
import React, { createContext, useMemo } from 'react';
import { AppStoreProviderProps } from './appStore.types';
import { useUserState } from '@/store/hooks/useUserState/useUserState';
import { useNavigationState } from '@/store/hooks/useNavigationState/useNavigationState';
import { AppStore } from './appStore.types';

const appStoreContext = createContext<AppStore | undefined>(undefined);

const AppStoreProvider: React.FC<AppStoreProviderProps> = ({ children }) => {
  const { user } = useUserState();
  const { navigation } = useNavigationState();

  const value: AppStore = useMemo(() => ({ user, navigation }), [user, navigation]);

  return <appStoreContext.Provider value={value}>{children}</appStoreContext.Provider>;
};

export { appStoreContext, AppStoreProvider };
