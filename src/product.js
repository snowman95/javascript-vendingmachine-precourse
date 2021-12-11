export class product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  getInfoByArray() {
    return [this.name, this.price, this.quantity];
  }
}
