'use client';
import { useVisibilityState } from '@/contexts/visibility/visibility.context';
import { IoCalendarOutline } from 'react-icons/io5';
import React from 'react';

const HomeNavigation: React.FC = () => {
  const {
    countriesAndLeagues: { toggleCountriesAndLeagues },
  } = useVisibilityState();

  const handleToggleCountriesAndLeagues = () => {
    toggleCountriesAndLeagues();
  };
  return (
    <div className="sticky top-0 mx-1 rounded-md border-[1px] border-black bg-white p-3">
      <div className="flex items-center gap-4 text-lg text-black">
        <IoCalendarOutline title="calendar" className="text-2xl text-black" />
        <div title="countries and leagues" onClick={handleToggleCountriesAndLeagues} className="cursor-pointer">
          C/L
        </div>
      </div>
    </div>
  );
};

export default HomeNavigation;
