'use client';
import { useVisibilityState } from '@/contexts/visibility/visibility.context';
import { IoCalendarOutline } from 'react-icons/io5';
import React from 'react';
import SearchInput from '@/components/common/Inputs/SearchInput';
import { useAppStore } from '@/store/store';

const HomeNavigation: React.FC = () => {
  const appStore = useAppStore();
  const {
    countriesAndLeagues: { toggleCountriesAndLeagues },
  } = useVisibilityState();

  const handleToggleCountriesAndLeagues = () => {
    toggleCountriesAndLeagues();
  };
  const handleSearchInputChange = (inputValue: string) => {
    appStore.countryLeaguesFixtures.dispatch({ type: 'SET_SEARCH_INPUT', payload: { searchInput: inputValue } });
  };
  return (
    <div className="sticky top-0 mx-1 rounded-md border-[1px] border-black bg-white p-3">
      <div className="flex items-center gap-4 text-lg text-black">
        <IoCalendarOutline title="calendar" className="text-2xl text-black" />
        <div title="countries and leagues" onClick={handleToggleCountriesAndLeagues} className="cursor-pointer">
          C/L
        </div>
        <SearchInput
          searchInput={appStore.countryLeaguesFixtures.state.searchInput}
          setSearchInput={handleSearchInputChange}
        />
      </div>
    </div>
  );
};

export default HomeNavigation;
