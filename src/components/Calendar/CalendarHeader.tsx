import React from "react";

interface CalendarHeaderProps {
  monthName: string;
  year: number;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  monthName,
  year,
}) => {
  return (
    <p className="m-2 text-slate-50">
      {monthName} {year}
    </p>
  );
};

