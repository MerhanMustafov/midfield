// Week days types
export type WeekDaysNormalType = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type WeekDaysZeroBasedType = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type WeekDaysLookUpShort = {
  [key in WeekDaysZeroBasedType]: {
    dayIndex: WeekDaysZeroBasedType;
    dayString: WeekDaysStringShortType;
  }[];
};
export type WeekDaysLookUpLong = {
  [key in WeekDaysZeroBasedType]: {
    dayIndex: WeekDaysZeroBasedType;
    dayString: WeekDaysStringLongType;
  }[];
};
export type WeekDaysStringLongType = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
export type WeekDaysStringShortType = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';

export type WeekDaysStringType = WeekDaysStringShortType[] | WeekDaysStringLongType[];

export type FirstDayOfWeekLookUp = {
  [weekDayStringShort in WeekDaysStringShortType]: WeekDaysZeroBasedType;
};
