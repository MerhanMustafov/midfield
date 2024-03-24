import { MonthNumbersNormalType, NumberOfDaysInAMonthType } from '@/libs/calendar/month/month.types';

export const getTodayDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1) as MonthNumbersNormalType;
  const day = date.getDate() as NumberOfDaysInAMonthType;

  const dateQuery = `${year}-${month}-${day}`;
  return {
    dateQuery,
    year,
    month,
    day,
  };
};
