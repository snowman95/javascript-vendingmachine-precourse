import component from "../components/component.js";
import Component from "../components/component.js";
import Input from "../components/input.js";
import Table from "../components/table.js";
import chargeStore from "../store/chargeStore.js";
import productStore from "../store/productStore.js";
import { ACTION } from "../store/action.js";
import coinStore from "../store/coinStore.js";
import coinTable from "../components/coinTable.js";

const CHARGE_ID = "charge";
const PURCHASE_ID = "product-purchase";
const COIN_ID = "coin";

export default class purchaseMenu {
  constructor(target) {
    this.target = target;
    this.createCoinInputSection(this.target);
    this.createProductStatusSection(this.target);
    this.createCoinStatusSection(this.target);
    this.subscribe();
  }
  createCoinInputSection(target) {
    this.addSection = new Component({
      target: target,
      type: "section",
      id: `${CHARGE_ID}-section`,
    });
    this.createInsertTitle(this.addSection.elem);
    this.createInsertForm(this.addSection.elem);
    this.createInsertInput(this.insertForm.elem);
    this.createInsertButton(this.insertForm.elem);
    this.createInsertText(this.addSection.elem);
  }
  createInsertTitle(target) {
    this.insertTitle = new Component({
      target: target,
      type: "div",
      id: `${CHARGE_ID}-title`,
      innerHtml: "금액 투입",
    });
  }
  createInsertForm(target) {
    this.insertForm = new component({
      target: target,
      type: "form",
      id: `${CHARGE_ID}-form`,
    });
  }

  createInsertInput(target) {
    this.insertInput = new Input({
      target: target,
      type: "input",
      id: `${CHARGE_ID}-input`,
      placeholder: "투입할 금액",
      inputType: "number",
    });
  }
  createInsertButton(target) {
    this.insertButton = new Component({
      target: target,
      type: "button",
      id: `${CHARGE_ID}-button`,
      innerHtml: "투입하기",
    });
    this.insertButton.addEvent("click", () => {
      this.insertCoin(Number(this.insertInput.getText()));
    });
  }
  createInsertText(target) {
    this.insertAmountLabel = new Component({
      target: target,
      type: "span",
      id: `${CHARGE_ID}-amount-label`,
      innerHtml: "투입한 금액:",
    });
    this.insertAmount = new Component({
      target: target,
      type: "span",
      id: `${CHARGE_ID}-amount`,
    });
  }

  createProductStatusSection(target) {
    this.productStatusSection = new Component({
      target: target,
      type: "section",
      id: `${PURCHASE_ID}-section`,
    });
    this.createProductStatusTitle(this.productStatusSection.elem);
    this.createProductStatusTable(this.productStatusSection.elem);
  }

  createProductStatusTitle(target) {
    this.productStatusTitle = new Component({
      target: target,
      type: "div",
      id: `${PURCHASE_ID}-title`,
      innerHtml: "구매할 수 있는 상품 현황",
    });
  }

  createProductStatusTable(target) {
    this.productStatusTable = new Table({
      target: target,
      type: "table",
      id: `${PURCHASE_ID}`,
      tableHeader: {
        name: "상품명",
        price: "가격",
        quantity: "수량",
        buy: "구매",
      },
    });
  }

  createCoinStatusSection(target) {
    this.coinStatusSection = new Component({
      target: target,
      type: "section",
      id: `${COIN_ID}-section`,
    });
    this.createCoinStatusTitle(this.coinStatusSection.elem);
    this.createCoinStatusButton(this.coinStatusSection.elem);
    this.createCoinStatusTable(this.coinStatusSection.elem);
  }
  createCoinStatusTitle(target) {
    this.productStatusTitle = new Component({
      target: target,
      type: "div",
      id: `${COIN_ID}-title`,
      innerHtml: "잔돈",
    });
  }
  createCoinStatusButton(target) {
    this.coinStatusButton = new Component({
      target: target,
      type: "button",
      id: `${COIN_ID}-button`,
      innerHtml: "반환하기",
    });
    this.coinStatusButton.addEvent("click", () => this.returnCoin());
  }

  createCoinStatusTable(target) {
    this.coinStatusTable = new coinTable({
      target: target,
      type: "table",
      id: `${COIN_ID}`,
      tableHeader: {
        name: "동전",
        price: "개수",
      },
    });
    this.coinStatusTable.update(coinStore.getState());
  }
  insertCoin(inputCoin) {
    chargeStore.dispatch({
      type: ACTION.ADD,
      payload: inputCoin,
    });
  }
  returnCoin() {}
  subscribe() {
    chargeStore.subscribe(ACTION.ADD, () =>
      this.insertAmount.setText(chargeStore.getState())
    );
    productStore.subscribeAll([ACTION.UPDATE, ACTION.PURCHASE], () => {
      this.productStatusTable.update(productStore.getState(), true);
      this.insertAmount.setText(chargeStore.getState());
    });

    coinStore.subscribe(ACTION.UPDATE, () =>
      this.coinStatusTable.update(coinStore.getState())
    );
  }
}
