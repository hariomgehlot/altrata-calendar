/**
 * Props for the Calendar component.
 */
export interface CalendarProps {
  /**
   * The date to display in the calendar. This prop is required.
   * The calendar will render the month and year of this date,
   * and highlight the specific day.
   *
   * @example
   * ```tsx
   * <Calendar date={new Date("2022-10-03")} />
   * ```
   */
  date: Date;
}

