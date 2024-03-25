import { MonthNumbersNormalType, NumberOfDaysInAMonthType } from '@/libs/calendar/month/month.types';
import { UseCalendarState } from './useCalendar.types';
import { getDateStringQuery, getDates } from '@/utils/date.utils';

const { todayData, tomorrowDate, yesterdayDate } = getDates();

const dateStringQuery = getDateStringQuery(
  todayData.getFullYear(),
  (todayData.getMonth() + 1) as MonthNumbersNormalType,
  todayData.getDate() as NumberOfDaysInAMonthType,
);

export const initialState: UseCalendarState = {
  toggle: false,
  year: todayData.getFullYear(),
  month: (todayData.getMonth() + 1) as MonthNumbersNormalType,
  day: todayData.getDate() as NumberOfDaysInAMonthType,

  selectedYear: todayData.getFullYear(),
  selectedMonth: (todayData.getMonth() + 1) as MonthNumbersNormalType,
  selectedDay: todayData.getDate() as NumberOfDaysInAMonthType,

  todayYear: todayData.getFullYear(),
  todayMonth: (todayData.getMonth() + 1) as MonthNumbersNormalType,
  todayDay: todayData.getDate() as NumberOfDaysInAMonthType,

  tomorrowYear: tomorrowDate.getFullYear(),
  tomorrowMonth: (tomorrowDate.getMonth() + 1) as MonthNumbersNormalType,
  tomorrowDay: tomorrowDate.getDate() as NumberOfDaysInAMonthType,

  yesterdayYear: yesterdayDate.getFullYear(),
  yesterdayMonth: (yesterdayDate.getMonth() + 1) as MonthNumbersNormalType,
  yesterdayDay: yesterdayDate.getDate() as NumberOfDaysInAMonthType,

  calendarDayOptions: ['Yesterday', 'Today', 'Tomorrow'],
  activeDayOption: 'Today',

  selectedDateQueryString: dateStringQuery,
  calendarYearData: null,
};
