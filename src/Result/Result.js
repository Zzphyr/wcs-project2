import React from 'react';
import Btn from '../Btn';

const Result = ({ quizInfo }) =>{
   const getScore = () => {
      let score = 0;
      quizInfo.forEach((el) => {
         if (el['correct_answer'] === el['user_answer']) {
            score +=1;
         }
      })
      return score;
   }
   
   
   
   return (
      <>
         <p>This is Result</p>
         <p>Your score: {getScore()} / 10 </p>
         <Btn 
            destination= {'./'}
            text = {`Play Again`} /> 
      </>
   )
}


export default Result;