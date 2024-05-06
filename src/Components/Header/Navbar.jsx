// Importing necessary dependencies and styles
import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import './Navbar.scss'; 
import logo from "./img/logo.svg"
import Product from '../Products/Product';
import {NavLink } from 'react-router-dom';


const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (

    <>
      <header>
        <div className="Navbar Container">
          <div className="navlogo">
            <NavLink to={"/"}>
            <img src= {logo} alt="" />
            </NavLink>
          </div>

          <div className={`nav__items ${toggle ? 'show' : ''}`}>
            <NavLink to={"/"}>
            Home
            </NavLink>

            <NavLink to={"/admin"}> 
            Admin Create
            </NavLink>
            <NavLink to={"/manage"}> 
            Admin Manage
            </NavLink>
            <NavLink to={'/Product'}>
              Catalog
            </NavLink>
          
          </div>


          <div className="Nav__btns">
          <NavLink to={"/register"}>
            <button id="login">
              <BsFillPersonFill /> Login
            </button>
            </NavLink>

            <button className="menu" onClick={() => setToggle(!toggle)}>
              <BiMenuAltRight />
            </button>
          </div>
        </div>
      </header>

    {/* <Product/> */}
    </>
  );
}

export default Navbar;
