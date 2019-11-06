import React from 'react';
import Btn from '../Btn';
import ShowCorrectAnswers from './ShowCorrectAnwers';

const Result = ({ quizInfo }) =>{
   
   const getScore = () => {
      let score = 0;
      quizInfo.forEach((el) => {
         let correct = decodeURIComponent(el['correct_answer']);
         if (correct === el['user_answer']) {
            score +=1;
         }
      })
      return score;
   }

   // show a more personal message depending on user score
   const resultMessage = () => {
      let message = '';
      let relativeScore = getScore();
      if (relativeScore===10) {
         message = 'LEGEN (wait for it) DARY!!!';
      } else if (relativeScore>=8) {
         message = 'WOW... you are a genius!';
      } else if (relativeScore>=4) {
         message = 'Good job!';
      } else if (relativeScore>=2) {
         message = "Well, it wasn't thaaat bad...";
      } else {
         message = 'Oh dear! You might want to pick up a book or two.';
      }
      return message;
   }  

   return (
      <>
         <p>{resultMessage()}</p>
         <p>Your score: {getScore()} / 10 </p>
         <ShowCorrectAnswers quizInfo={quizInfo}/>
         <Btn 
            destination= {'./'}
            text = {`Play Again`} 
         /> 
      </>
   )
}


export default Result;