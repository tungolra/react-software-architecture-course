//function to define new values in recoil state
import { atom } from "recoil";

export const counterState = atom({
  key: "counterState", //string to store state
  default: 0, //default value of state
});
