import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
   return (
      <nav> 
         <ul>
            <li>
               <NavLink exact to='/' >Homepage</NavLink>
            </li>
            <li>
               <NavLink exact to='/quiz' >Quiz</NavLink>
            </li>
            <li>
               <NavLink to='/result' >Result</NavLink>
            </li>
            <li>
               <NavLink to='/about' >About us</NavLink>
            </li>
         </ul>
      </nav>
      
   )
}

export default Navbar;