'use client';
import React, { useEffect } from 'react';
import { getYearData } from '@/libs/calendar';
import { useAppStore } from '@/store/store';

const Calendar: React.FC = () => {
  const appStore = useAppStore();

  const calendarData = getYearData(Number(appStore.calendar.state.year), 'Mon');

  useEffect(() => {
    appStore.calendar.dispatch({ type: 'INIT_CALENDAR_DATA', payload: { calendarYearData: calendarData } });
  }, [appStore.calendar.state.year]);
  console.log(calendarData[appStore.calendar.state.month]);
  if (!appStore.calendar.state.toggle) {
    return null;
  }
  return (
    <div>
      <div>
        <div className="grid grid-cols-7">
          {calendarData[appStore.calendar.state.month] &&
            calendarData[appStore.calendar.state.month].weekDaysStrings.map((weekDaysString) => (
              <div key={weekDaysString}>{weekDaysString}</div>
            ))}
          {calendarData[appStore.calendar.state.month] &&
            calendarData[appStore.calendar.state.month].daysInMonth.map((dayData) => (
              <div key={dayData.dayNumberInMonth}>{dayData.dayNumberInMonth}</div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
