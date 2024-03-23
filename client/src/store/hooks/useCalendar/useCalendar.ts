import { useReducer } from 'react';
import { UseCalendarHook } from './useCalendar.types';
import { initialState } from './useCalendar.constants';
import { reducer } from './useCalendar.reducer';

export const useCalendar = (): UseCalendarHook => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    calendar: {
      state: state || initialState,
      dispatch,
    },
  };
};
