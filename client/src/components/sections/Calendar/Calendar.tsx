'use client';
import React, { useEffect } from 'react';
import { getYearData } from '@/libs/calendar';
import { useAppStore } from '@/store/store';
import { MonthNumbersNormalType, NumberOfDaysInAMonthType } from '@/libs/calendar/month/month.types';
import { monthsShort } from '@/libs/calendar/month/month.constants';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { getDateStringQuery } from '@/utils/date.utils';

const Calendar: React.FC = () => {
  const appStore = useAppStore();

  const calendarData = getYearData(Number(appStore.calendar.state.year), 'Mon');

  useEffect(() => {
    appStore.calendar.dispatch({ type: 'INIT_CALENDAR_DATA', payload: { calendarYearData: calendarData } });
  }, [appStore.calendar.state.year]);

  const handleDayClick = (
    year: number | string,
    month: MonthNumbersNormalType,
    day: NumberOfDaysInAMonthType | null,
  ) => {
    if (!day) {
      return;
    }
    appStore.calendar.dispatch({
      type: 'SET_SELECTED_DATE_DATA',
      payload: { selectedYear: year, selectedMonth: month, selectedDay: day },
    });
    const dateStringQuery = getDateStringQuery(year, month, day);
    appStore.calendar.dispatch({
      type: 'SET_SELECTED_DATE_QUERY_STRING',
      payload: { selectedDateQueryString: dateStringQuery },
    });
  };

  const handleNextMonth = () => {
    const monthNumber = Number(appStore.calendar.state.month);
    const yearNumber = Number(appStore.calendar.state.year);
    if (monthNumber === 12) {
      appStore.calendar.dispatch({ type: 'SET_MONTH', payload: { month: 1 } });
      appStore.calendar.dispatch({ type: 'SET_YEAR', payload: { year: yearNumber + 1 } });
      return;
    }
    appStore.calendar.dispatch({
      type: 'SET_MONTH',
      payload: { month: (monthNumber + 1) as MonthNumbersNormalType },
    });
  };

  const handlePrevMonth = () => {
    const monthNumber = Number(appStore.calendar.state.month);
    const yearNumber = Number(appStore.calendar.state.year);

    if (appStore.calendar.state.month === 1) {
      appStore.calendar.dispatch({ type: 'SET_MONTH', payload: { month: 12 } });
      appStore.calendar.dispatch({ type: 'SET_YEAR', payload: { year: yearNumber - 1 } });
      return;
    }

    appStore.calendar.dispatch({
      type: 'SET_MONTH',
      payload: { month: (monthNumber - 1) as MonthNumbersNormalType },
    });
  };

  if (!appStore.calendar.state.toggle) {
    return null;
  }
  return (
    <div className="absolute left-0 top-[calc(100%+0px)] z-30 flex w-full flex-col rounded-md border-1px border-black bg-white p-3 md:w-[500px]">
      <div className="mx-auto flex w-1/2 items-center justify-between">
        <MdNavigateBefore onClick={handlePrevMonth} className="cursor-pointer text-2xl" />
        <div className="flex gap-2">
          <span> {monthsShort[appStore.calendar.state.month]}</span>
          <span>{appStore.calendar.state.year}</span>
        </div>
        <MdNavigateNext onClick={handleNextMonth} className="cursor-pointer text-2xl" />
      </div>
      <div>
        <div className="flex w-full flex-col gap-2">
          <div className="grid grid-cols-7  gap-x-1 border-b-1px border-black">
            {calendarData[appStore.calendar.state.month] &&
              calendarData[appStore.calendar.state.month].weekDaysStrings.map((weekDaysString) => (
                <div className=" text-center" key={weekDaysString}>
                  {weekDaysString}
                </div>
              ))}
          </div>
          <div className="grid grid-cols-7   gap-x-1 gap-y-2">
            {calendarData &&
              calendarData[appStore.calendar.state.month].daysInMonth.map((dayData, i) => {
                const key = `${dayData.yearNumber}_${dayData.monthNumber}_${dayData.dayNumberInMonth}_${i}`;
                const isSelected =
                  Number(dayData.yearNumber) === Number(appStore.calendar.state.selectedYear) &&
                  Number(dayData.monthNumber) === Number(appStore.calendar.state.selectedMonth) &&
                  Number(dayData.dayNumberInMonth) === Number(appStore.calendar.state.selectedDay);
                return (
                  <div
                    key={key}
                    onClick={() => handleDayClick(dayData.yearNumber, dayData.monthNumber, dayData.dayNumberInMonth)}
                    className={`${isSelected ? 'bg-slate-800 text-white' : ''} ${' text-center'}`}
                  >
                    {dayData.dayNumberInMonth}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
