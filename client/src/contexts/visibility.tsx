'use client';
import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';

type VisibilityContextState = {
  navMobile: {
    showNavMobile: boolean;
    toggleNavMobile: (display?: boolean) => void;
  };
  countriesAndLeagues: {
    showCountriesAndLeagues: boolean;
    toggleCountriesAndLeagues: (display?: boolean) => void;
  };
};

const VisibilityContext = createContext<VisibilityContextState>({
  navMobile: {
    showNavMobile: false,
    toggleNavMobile: () => {},
  },
  countriesAndLeagues: {
    showCountriesAndLeagues: false,
    toggleCountriesAndLeagues: () => {},
  },
});

export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showNavMobile, setShowNavMobile] = useState(false);
  const [showCountriesAndLeagues, setShowCountriesAndLeagues] = useState(false);

  const toggleCountriesAndLeagues = useCallback(
    (display?: boolean) => {
      console.log('toggleCountriesAndLeagues');

      setShowCountriesAndLeagues(display ?? !showCountriesAndLeagues);
    },
    [showCountriesAndLeagues],
  );
  const toggleNavMobile = useCallback(
    (display?: boolean) => {
      setShowNavMobile(display ?? !showNavMobile);
    },
    [showNavMobile],
  );

  const value = useMemo(
    () =>
      ({
        navMobile: {
          showNavMobile,
          toggleNavMobile,
        },
        countriesAndLeagues: {
          showCountriesAndLeagues,
          toggleCountriesAndLeagues,
        },
      }) as VisibilityContextState,
    [showCountriesAndLeagues, toggleCountriesAndLeagues, showNavMobile, toggleNavMobile],
  );

  return <VisibilityContext.Provider value={value}>{children}</VisibilityContext.Provider>;
};

export const useVisibilityState = () => useContext(VisibilityContext);
