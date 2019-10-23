import React from 'react';
import Btn from '../Btn';


const Quiz = () =>{
   return (
      <>
      <p>This is the Quizpage </p>
      <Btn 
         destination= {`./result`}
         text = {`Submit`} /> 
      </>
   )
}


export default Quiz;