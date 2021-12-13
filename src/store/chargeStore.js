import createStore from "./store.js";
import { ACTION } from "./action.js";

export const CHARGE_KEY = "charge";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD:
      const addNum = Number(action.payload);
      if (state) {
        if (Number(state) + addNum >= 0) return Number(state) + addNum;
        return Number(state);
      }
      return addNum;
    case ACTION.GET:
      return state;
    default:
      return state;
  }
};

const chargeStore = createStore(CHARGE_KEY, reducer);

export default chargeStore;
