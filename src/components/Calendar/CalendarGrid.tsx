import React from "react";
import { CalendarDay } from "./CalendarDay";

interface CalendarGridProps {
  days: (number | null)[];
  highlightedDate: Date;
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  days,
  highlightedDate,
}) => {
  const highlightedDay = highlightedDate.getDate();

  return (
    <div className="grid grid-cols-7 text-center gap-1">
      {days.map((day, i) => {
        const isHighlighted = day !== null && day === highlightedDay;

        return <CalendarDay key={i} day={day} isCurrentDay={isHighlighted} />;
      })}
    </div>
  );
};
