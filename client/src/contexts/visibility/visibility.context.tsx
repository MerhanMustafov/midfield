'use client';
import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';
import { VisibilityContextState, VisibilityProviderProps } from './visibility.context.types';
import { contextState } from './visibility.context.constants';

const VisibilityContext = createContext(contextState);

export const VisibilityProvider: React.FC<VisibilityProviderProps> = ({ children }) => {
  const [showNavMobile, setShowNavMobile] = useState(false);
  const [showCountriesAndLeagues, setShowCountriesAndLeagues] = useState(false);
  const [showLeaguesTo, setShowLeaguesTo] = useState<{
    [countryName: string]: boolean;
  }>({});
  const [showFixturesTo, setShowFixturesTo] = useState<{
    [leagueName: string]: boolean;
  }>({});

  const toggleCountriesAndLeagues = useCallback(
    (display?: boolean) => {
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

  const toggleCountryLeagues = useCallback((countyName: string, display?: boolean) => {
    setShowLeaguesTo((prev) => ({ ...prev, [countyName]: display ?? !prev[countyName] }));
  }, []);

  const toggleLeagueFixtures = useCallback((leagueName: string, display?: boolean) => {
    setShowFixturesTo((prev) => ({ ...prev, [leagueName]: display ?? !prev[leagueName] }));
  }, []);

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
        country: {
          showLeaguesTo,
          toggleCountryLeagues: toggleCountryLeagues,
        },
        league: {
          showFixturesTo,
          toggleLeagueFixtures,
        },
      }) as VisibilityContextState,
    [
      showCountriesAndLeagues,
      toggleCountriesAndLeagues,
      showNavMobile,
      toggleNavMobile,
      showLeaguesTo,
      toggleCountryLeagues,
      showFixturesTo,
      toggleLeagueFixtures,
    ],
  );

  return <VisibilityContext.Provider value={value}>{children}</VisibilityContext.Provider>;
};

export const useVisibilityState = () => useContext(VisibilityContext);
