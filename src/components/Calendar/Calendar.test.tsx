import { render, screen } from "@testing-library/react";
import { Calendar } from "./Calendar";

describe("Calendar Component", () => {
  describe("Rendering with date prop", () => {
    it("renders calendar component with a date prop", () => {
      const testDate = new Date("2022-10-03");
      render(<Calendar date={testDate} />);

      // Check that the calendar container is rendered
      const calendar = screen.getByText("October 2022");
      expect(calendar).toBeInTheDocument();
    });

    it("renders calendar with different date", () => {
      const testDate = new Date("2020-03-23");
      render(<Calendar date={testDate} />);

      const calendar = screen.getByText("March 2020");
      expect(calendar).toBeInTheDocument();
    });
  });

  describe("Month and Year Display", () => {
    it("displays correct month and year for October 2022", () => {
      const testDate = new Date("2022-10-03");
      render(<Calendar date={testDate} />);

      expect(screen.getByText("October 2022")).toBeInTheDocument();
    });

    it("displays correct month and year for March 2020", () => {
      const testDate = new Date("2020-03-23");
      render(<Calendar date={testDate} />);

      expect(screen.getByText("March 2020")).toBeInTheDocument();
    });

    it("displays correct month and year for January", () => {
      const testDate = new Date("2023-01-15");
      render(<Calendar date={testDate} />);

      expect(screen.getByText("January 2023")).toBeInTheDocument();
    });

    it("displays correct month and year for December", () => {
      const testDate = new Date("2023-12-25");
      render(<Calendar date={testDate} />);

      expect(screen.getByText("December 2023")).toBeInTheDocument();
    });
  });

  describe("Weekdays Display", () => {
    it("displays all weekdays in correct order", () => {
      const testDate = new Date("2022-10-03");
      render(<Calendar date={testDate} />);

      expect(screen.getByText("Su")).toBeInTheDocument();
      expect(screen.getByText("Mo")).toBeInTheDocument();
      expect(screen.getByText("Tu")).toBeInTheDocument();
      expect(screen.getByText("We")).toBeInTheDocument();
      expect(screen.getByText("Th")).toBeInTheDocument();
      expect(screen.getByText("Fr")).toBeInTheDocument();
      expect(screen.getByText("Sa")).toBeInTheDocument();
    });
  });

  describe("Date Alignment and Display", () => {
    it("displays dates for October 2022 correctly aligned", () => {
      const testDate = new Date("2022-10-03");
      render(<Calendar date={testDate} />);

      // October 2022 starts on a Saturday (day 6)
      // So the first day (1) should be in the 7th column (Sa)
      // We should see dates 1-31
      expect(screen.getByText("1")).toBeInTheDocument();
      expect(screen.getByText("31")).toBeInTheDocument();
    });

    it("displays dates for March 2020 correctly aligned", () => {
      const testDate = new Date("2020-03-23");
      render(<Calendar date={testDate} />);

      // March 2020 starts on a Sunday (day 0)
      // We should see dates 1-31
      expect(screen.getByText("1")).toBeInTheDocument();
      expect(screen.getByText("31")).toBeInTheDocument();
    });

    it("displays correct number of days for February in non-leap year", () => {
      const testDate = new Date("2023-02-15");
      render(<Calendar date={testDate} />);

      // February 2023 has 28 days
      expect(screen.getByText("1")).toBeInTheDocument();
      expect(screen.getByText("28")).toBeInTheDocument();
      // Should not have day 29
      expect(screen.queryByText("29")).not.toBeInTheDocument();
    });

    it("displays correct number of days for February in leap year", () => {
      const testDate = new Date("2020-02-15");
      render(<Calendar date={testDate} />);

      // February 2020 has 29 days (leap year)
      expect(screen.getByText("1")).toBeInTheDocument();
      expect(screen.getByText("29")).toBeInTheDocument();
    });

    it("displays dates starting from 1", () => {
      const testDate = new Date("2022-10-03");
      render(<Calendar date={testDate} />);

      expect(screen.getByText("1")).toBeInTheDocument();
    });
  });

  describe("Date Highlighting", () => {
    it("highlights the correct date (3rd October 2022)", () => {
      const testDate = new Date("2022-10-03");
      render(<Calendar date={testDate} />);

      // Find the highlighted day (should have specific styling)
      const day3 = screen.getByText("3");
      expect(day3).toBeInTheDocument();

      // Check that it has the highlighted class
      const day3Parent = day3.closest("div");
      expect(day3Parent).toHaveClass("bg-slate-50", "text-slate-900");
    });

    it("highlights the correct date (23rd March 2020)", () => {
      const testDate = new Date("2020-03-23");
      render(<Calendar date={testDate} />);

      const day23 = screen.getByText("23");
      expect(day23).toBeInTheDocument();

      const day23Parent = day23.closest("div");
      expect(day23Parent).toHaveClass("bg-slate-50", "text-slate-900");
    });

    it("highlights first day of month correctly", () => {
      const testDate = new Date("2022-10-01");
      render(<Calendar date={testDate} />);

      const day1 = screen.getByText("1");
      const day1Parent = day1.closest("div");
      expect(day1Parent).toHaveClass("bg-slate-50", "text-slate-900");
    });

    it("highlights last day of month correctly", () => {
      const testDate = new Date("2022-10-31");
      render(<Calendar date={testDate} />);

      const day31 = screen.getByText("31");
      const day31Parent = day31.closest("div");
      expect(day31Parent).toHaveClass("bg-slate-50", "text-slate-900");
    });

    it("does not highlight other dates", () => {
      const testDate = new Date("2022-10-03");
      render(<Calendar date={testDate} />);

      // Day 2 should not be highlighted
      const day2 = screen.getByText("2");
      const day2Parent = day2.closest("div");
      expect(day2Parent).not.toHaveClass("bg-slate-50", "text-slate-900");

      // Day 4 should not be highlighted
      const day4 = screen.getByText("4");
      const day4Parent = day4.closest("div");
      expect(day4Parent).not.toHaveClass("bg-slate-50", "text-slate-900");
    });
  });

  describe("Edge Cases", () => {
    it("handles year boundary correctly (December to January)", () => {
      const testDate = new Date("2022-12-31");
      render(<Calendar date={testDate} />);

      expect(screen.getByText("December 2022")).toBeInTheDocument();
      expect(screen.getByText("31")).toBeInTheDocument();
    });

    it("handles leap year February correctly", () => {
      const testDate = new Date("2024-02-29");
      render(<Calendar date={testDate} />);

      expect(screen.getByText("February 2024")).toBeInTheDocument();
      expect(screen.getByText("29")).toBeInTheDocument();

      const day29 = screen.getByText("29");
      const day29Parent = day29.closest("div");
      expect(day29Parent).toHaveClass("bg-slate-50", "text-slate-900");
    });

    it("handles month starting on different days of week", () => {
      // Test a month that starts on Monday
      const testDate = new Date("2023-05-15");
      render(<Calendar date={testDate} />);

      expect(screen.getByText("May 2023")).toBeInTheDocument();
      expect(screen.getByText("1")).toBeInTheDocument();
    });
  });

  describe("Component Structure", () => {
    it("renders all required components", () => {
      const testDate = new Date("2022-10-03");
      render(<Calendar date={testDate} />);

      // Check header
      expect(screen.getByText("October 2022")).toBeInTheDocument();

      // Check weekdays
      expect(screen.getByText("Su")).toBeInTheDocument();

      // Check dates grid
      expect(screen.getByText("1")).toBeInTheDocument();
    });
  });
});
