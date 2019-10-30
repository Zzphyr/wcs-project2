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

   // to show a more personal message depending on user score
   const resultMessage = () => {
      let message = '';
      let relativeScore = getScore();
      if (relativeScore===10) {
         message = 'You are (wait for it) a total genius!';
      } else if (relativeScore>=8) {
         message = 'Wow... Fantastic!';
      } else if (relativeScore>=6) {
         message = 'Yay, you did it!';
      } else if (relativeScore>=4) {
         message = "It wasn't that bad...?";
      } else {
         message = 'Might want to pick up a book or two';
      }
      return message;
   }  

   return (
      <>
         <p>This is Result</p>
         <p>{resultMessage()}</p>
         <p>Your score: {getScore()} / 10 </p>
         <Btn 
            destination= {'./'}
            text = {`Play Again`} 
         /> 
      </>
   )
}


export default Result;