import React from 'react';
import {Link} from 'react-router-dom'
import './Btn.css'


const Btn = ({destination, text}) =>{
 console.log(destination);
  return (
      <Link to={`${destination}`}> <button className="btn default">{text}</button> 
  </Link>
    )
  };
 
 
 export default Btn;