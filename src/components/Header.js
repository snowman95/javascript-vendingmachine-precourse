import Component from "./Component.js";

export default class Header {
  constructor(target) {
    this.target = target;
    this.createHeader();
    this.createTitle();
    this.createButtons();
  }
  createHeader() {
    this.Header = new Component({
      target: this.target,
      type: "header",
      id: "header",
    });
  }
  createTitle() {
    this.title = new Component({
      target: this.Header.elem,
      type: "div",
      id: "header-title",
      innerHtml: `🥤 자판기 🥤`,
    });
  }
  createButtons() {
    this.productAddMenu = new Component({
      target: this.Header.elem,
      type: "button",
      id: "product-add-menu",
      innerHtml: "상품 관리",
    });
    this.machineManageMenu = new Component({
      target: this.Header.elem,
      type: "button",
      id: "vending-machine-manage-menu",
      innerHtml: "잔돈 충전",
    });
    this.purchaseMenu = new Component({
      target: this.Header.elem,
      type: "button",
      id: "product-purchase-menu",
      innerHtml: "상품 구매",
    });
  }

  addEvent({
    onProductAddClicked,
    onManageMenuClicked,
    onPurchageMenuClicked,
  }) {
    this.productAddMenu.addEvent("click", onProductAddClicked);
    this.machineManageMenu.addEvent("click", onManageMenuClicked);
    this.purchaseMenu.addEvent("click", onPurchageMenuClicked);
  }
}

// ${this.#machineManageMenu.render()}
// ${this.#productAddMenu.render()}
// ${this.#purchaseMenu.render()}
