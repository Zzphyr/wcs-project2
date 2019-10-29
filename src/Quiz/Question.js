import React from 'react';

const Question = ({numQ, question, correct, incorrect}) => {
   
   let answerList = [];
   answerList.push(...incorrect, correct);
   console.log("answerList", answerList)

   // ES6 Fisher–Yates shuffle algorithm:
   const shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
      }
   }
   shuffleArray(answerList);
   //console.log("answerList Sorted", answerList)

      return (
         <div>           
               <legend>{numQ} - {question}</legend>
               {answerList.map((ans, i)=>{
                  return (
                     <div>
                        <input type="radio" name={numQ} value={ans} id={numQ*10+i} /> 
                        <label for={numQ*10+i}>{ans}</label>
                        <br/>
                     </div>
                  )
               })} 
            
            
         </div>
      )

   }



export default Question;