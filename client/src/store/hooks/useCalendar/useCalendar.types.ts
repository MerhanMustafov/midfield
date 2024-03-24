import React from 'react';
import { getYearData } from '@/libs/calendar';
import { MonthNumbersNormalType, NumberOfDaysInAMonthType } from '@/libs/calendar/month/month.types';

export type UseCalendarState = {
  toggle: boolean;
  year: number | string;
  month: MonthNumbersNormalType;
  day: NumberOfDaysInAMonthType;
  selectedDate: string;
  calendarYearData: null | ReturnType<typeof getYearData>;
};
export type UseCalendarAction = {
  type: 'INIT_CALENDAR_DATA' | 'TOGGLE_CALENDAR' | 'SET_YEAR' | 'SET_MONTH' | 'SET_DAY' | 'SET_SELECTED_DATE';
  payload?: Partial<UseCalendarState>;
};
export type UseCalendarHook = {
  calendar: {
    state: UseCalendarState;
    dispatch: React.Dispatch<UseCalendarAction>;
  };
};
