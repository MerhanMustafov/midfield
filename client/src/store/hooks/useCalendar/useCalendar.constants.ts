import { MonthNumbersNormalType, NumberOfDaysInAMonthType } from '@/libs/calendar/month/month.types';
import { UseCalendarState } from './useCalendar.types';

const todayData = new Date();
const dateQuery = `${todayData.getFullYear()}-${todayData.getMonth() + 1 < 10 ? `0${todayData.getMonth()}` : todayData.getMonth()}-${todayData.getDate()}`;

export const initialState: UseCalendarState = {
  toggle: false,
  year: todayData.getFullYear(),
  month: (todayData.getMonth() + 1) as MonthNumbersNormalType,
  day: todayData.getDate() as NumberOfDaysInAMonthType,
  selectedDate: dateQuery,
  calendarYearData: null,
};
