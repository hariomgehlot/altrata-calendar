import { Calendar } from "./components/Calendar/Calendar";

function App() {
  return (
    <div className="flex items-center justify-center">
      <Calendar date={new Date()}></Calendar>
    </div>
  );
}

export default App;
