import { WeekDaysLookUpLong, WeekDaysLookUpShort, FirstDayOfWeekLookUp } from '@/libs/calendar/week/week.types';

export const firstDayOfWeekLookUp: FirstDayOfWeekLookUp = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

export const weekDaysLookUpShort: WeekDaysLookUpShort = {
  0: [
    { dayIndex: 0, dayString: 'Sun' }, // sunday first
    { dayIndex: 1, dayString: 'Mon' }, // monday
    { dayIndex: 2, dayString: 'Tue' }, // tuesday
    { dayIndex: 3, dayString: 'Wed' }, // wednesday
    { dayIndex: 4, dayString: 'Thu' }, // thursday
    { dayIndex: 5, dayString: 'Fri' }, // friday
    { dayIndex: 6, dayString: 'Mon' }, // saturday last
  ],
  1: [
    { dayIndex: 1, dayString: 'Mon' }, // monday first
    { dayIndex: 2, dayString: 'Tue' }, // tuesday
    { dayIndex: 3, dayString: 'Wed' }, // wednesday
    { dayIndex: 4, dayString: 'Thu' }, // thursday
    { dayIndex: 5, dayString: 'Fri' }, // friday
    { dayIndex: 6, dayString: 'Sat' }, // saturday
    { dayIndex: 0, dayString: 'Sun' }, // sunday last
  ],
  2: [
    { dayIndex: 2, dayString: 'Tue' }, // tuesday first
    { dayIndex: 3, dayString: 'Wed' }, // wednesday
    { dayIndex: 4, dayString: 'Thu' }, // thursday
    { dayIndex: 5, dayString: 'Fri' }, // friday
    { dayIndex: 6, dayString: 'Sat' }, // saturday
    { dayIndex: 0, dayString: 'Sun' }, // sunday
    { dayIndex: 1, dayString: 'Mon' }, // monday last
  ],
  3: [
    { dayIndex: 3, dayString: 'Wed' }, // wednesday first
    { dayIndex: 4, dayString: 'Thu' }, // thursday
    { dayIndex: 5, dayString: 'Fri' }, // friday
    { dayIndex: 6, dayString: 'Sat' }, // saturday
    { dayIndex: 0, dayString: 'Sun' }, // sunday
    { dayIndex: 1, dayString: 'Mon' }, // monday
    { dayIndex: 2, dayString: 'Tue' }, // tuesday last
  ],
  4: [
    { dayIndex: 4, dayString: 'Thu' }, // thursday first
    { dayIndex: 5, dayString: 'Fri' }, // friday
    { dayIndex: 6, dayString: 'Sat' }, // saturday
    { dayIndex: 0, dayString: 'Sun' }, // sunday
    { dayIndex: 1, dayString: 'Mon' }, // monday
    { dayIndex: 2, dayString: 'Tue' }, // tuesday
    { dayIndex: 3, dayString: 'Wed' }, // wednesday last
  ],
  5: [
    { dayIndex: 5, dayString: 'Fri' }, // friday first
    { dayIndex: 6, dayString: 'Sat' }, // saturday
    { dayIndex: 0, dayString: 'Sun' }, // sunday
    { dayIndex: 1, dayString: 'Mon' }, // monday
    { dayIndex: 2, dayString: 'Tue' }, // tuesday
    { dayIndex: 3, dayString: 'Wed' }, // wednesday
    { dayIndex: 4, dayString: 'Thu' }, // thursday last
  ],
  6: [
    { dayIndex: 6, dayString: 'Sat' }, // saturday first
    { dayIndex: 0, dayString: 'Sun' }, // sunday
    { dayIndex: 1, dayString: 'Mon' }, // monday
    { dayIndex: 2, dayString: 'Tue' }, // tuesday
    { dayIndex: 3, dayString: 'Wed' }, // wednesday
    { dayIndex: 4, dayString: 'Thu' }, // thursday
    { dayIndex: 5, dayString: 'Fri' }, // friday last
  ],
};

