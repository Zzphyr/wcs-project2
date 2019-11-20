import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.css';

class NotFoundPage extends React.Component{
   render(){
      return (
         <div className="div404">
            <h1>Ops! This is not the page you are looking for!</h1>
            <h3>Dog is sad it exist only in his imagination...</h3>
            <img src='https://i.imgur.com/ZSzQ3W4.png?1' alt='' />
            <p className="takemehome">
               <Link to="/">Click here to bring him Home </Link>
            </p>
         </div>
      ) 
   }
}
export default NotFoundPage;