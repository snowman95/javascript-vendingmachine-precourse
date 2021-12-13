import createObjectStore from "./objectStore.js";
import { ACTION } from "./action.js";
import { product } from "../product.js";
export const PRODUCT_KEY = "product";

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
    case ACTION.GET:
      return state;
    case ACTION.PURCHASE:
      const target = state.find((data) => data.getId() === action.payload);
      if (target && target.purchase()) {
        return reducer(state, { type: ACTION.UPDATE, payload: target });
      }
      return state;
    default:
      return state;
  }
};

const productStore = createObjectStore(
  PRODUCT_KEY,
  ({ name, price, quantity }) => {
    return new product(name, price, quantity);
  },
  reducer
);
export default productStore;

// export function purchase(id) {
//   const products = getStorageDataById(PRODUCT_KEY, id);
//   if (products && products.purchase()) {
//     updateStorage(PRODUCT_KEY, products);
//     updateStorage(CHARGE_KEY, getStorageData(CHARGE_KEY) - products.price);
//   }
// }
