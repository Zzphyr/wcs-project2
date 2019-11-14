import React from 'react';
import { Link } from 'react-router-dom';


class NotFoundPage extends React.Component{
   render(){
      return (
         <div style={{textAlign:"center", position:"relative", top:"20vh"}}>
            <h1>Ops! This is not the page you are looking for!</h1>
            <h3>Now dog is sad it only exists in his imagination...</h3>
            <img src='https://i.imgur.com/ZSzQ3W4.png?1' alt='' />
            <p>
               <Link to="/">Click here to bring him Home </Link>
            </p>
         </div>
      ) 
   }
}
export default NotFoundPage;