import { UseCalendarState, UseCalendarAction } from './useCalendar.types';
import { initialState } from './useCalendar.constants';
import { getDateStringQuery } from '@/utils/date.utils';

export const reducer = (state: UseCalendarState = initialState, action: UseCalendarAction): UseCalendarState => {
  if (action.type === 'TOGGLE_CALENDAR') {
    return {
      ...state,
      toggle: action?.payload?.toggle ?? !state.toggle,
    };
  }

  if (action.type === 'INIT_CALENDAR_DATA') {
    return {
      ...state,
      calendarYearData: action?.payload?.calendarYearData ?? state.calendarYearData,
    };
  }

  if (action.type === 'SET_SELECTED_DATE_DATA') {
    return {
      ...state,
      selectedYear: action?.payload?.selectedYear ?? state.selectedYear,
      selectedMonth: action?.payload?.selectedMonth ?? state.selectedMonth,
      selectedDay: action?.payload?.selectedDay ?? state.selectedDay,

      year: action?.payload?.selectedYear ?? state.selectedYear,
      month: action?.payload?.selectedMonth ?? state.selectedMonth,
      day: action?.payload?.selectedDay ?? state.selectedDay,
    };
  }

  if (action.type === 'SET_TODAY') {
    const dateStringQuery = getDateStringQuery(state.todayYear, state.todayMonth, state.todayDay);
    return {
      ...state,
      year: state.todayYear,
      month: state.todayMonth,
      day: state.todayDay,
      activeDayOption: 'Today',
      selectedDateQueryString: dateStringQuery,
    };
  }

  if (action.type === 'SET_TOMORROW') {
    const dateStringQuery = getDateStringQuery(state.tomorrowYear, state.tomorrowMonth, state.tomorrowDay);
    return {
      ...state,
      year: state.tomorrowYear,
      month: state.tomorrowMonth,
      day: state.tomorrowDay,
      activeDayOption: 'Tomorrow',
      selectedDateQueryString: dateStringQuery,
    };
  }

  if (action.type === 'SET_YESTERDAY') {
    const dateStringQuery = getDateStringQuery(state.yesterdayYear, state.yesterdayMonth, state.yesterdayDay);
    return {
      ...state,
      year: state.yesterdayYear,
      month: state.yesterdayMonth,
      day: state.yesterdayDay,
      activeDayOption: 'Yesterday',
      selectedDateQueryString: dateStringQuery,
    };
  }

  if (action.type === 'SET_YEAR') {
    return {
      ...state,
      year: action?.payload?.year ?? state.year,
    };
  }

  if (action.type === 'SET_MONTH') {
    return {
      ...state,
      month: action?.payload?.month ?? state.month,
    };
  }

  if (action.type === 'SET_DAY') {
    return {
      ...state,
      day: action?.payload?.day ?? state.day,
    };
  }

  if (action.type === 'SET_SELECTED_DATE_QUERY_STRING') {
    return {
      ...state,
      selectedDateQueryString: action?.payload?.selectedDateQueryString ?? state.selectedDateQueryString,
    };
  }

  if (action.type === 'SET_ACTIVE_DAY_OPTION') {
    return {
      ...state,
      activeDayOption: action?.payload?.activeDayOption || null,
    };
  }

  return state;
};
