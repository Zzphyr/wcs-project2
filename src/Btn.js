import React from 'react';
import { Link } from 'react-router-dom'
import './Btn.css'

const Btn = ({ destination, text }) => {
  return (
    <div className ="BtnContainer"> 
      <Link to={`${destination}`}> 
        <button className="btn default">{text}</button> 
      </Link>
  </div>
    )
  };
 
 
export default Btn;