import React, {useContext} from "react";
import './Header.css'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../contexts/UserContexts";


const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  return (
    <nav className='header'>
      <img src={AirportShuttleIcon} alt=""/>
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/about">About</Link>
        {
          user?.uid ?
            <button className='btn-logout' onClick={logOut}>Log out</button>
            :
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign up</Link>
            </>
        }
      </div>
    </nav>
  );
};

export default Header;
