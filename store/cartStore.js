import { decorate, observable } from "mobx";

class CartStore {
  items = [];
  addItemToCart = item => {
    this.items.push(item);
  };

  removeItemFromCart = item1 => {
    this.items = this.items.filter(item => item1 !== item);
  };

  checkoutCart = () => {
    this.items = [];
  };
}

decorate(CartStore, {
  items: observable
});

export default new CartStore();
