import { UseCalendarState, UseCalendarAction } from './useCalendar.types';
import { initialState } from './useCalendar.constants';

export const reducer = (state: UseCalendarState = initialState, action: UseCalendarAction): UseCalendarState => {
  if (action.type === 'TOGGLE_CALENDAR') {
    return {
      ...state,
      toggle: action?.payload?.toggle || !state.toggle,
    };
  }

  if (action.type === 'SET_YEAR') {
    return {
      ...state,
      year: action?.payload?.year || state.year,
    };
  }

  if (action.type === 'SET_MONTH') {
    return {
      ...state,
      month: action?.payload?.month || state.month,
    };
  }

  if (action.type === 'SET_DAY') {
    return {
      ...state,
      day: action?.payload?.day || state.day,
    };
  }

  if (action.type === 'SET_SELECTED_DATE') {
    return {
      ...state,
      selectedDate: action?.payload?.selectedDate || state.selectedDate,
    };
  }

  return state;
};
