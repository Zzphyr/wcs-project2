import React from 'react';
import {Link} from 'react-router-dom'


const Btn = ({destination, text}) =>{
 console.log(destination);
  return (
      <Link to={`${destination}`}> <button>{text}</button> 
  </Link>

    )
  };
 
 
 export default Btn;