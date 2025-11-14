import React from "react";
import { WEEKDAYS } from "./Calendar.utils";

export const CalendarWeekdays: React.FC = () => {
  return (
    <div className="grid grid-cols-7 text-center text-xs font-semibold mb-1 text-slate-300">
      {WEEKDAYS.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
};

