import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>{
return (
   <nav className="navbar navbar-expand-sm nav-center">
          <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
            </button><span className="navbar-toggler-icon"></span>
      <div className="collapse navbar-collapse menu" id="main-navigation">
         <ul className="navbar-nav nav">
            <li className="nav-item" activeclassName='active'>
               <NavLink exact to='/' >Homepage</NavLink>
            </li>
            <li className="nav-item" activeclassName='active'>
               <NavLink to='/about' >About us</NavLink>
            </li>
         </ul>
      </div>
   </nav> 
   )
}

export default Navbar;