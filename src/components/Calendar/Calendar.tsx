import React from "react";
import { CalendarProps } from "./Calendar.types";
import { getMonthMatrix } from "./Calendar.utils";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarWeekdays } from "./CalendarWeekdays";
import { CalendarGrid } from "./CalendarGrid";

/**
 * A reusable calendar component that displays a month view for a given date.
 *
 * @param props - The component props
 * @param props.date - **Required.** The date to display in the calendar. The calendar
 *                     will render the month and year of this date and highlight the specific day.
 *
 * @example
 * ```tsx
 * // Display October 2022 with the 3rd highlighted
 * <Calendar date={new Date("2022-10-03")} />
 *
 * // Display March 2020 with the 23rd highlighted
 * <Calendar date={new Date("2020-03-23")} />
 * ```
 */
export const Calendar: React.FC<CalendarProps> = ({ date }) => {
  if (!date) {
    throw new Error(
      "Calendar component requires a 'date' prop. Example: <Calendar date={new Date()} />"
    );
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error(
      "Calendar component 'date' prop must be a valid Date object."
    );
  }

  const days = getMonthMatrix(date);
  const monthName = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className="relative w-80 h-80 rounded-2xl overflow-hidden">
      <div
        className="absolute inset-0 rounded-2xl p-[3px] 
              bg-gradient-to-br from-white/40 to-white/10 
              backdrop-blur-md 
              [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] 
              [mask-composite:exclude] 
              [-webkit-mask-composite:xor]"
      ></div>

      <div className="relative z-10 w-full h-full p-2">
        <div className="w-full h-full rounded-xl bg-slate-700 text-center p-6">
          <CalendarHeader monthName={monthName} year={year} />
          <CalendarWeekdays />
          <CalendarGrid days={days} highlightedDate={date} />
        </div>
      </div>
    </div>
  );
};
