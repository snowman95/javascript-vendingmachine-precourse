import Header from "./components/header.js";
import productAddMenu from "./screen/productAddMenu.js";
export default class VendingMachine {
  constructor() {
    this.app = document.querySelector("#app");
    this.createHeader();
    this.createProductAddMenu();
  }
  createHeader() {
    this.header = new Header(this.app);
    this.header.addEvent({
      onProductAddClicked: () => console.log("상품 관리 탭"),
      onManageMenuClicked: () => console.log("잔돈 충전 탭"),
      onPurchageMenuClicked: () => console.log("상품 구매 탭"),
    });
  }
  createProductAddMenu() {
    this.productAddMenu = new productAddMenu(this.app);
  }
}

const machine = new VendingMachine();
