import { Calendar } from "./components/Calendar/Calendar";

function App() {
  return (
    <div className="flex items-center justify-center">
      <Calendar date={new Date("06/24/2000")}></Calendar>
    </div>
  );
}

export default App;
