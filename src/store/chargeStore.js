import createStore from "./store.js";
import { ACTION } from "./action.js";

const USER_KEY = "charge";
const MACHINE_KEY = "machine_charge";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD:
      const addNum = Number(action.payload);
      if (state) {
        if (Number(state) + addNum >= 0) return Number(state) + addNum;
        return Number(state);
      }
      return addNum;
    case ACTION.UPDATE:
      return Number(action.payload);
    default:
      return state;
  }
};
export const userChargeStore = createStore(USER_KEY, reducer);
export const machineChargeStore = createStore(MACHINE_KEY, reducer);
