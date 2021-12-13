export class product {
  constructor(name, price, quantity) {
    this.id = name;
    this.name = name;
    this.price = Number(price);
    this.quantity = Number(quantity);
  }
  purchase() {
    if (this.quantity === 0) {
      return false;
    }
    this.quantity = this.quantity - 1;
    return true;
  }
  getStateList() {
    return [this.name, this.price, this.quantity];
  }
  getId() {
    return this.id;
  }
}
