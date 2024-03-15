import React from 'react';

export type NavigationState = {
  showMobileDropDown: boolean;
};

export type NavigationAction = {
  type: 'TOGGLE_MOBILE_DROPDOWN';
  payload?: Partial<NavigationState> | null;
};

export type UseNavigationStateHook = {
  navigation: {
    state: NavigationState;
    dispatch: React.Dispatch<NavigationAction>;
  };
};
