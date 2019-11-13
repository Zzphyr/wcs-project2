import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>{
return (


   <nav className="navbar navbar-expand-md navbar-dark fixed-top nav-adjust">

<span className="navbar-text">
   Trivia Game
  </span>
   
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
   <span className="navbar-toggler-icon"></span>
   </button>

   
   <div className="collapse navbar-collapse" id="collapsibleNavbar">
   <ul className="navbar-nav">
      <li className="nav-item">
      <NavLink exact to='/' className="navbar-links" activeClassName='active'>Homepage</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to='/about' className="navbar-links" activeClassName='active'>About us</NavLink>
      </li>
   </ul>
   </div>
   </nav>

   )

   


}

export default Navbar;