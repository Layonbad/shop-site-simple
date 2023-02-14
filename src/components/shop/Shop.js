import React, {useEffect, useState} from "react";
import './Shop.css'
import Product from "../product/Product";
import {Link} from 'react-router-dom';
import {addToDb, getStoredCart} from "../../utilities/fakeDb";
import Cart from "../cart/Cart";


const Shop = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    const url = `http://localhost:3000/products?page=${page}&size=${size}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCount(data.count);
        setProducts(data.products);
      })
  }, [page, size])

  const pages = Math.ceil(count / size);
  const clearCart = () => {
    setCart([]);
  }

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    const ids = Object.keys(storedCart);
    fetch(`http://localhost:3000/productsByIds`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(ids)
    })
      .then(res => res.json())
      .then(() => {
        for (const id in storedCart) {
          const addedProduct = products.find(product => product.id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      })
  }, [products])

  const handleAddToCart = (selectedProduct) => {
    let newCart;
    const exists = cart.find(product => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(product => product.id === selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct._id)
  }

  return (
    <div className='shop-container'>
      <div className='products-container'>
        {
          products.map(product => <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>)
        }
      </div>
      <div className='card-container'>
        <Cart clearCart={clearCart} cart={cart}>
          <Link to="/orders">
            <button>Review Orders</button>
          </Link>
        </Cart>
      </div>
      <div className="pagination">
        <p>Currently selected page: {page} and size: {size}</p>
        {
          [...Array(pages).keys()].map(number => <button
            key={number}
            className={page === number ? 'selected' : ''}
            onClick={() => setPage(number)}>
            {number + 1}
          </button>)
        }
        <select onChange={event => setSize(event.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  )
}

export default Shop;
