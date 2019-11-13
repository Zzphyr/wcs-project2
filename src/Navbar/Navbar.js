import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>{

   return (  
      <nav className="navbar navbar-expand-md navbar-dark fixed-top nav-adjust">
         <a href="./" className="navbar-text">(not)TrivialQuest</a>  
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <div className="navbar-nav">
               
                  <NavLink exact to='/' className="navbar-links nav-item" activeClassName='active'>Homepage</NavLink>
               
               
                  <NavLink to='/about' className="navbar-links nav-item" activeClassName='active'>About us</NavLink>
               
            </div>
         </div>
      </nav>
   )
}

export default Navbar;