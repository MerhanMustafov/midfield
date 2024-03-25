import React from 'react';
import { getYearData } from '@/libs/calendar';
import { MonthNumbersNormalType, NumberOfDaysInAMonthType } from '@/libs/calendar/month/month.types';

export type CalendarDayOptions = ['Yesterday', 'Today', 'Tomorrow'];
export type ActiveDayOption = CalendarDayOptions[number] | null;

export type UseCalendarState = {
  toggle: boolean;
  year: number | string;
  month: MonthNumbersNormalType;
  day: NumberOfDaysInAMonthType;

  selectedYear: number | string;
  selectedMonth: MonthNumbersNormalType;
  selectedDay: NumberOfDaysInAMonthType;

  todayYear: number | string;
  todayMonth: MonthNumbersNormalType;
  todayDay: NumberOfDaysInAMonthType;

  tomorrowYear: number | string;
  tomorrowMonth: MonthNumbersNormalType;
  tomorrowDay: NumberOfDaysInAMonthType;

  yesterdayYear: number | string;
  yesterdayMonth: MonthNumbersNormalType;
  yesterdayDay: NumberOfDaysInAMonthType;

  calendarDayOptions: CalendarDayOptions;
  activeDayOption: ActiveDayOption;

  selectedDateQueryString: string;
  calendarYearData: null | ReturnType<typeof getYearData>;
};
export type UseCalendarAction = {
  type:
    | 'TOGGLE_CALENDAR'
    | 'INIT_CALENDAR_DATA'
    | 'SET_SELECTED_DATE_DATA'
    | 'SET_YEAR'
    | 'SET_MONTH'
    | 'SET_DAY'
    | 'SET_TODAY'
    | 'SET_TOMORROW'
    | 'SET_YESTERDAY'
    | 'SET_SELECTED_DATE_QUERY_STRING'
    | 'SET_ACTIVE_DAY_OPTION';
  payload?: Partial<UseCalendarState>;
};
export type UseCalendarHook = {
  calendar: {
    state: UseCalendarState;
    dispatch: React.Dispatch<UseCalendarAction>;
  };
};
