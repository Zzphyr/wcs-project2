import React from 'react';
import Btn from '../Btn';

const Homepage = () =>{
   return ( 
      <>
         <p>This is HOME</p>
         <Btn 
            destination= {`./quiz`}
            text = {`Start`} /> 
      </>
   )
}


export default Homepage;