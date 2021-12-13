export class coin {
  constructor(price, quantity) {
    this.id = price;
    this.price = price;
    this.quantity = quantity;
  }
  purchase() {
    if (Number(this.quantity) === 0) {
      return false;
    }
    this.quantity = `${Number(this.quantity) - 1}`;
    return true;
  }
  getStateList() {
    return [this.price, this.quantity];
  }
  getId() {
    return this.id;
  }
}
