import React, { useState } from 'react';
import Btn from '../Btn';
import Question from './Question';
import ShowSettings from './ShowSettings';

const Quiz = ({ quizInfo, chosenCat, chosenDif, updateUserAnswer }) =>{

   // setup Hooks!
   const [step, setStep] = useState(0);
   
   // turns the json object from props into an array so we can iterate over it
   let arr = [];
   Object.keys(quizInfo).forEach(function(key) {
      arr.push(quizInfo[key]);
    });
   
   // hooks
   const incrementStep = (e) => { 
      e.preventDefault();
      setStep(step+1);
   }

   return (
      <>         
         <ShowSettings 
            chosenCat={chosenCat}
            chosenDif={chosenDif}
         />
         {arr.map((q,i) => {
            if (step!==i) return null;
            return (
               <form onSubmit={incrementStep} key={q.question} >
                  <Question 
                     userAnswer={q.userAnswer}
                     updateUserAnswer={updateUserAnswer}
                     numQ={i+1} 
                     question={q.question} 
                     correct={q.correct_answer} 
                     incorrect={q.incorrect_answers} 
                  />
               { 
               (step<9) && <input type="submit" value="Next" /> 
               }
               {
               (step===9) && <Btn destination= {`./result`} text = {`Submit`} /> 
               }
               </form>
            )    
         })} 
      </> 
   )
}


export default Quiz;