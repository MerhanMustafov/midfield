'use client';
import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';

type VisibilityContextState = {
  show: boolean;
  toggle: (display?: boolean) => void;
};

const VisibilityContext = createContext<VisibilityContextState>({
  show: true,
  toggle: () => {},
});

export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [show, setShow] = useState(true);

  const toggleCountriesAndLeagues = useCallback(
    (display?: boolean) => {
      setShow(display ?? !show);
    },
    [show],
  );

  const value = useMemo(
    () => ({
      show,
      toggle: toggleCountriesAndLeagues,
    }),
    [show, toggleCountriesAndLeagues],
  );

  return <VisibilityContext.Provider value={value}>{children}</VisibilityContext.Provider>;
};

export const useVisibilityState = () => useContext(VisibilityContext);
