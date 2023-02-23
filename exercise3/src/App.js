import { CounterButton } from "./CounterButton";
import { CounterButtonII } from "./CounterButtonII";
import "./App.css";
import CounterProvider from "./CounterProvider";

const App = () => {
  return (
    <>
      <CounterProvider>
        <h1>Use Context Example</h1>
        <CounterButtonII />
      </CounterProvider>
      <h1>Use State Example</h1>
      <CounterButton />
    </>
  );
};

export default App;
