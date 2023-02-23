import { CounterButton } from "./CounterButton";
import { CounterButtonII } from "./CounterButtonII";
import { CounterButtonIII } from "./CounterButtonIII";
import { RecoilRoot } from "recoil";
import "./App.css";
import CounterProvider from "./useContext/CounterProvider";

const App = () => {
  return (
    <>
      <CounterProvider>
        <h1>Use Context Example</h1>
        <CounterButtonII />
      </CounterProvider>
      <>
        <h1>Use State Example</h1>
        <CounterButton />
      </>
      <RecoilRoot>
        <h1>Recoil Example</h1>
        <CounterButtonIII />
      </RecoilRoot>
    </>
  );
};

export default App;
