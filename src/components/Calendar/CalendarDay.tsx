import React from "react";

interface CalendarDayProps {
  day: number | null;
  isCurrentDay: boolean;
}

export const CalendarDay: React.FC<CalendarDayProps> = ({
  day,
  isCurrentDay,
}) => {
  return (
    <div
      className={`h-8 w-8 flex items-center justify-center rounded ${
        day
          ? isCurrentDay
            ? "bg-slate-50 text-slate-900"
            : "text-slate-100"
          : ""
      }`}
    >
      {day || ""}
    </div>
  );
};
