import React, {useContext} from "react";
import 'Header.css'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import {Link} from "@mui/icons-material";
import {AuthContext} from "../../contexts/UserContexts";


const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  return (
    <nav className='header'>
      <img src={AirportShuttleIcon} alt=""/>
      <div>
        <a href="/shop">Shop</a>
        <a href="/orders">Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/about">About</a>
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
