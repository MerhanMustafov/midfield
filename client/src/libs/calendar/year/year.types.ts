import { MonthNumbersNormalType, DaysInMonthType } from '@/libs/calendar/month/month.types';
import { WeekDaysStringType } from '@/libs/calendar/week/week.types';

export type YearData = {
  [monthNumber in MonthNumbersNormalType]: {
    daysInMonth: DaysInMonthType[];
    weekDaysStrings: WeekDaysStringType;
  };
};
