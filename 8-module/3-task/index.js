export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    // ваш код
    let cartItem = {
      product: product,
      count: 0
    }
    console.log(product);
    cartItem.product = product;
    console.log(cartItem);
    console.log(this.cartItems);

    if(this.cartItems.indexOf(cartItem) == -1 ){
      console.log(this.cartItems.indexOf(cartItem));
      this.cartItems.push(cartItem);
      console.log(this.cartItems);
    }
    if(this.cartItems.indexOf(cartItem) > -1){
      console.log('hbhg')
      console.log(this.cartItems.indexOf(cartItem));
      cartItem.count += 1;
      console.log(cartItem.count);
      }

  }

  updateProductCount(productId, amount) {
    // ваш код
  }

  isEmpty() {
    // ваш код
  }

  getTotalCount() {
    // ваш код
  }

  getTotalPrice() {
    // ваш код
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

