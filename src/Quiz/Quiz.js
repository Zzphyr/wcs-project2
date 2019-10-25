import React from 'react';
import Btn from '../Btn';


const Quiz = ({ quizInfo }) =>{

   

   return (
      <>
      <p>This is the Quizpage </p>
      <Btn 
         destination= {`./result`}
         text = {`Submit`} /> 
      
      <p>Q: {quizInfo[0]["question"]}</p>
      </>
   )
}


export default Quiz;