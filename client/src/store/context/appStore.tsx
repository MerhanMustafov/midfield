'use client';
import React, { createContext, useMemo } from 'react';
import { AppStoreProviderProps } from './appStore.types';
import { useUserState } from '@/store/hooks/useUserState/useUserState';
import { AppStore } from './appStore.types';

const appStoreContext = createContext<AppStore | undefined>(undefined);

const AppStoreProvider: React.FC<AppStoreProviderProps> = ({ children }) => {
  const { user } = useUserState();

  const value: AppStore = useMemo(() => ({ user }), [user]);

  return <appStoreContext.Provider value={value}>{children}</appStoreContext.Provider>;
};

export { appStoreContext, AppStoreProvider };