export const weekDaysLookUpLong: WeekDaysLookUpLong = {
  0: [
    { dayIndex: 0, dayString: 'Sunday' }, // sunday first
    { dayIndex: 1, dayString: 'Monday' }, // monday
    { dayIndex: 2, dayString: 'Tuesday' }, // tuesday
    { dayIndex: 3, dayString: 'Wednesday' }, // wednesday
    { dayIndex: 4, dayString: 'Thursday' }, // thursday
    { dayIndex: 5, dayString: 'Friday' }, // friday
    { dayIndex: 6, dayString: 'Monday' }, // saturday last
  ],
  1: [
    { dayIndex: 1, dayString: 'Monday' }, // monday first
    { dayIndex: 2, dayString: 'Tuesday' }, // tuesday
    { dayIndex: 3, dayString: 'Wednesday' }, // wednesday
    { dayIndex: 4, dayString: 'Thursday' }, // thursday
    { dayIndex: 5, dayString: 'Friday' }, // friday
    { dayIndex: 6, dayString: 'Saturday' }, // saturday
    { dayIndex: 0, dayString: 'Sunday' }, // sunday last
  ],
  2: [
    { dayIndex: 2, dayString: 'Tuesday' }, // tuesday first
    { dayIndex: 3, dayString: 'Wednesday' }, // wednesday
    { dayIndex: 4, dayString: 'Thursday' }, // thursday
    { dayIndex: 5, dayString: 'Friday' }, // friday
    { dayIndex: 6, dayString: 'Saturday' }, // saturday
    { dayIndex: 0, dayString: 'Sunday' }, // sunday
    { dayIndex: 1, dayString: 'Monday' }, // monday last
  ],
  3: [
    { dayIndex: 3, dayString: 'Wednesday' }, // wednesday first
    { dayIndex: 4, dayString: 'Thursday' }, // thursday
    { dayIndex: 5, dayString: 'Friday' }, // friday
    { dayIndex: 6, dayString: 'Saturday' }, // saturday
    { dayIndex: 0, dayString: 'Sunday' }, // sunday
    { dayIndex: 1, dayString: 'Monday' }, // monday
    { dayIndex: 2, dayString: 'Tuesday' }, // tuesday last
  ],
  4: [
    { dayIndex: 4, dayString: 'Thursday' }, // thursday first
    { dayIndex: 5, dayString: 'Friday' }, // friday
    { dayIndex: 6, dayString: 'Saturday' }, // saturday
    { dayIndex: 0, dayString: 'Sunday' }, // sunday
    { dayIndex: 1, dayString: 'Monday' }, // monday
    { dayIndex: 2, dayString: 'Tuesday' }, // tuesday
    { dayIndex: 3, dayString: 'Wednesday' }, // wednesday last
  ],
  5: [
    { dayIndex: 5, dayString: 'Friday' }, // friday first
    { dayIndex: 6, dayString: 'Saturday' }, // saturday
    { dayIndex: 0, dayString: 'Sunday' }, // sunday
    { dayIndex: 1, dayString: 'Monday' }, // monday
    { dayIndex: 2, dayString: 'Tuesday' }, // tuesday
    { dayIndex: 3, dayString: 'Wednesday' }, // wednesday
    { dayIndex: 4, dayString: 'Thursday' }, // thursday last
  ],
  6: [
    { dayIndex: 6, dayString: 'Saturday' }, // saturday first
    { dayIndex: 0, dayString: 'Sunday' }, // sunday
    { dayIndex: 1, dayString: 'Monday' }, // monday
    { dayIndex: 2, dayString: 'Tuesday' }, // tuesday
    { dayIndex: 3, dayString: 'Wednesday' }, // wednesday
    { dayIndex: 4, dayString: 'Thursday' }, // thursday
    { dayIndex: 5, dayString: 'Friday' }, // friday last
  ],
};
