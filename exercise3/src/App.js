import { CounterButton } from "./useState/CounterButton";
import { CounterButtonII } from "./useContext/CounterButtonII";
import { CounterButtonIII } from "./recoil/CounterButtonIII";
import { CounterButtonIV } from "./redux/CounterButtonIV";
import { Counter } from "./mobX/Counter";

import CounterProvider from "./useContext/CounterProvider";

import { RecoilRoot } from "recoil";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./App.css";
import { CounterButtonV } from "./mobX/CounterButtonV";

const counter = new Counter();

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
      <Provider store={store}>
        <h1>Redux Example</h1>
        <CounterButtonIV />
      </Provider>
      <>
        <h1>MobX Example</h1>
        <CounterButtonV counter={counter} />
      </>
    </>
  );
};

export default App;
