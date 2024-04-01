import React from 'react'
import "./Header.css";
import logo from "./logo.jpeg";
import {Link} from "react-router-dom";


const Header=()=>{
  return (
    
  







    <div className='navbar'>
      <img src={logo} alt="tripti" className='logo' />


      <div className='search-box'>
        <input type='text' placeholder='search gold jewellery' />



      </div>

      <ul className='header-menu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link>Features</Link></li>
        <li><Link>About</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>




    </div>
  );
}

export default Header;






