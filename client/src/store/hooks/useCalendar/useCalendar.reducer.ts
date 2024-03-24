import { UseCalendarState, UseCalendarAction } from './useCalendar.types';
import { initialState } from './useCalendar.constants';

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
      year: state.selectedYear ?? state.year,
      month: state.selectedMonth ?? state.month,
      day: state.selectedDay ?? state.day,
    };
  }

  if (action.type === 'SET_SELECTED_DATE_DATA') {
    return {
      ...state,
      selectedYear: action?.payload?.selectedYear ?? state.selectedYear,
      selectedMonth: action?.payload?.selectedMonth ?? state.selectedMonth,
      selectedDay: action?.payload?.selectedDay ?? state.selectedDay,
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

  if (action.type === 'SET_SELECTED_DATE') {
    return {
      ...state,
      selectedDate: action?.payload?.selectedDate ?? state.selectedDate,
    };
  }

  return state;
};
