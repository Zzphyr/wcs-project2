import React, { useState } from 'react';
import Btn from '../Btn';
import Question from './Question';


const Quiz = ({ quizInfo }) =>{

   // setup Hooks!
   const [step, setStep] = useState(0);
   
   // turns the json object from props into an array so we can iterate over it
   let arr = [];
   Object.keys(quizInfo).forEach(function(key) {
      arr.push(quizInfo[key]);
    });

   // weird way to both update user choice and to add a new entry to quizInfo   
   // likely need to redo this... with setState in app.js
   const updateUserAnswer = (numQ, value) => {
      quizInfo[numQ-1]['user_answer']=value;
   }
   
   // hooks
   const incrementStep = () => { 
      setStep(step+1);
   }

   return (
      <>         
         {arr.map((q,i) => {
            if (step!==i) return null;
            if (step<9) {
               return (
                  <div key={i+1} >
                     <Question 
                        userAnswer={q.userAnswer}
                        updateUserAnswer={updateUserAnswer}
                        numQ={i+1} 
                        question={q.question} 
                        correct={q.correct_answer} 
                        incorrect={q.incorrect_answers} 
                     />
                     <button onClick={incrementStep}>Next</button>    
                  </div>
               )
            }
            return (
               <div key={i+1} >
                  <Question 
                     userAnswer={q.userAnswer}
                     updateUserAnswer={updateUserAnswer}
                     numQ={i+1} 
                     question={q.question} 
                     correct={q.correct_answer} 
                     incorrect={q.incorrect_answers} 
                  />   
                  <Btn 
                     destination= {`./result`}
                     text = {`Submit`} 
                  /> 
               </div>
            )    
         })} 
      </> 
   )
}


export default Quiz;