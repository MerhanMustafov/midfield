import { UseCalendarState } from './useCalendar.types';
import { getTodayDate } from '@/utils/date.utils';

const todayData = getTodayDate();
export const initialState: UseCalendarState = {
  toggle: false,
  year: todayData.year,
  month: todayData.month,
  day: todayData.day,
  selectedDate: todayData.dateQuery,
};
