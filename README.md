# Calendar Component Library

A reusable React calendar component that displays a month view for a given date. Built with TypeScript and TailwindCSS.

## Installation

```bash
npm install cal
# or
yarn add cal
# or
pnpm add cal
```

## Prerequisites

This component requires:

- React 16.8.0 or higher
- TailwindCSS (for styling)

Make sure you have TailwindCSS configured in your project. If you don't have it set up, follow the [TailwindCSS installation guide](https://tailwindcss.com/docs/installation).

## Usage

```tsx
import { Calendar } from "cal";

function App() {
  return <Calendar date={new Date("2022-10-03")} />;
}
```

## Props

### `Calendar`

| Prop   | Type   | Required | Description                                                                                                                   |
| ------ | ------ | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `date` | `Date` | Yes      | The date to display in the calendar. The calendar will render the month and year of this date and highlight the specific day. |

## Examples

### Basic Usage

```tsx
import { Calendar } from "cal";

function MyComponent() {
  return <Calendar date={new Date("2022-10-03")} />;
}
```

### Different Dates

```tsx
import { Calendar } from 'cal';

// Display March 2020 with the 23rd highlighted
<Calendar date={new Date("2020-03-23")} />

// Display current date
<Calendar date={new Date()} />
```

## Features

- ✅ Displays month and year header
- ✅ Shows weekday labels (Su, Mo, Tu, We, Th, Fr, Sa)
- ✅ Displays all dates for the month, properly aligned
- ✅ Highlights the specified date
- ✅ Handles leap years correctly
- ✅ Fully typed with TypeScript
- ✅ Comprehensive test coverage

## Development

This project was created with Create React App.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production

## License

MIT
