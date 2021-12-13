import component from "./component.js";

export default class coinTableRow extends component {
  constructor({ target, type, id, innerHtml = "", key }) {
    super({ target, type, id: `${id}-item-${key}`, innerHtml });
    this.id = id;
    this.key = key;
  }

  update(state) {
    if (this.priceTd) {
      this.priceTd.elem.innerText = state.quantity ? `${state.quantity}개` : "";
    } else {
      this.createNewRow();
    }
  }

  createNewRow() {
    new component({
      target: this.elem,
      type: "td",
      id: this.getMainId(),
      innerHtml: `${this.key}원`,
    });
    this.priceTd = new component({
      target: this.elem,
      type: "td",
      id: this.getMainId(),
    });
  }
  getMainId() {
    return `coin-${this.key}-quantity`;
  }
}
