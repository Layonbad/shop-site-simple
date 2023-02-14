import React from "react";
import 'Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {
  return (
    <nav className='header'>
      <img src={ShoppingCartIcon} alt=""/>
      <div>
        <a href="/shop">Shop</a>
        <a href="/orders">Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Header;
