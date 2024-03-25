import { useEffect, useReducer } from 'react';
import { UseCalendarHook } from './useCalendar.types';
import { initialState } from './useCalendar.constants';
import { reducer } from './useCalendar.reducer';
import { getActiveDayOption } from '@/utils/date.utils';
import { useRouter } from 'next/navigation';

export const useCalendar = (): UseCalendarHook => {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const activeDayOption = getActiveDayOption(new Date(state.selectedDateQueryString));
    dispatch({ type: 'SET_ACTIVE_DAY_OPTION', payload: { activeDayOption: activeDayOption } });
    router.push(`/fixtures/${state.selectedDateQueryString}`);
  }, [state.selectedDateQueryString]);

  return {
    calendar: {
      state: state || initialState,
      dispatch,
    },
  };
};
