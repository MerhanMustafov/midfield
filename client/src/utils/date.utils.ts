import { MonthNumbersNormalType, NumberOfDaysInAMonthType } from '@/libs/calendar/month/month.types';
import { ActiveDayOption } from '@/store/hooks/useCalendar/useCalendar.types';

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

export const getDates = (): { todayData: Date; tomorrowDate: Date; yesterdayDate: Date } => {
  const todayData = new Date();

  const tomorrowDate = new Date(todayData);
  tomorrowDate.setDate(todayData.getDate() + 1);

  const yesterdayDate = new Date(todayData);
  yesterdayDate.setDate(todayData.getDate() - 1);

  return {
    todayData,
    tomorrowDate,
    yesterdayDate,
  };
};

export const getActiveDayOption = (inputDate: Date): ActiveDayOption => {
  const currentDate = new Date();

  const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day

  const inputDateMidnight = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()).getTime();
  const currentMidnight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()).getTime();

  if (inputDateMidnight === currentMidnight) {
    return 'Today';
  } else if (inputDateMidnight === currentMidnight + oneDay) {
    return 'Tomorrow';
  } else if (inputDateMidnight === currentMidnight - oneDay) {
    return 'Yesterday';
  } else {
    return null;
  }
};

export const getDateStringQuery = (
  year: string | number,
  month: MonthNumbersNormalType,
  day: NumberOfDaysInAMonthType,
) => {
  const dateMonth = month < 10 ? `0${month}` : month;
  const dateDay = day < 10 ? `0${day}` : day;
  return `${year}-${dateMonth}-${dateDay}`;
};
