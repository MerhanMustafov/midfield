import React from 'react';

export type UseCalendarState = {
  toggle: boolean;
  year: number | string;
  month: number | string;
  day: number | string;
  selectedDate: string;
};
export type UseCalendarAction = {
  type: 'TOGGLE_CALENDAR' | 'SET_YEAR' | 'SET_MONTH' | 'SET_DAY' | 'SET_SELECTED_DATE';
  payload?: Partial<UseCalendarState>;
};
export type UseCalendarHook = {
  calendar: {
    state: UseCalendarState;
    dispatch: React.Dispatch<UseCalendarAction>;
  };
};
