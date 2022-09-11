import { INCREMENT } from "./action-types";
import { DECREMENT } from "./action-types";
import { CHANGETITLE } from "./action-types";


export const incrementCounter = () => {
    return { type: INCREMENT };
  };
export const decrementCounter = () => {
    return { type: DECREMENT };
  };
export const changeTitle = (e) => {
    return { type: CHANGETITLE , payload:e};
  };