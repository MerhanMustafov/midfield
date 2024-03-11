/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, DependencyList } from 'react';

type Callback = () => void;

export const useDebounceEffect = (cd: Callback, delay: number, deps: DependencyList) => {
  useEffect(() => {
    const timeOutID = setTimeout(() => {
      cd();
    }, delay);

    return () => clearTimeout(timeOutID);
  }, [...deps]);
};
