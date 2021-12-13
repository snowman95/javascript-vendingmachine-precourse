import Header from "./components/header.js";
import purchaseMenu from "./screen/purchaseMenu.js";
import productAddMenu from "./screen/productAddMenu.js";
import productStore from "./store/productStore.js";
import chargeStore from "./store/chargeStore.js";
import { ACTION } from "./store/action.js";
import coinStore from "./store/coinStore.js";
import { coin } from "./coin.js";

export default class VendingMachine {
  constructor() {
    this.app = document.querySelector("#app");
    this.createHeader();
    this.createMenu();
    if (chargeStore.getState() === null) {
      chargeStore.dispatch({ type: ACTION.ADD, payload: 0 });
    }

    [500, 100, 10, 1].map((price) => {
      coinStore.dispatch({
        type: ACTION.UPDATE,
        payload: new coin(price, ""),
      });
    });
    productStore.publish(ACTION.UPDATE);
    chargeStore.publish(ACTION.ADD);
  }
  createHeader() {
    this.header = new Header(this.app);
    this.header.addEvent({
      onProductAddClicked: () => console.log("상품 관리 탭"),
      onManageMenuClicked: () => console.log("잔돈 충전 탭"),
      onPurchageMenuClicked: () => console.log("상품 구매 탭"),
    });
  }
  createMenu() {
    this.productAddMenu = new productAddMenu(this.app);
    this.purchaseMenu = new purchaseMenu(this.app);
  }
}

const machine = new VendingMachine();
