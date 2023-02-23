//function to define new values in recoil state
import { atom } from "recoil";

export const incrementByState = atom({
  key: "incrementByState",
  default: 1,
});
