import {getStoredCart} from "../utilities/fakeDb";

export const productsAndCartLoader = async () => {
  //get products
  const productsData = await fetch('http://localhost:3000/products');
  const products = await productsData.json();

  //get cart
  const savedCart = getStoredCart();
  const initialCart = [];

  for (const id in savedCart) {
    const addedProduct = products.find(product => product.id);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }
  return {products, initialCart};
}
