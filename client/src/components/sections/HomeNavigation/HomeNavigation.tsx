'use client';
import { IoCalendarOutline } from 'react-icons/io5';
import React from 'react';
import SearchInput from '@/components/common/Inputs/SearchInput';
import { useAppStore } from '@/store/store';
import Calendar from '@/components/sections/Calendar/Calendar';
import Modal from '@/components/layouts/Modal/Modal';
import { ActiveDayOption } from '@/store/hooks/useCalendar/useCalendar.types';

const HomeNavigation: React.FC = () => {
  const appStore = useAppStore();

  const handleToggleCountriesAndLeagues = () => {
    // toggleCountriesAndLeagues();
    appStore.cl.dispatch({ type: 'TOGGLE_MOBILE' });
  };
  const handleSearchInputChange = (inputValue: string) => {
    appStore.countryLeaguesFixtures.dispatch({ type: 'SET_SEARCH_INPUT', payload: { searchInput: inputValue } });
  };

  const handleCalendarToggle = () => {
    appStore.calendar.dispatch({ type: 'TOGGLE_CALENDAR' });
  };

  const handleDayOptionClick = (dayString: ActiveDayOption) => {
    if (dayString === 'Today') {
      appStore.calendar.dispatch({ type: 'SET_TODAY' });
    }
    if (dayString === 'Tomorrow') {
      appStore.calendar.dispatch({ type: 'SET_TOMORROW' });
    }
    if (dayString === 'Yesterday') {
      appStore.calendar.dispatch({ type: 'SET_YESTERDAY' });
    }
  };
  return (
    <div className="sticky top-0 mx-1 rounded-md border-[1px] border-black bg-white p-3">
      {!appStore.calendar.state.toggle && (
        <div className="absolute left-2 top-[90%] flex gap-4  bg-white px-2">
          {appStore.calendar.state.calendarDayOptions.map((dayString) => {
            return (
              <div
                key={dayString}
                onClick={() => handleDayOptionClick(dayString)}
                className={`${dayString === appStore.calendar.state.activeDayOption && 'border-b-1px border-b-red-500'} ${'cursor-pointer text-[10px]'}`}
              >
                {dayString}
              </div>
            );
          })}
        </div>
      )}
      <div className="flex items-center gap-4 text-lg text-black">
        <IoCalendarOutline onClick={handleCalendarToggle} title="calendar" className="text-2xl text-black" />
        <div title="countries and leagues" onClick={handleToggleCountriesAndLeagues} className="cursor-pointer">
          C/L
        </div>
        <SearchInput
          searchInput={appStore.countryLeaguesFixtures.state.searchInput}
          setSearchInput={handleSearchInputChange}
        />
      </div>
      <Modal isOpen={appStore.calendar.state.toggle} onClose={handleCalendarToggle}>
        <Calendar />
      </Modal>
    </div>
  );
};

export default HomeNavigation;
