'use client';
import { useVisibilityState } from '@/contexts/visibility/visibility.context';
import { UseCountryNameBox } from './CountryNameBox.types';
export const useCountryNameBox = (countryName: string): UseCountryNameBox => {
  const {
    country: { showLeaguesTo, toggleCountryLeagues },
  } = useVisibilityState();

  const handleToggleLeagues = () => {
    toggleCountryLeagues(countryName);
  };

  return {
    expand: showLeaguesTo[countryName],
    handleToggleLeagues,
  };
};
