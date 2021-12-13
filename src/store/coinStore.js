import createObjectStore from "./objectStore.js";
import { ACTION } from "./action.js";
import { coin } from "../coin.js";
export const COIN_KEY = "coin";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.UPDATE:
      if (state) {
        const oldData = state.filter(
          (data) => data.getId() !== action.payload.getId()
        );
        return oldData ? [...oldData, action.payload] : [action.payload];
      } else {
        return [action.payload];
      }
    default:
      return state;
  }
};

const coinStore = createObjectStore(
  COIN_KEY,
  ({ price, quantity }) => {
    return new coin(price, quantity);
  },
  reducer
);
export default coinStore;
