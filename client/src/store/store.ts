import { useContext } from 'react';
import { appStoreContext, AppStoreProvider } from '@/store/context/appStore';

const useAppStore = () => {
  const context = useContext(appStoreContext);
  if (context === undefined) {
    throw new Error('useAppStore must be used within a AppStoreProvider');
  }
  return context;
};

export { AppStoreProvider, useAppStore };
