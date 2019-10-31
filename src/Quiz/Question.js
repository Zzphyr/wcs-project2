import React from 'react';

const Question = ({ updateUserAnswer, numQ, question, correct, incorrect }) => {
   
   let answerList = [];
   answerList.push(...incorrect, correct);

   // ES6 Fisher–Yates shuffle algorithm:
   const shuffleAnswers = array => {
      for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
      }
   }
   
   const getUserAnswer = (numQ, ans) => {
      updateUserAnswer(numQ, ans)
   }
   
   return (
      <div>           
         <legend>{numQ} - {question}</legend>
         {shuffleAnswers(answerList)}
         {answerList.map((ans, i)=>{
            return (
               <div key={numQ*10+i} >
                  <input 
                     type="radio" 
                     name={numQ} 
                     value={ans} 
                     id={numQ*10+i}
                     onChange={() => getUserAnswer(numQ, ans)}
                  /> 
                  <label htmlFor={numQ*10+i}>{ans}</label>
                  <br/>
               </div>
            )
         })} 
      </div>
   )
}



export default Question;