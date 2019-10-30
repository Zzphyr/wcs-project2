import React from 'react';
import Btn from '../Btn';
import Question from './Question';


const Quiz = ({ quizInfo }) =>{

   // turns the json object from props into an array so we can iterate over it
   let arr = [];
   Object.keys(quizInfo).forEach(function(key) {
      arr.push(quizInfo[key]);
    });

   // add "user_info" to quizInfo so we can save user answer
   const addNewStateEntry = () => {
      quizInfo.forEach((q)=>{
         q['user_answer'] = '';
      })
   }

   const updateUserAnswer = (numQ, value) => {
      quizInfo[numQ-1]['user_answer']=value
   }
   

   
   return (
      <>
      
         {addNewStateEntry()}
      {arr.map((q,i) => {
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
            </div>
         )
      })}

      <Btn 
         destination= {`./result`}
         text = {`Submit`} /> 
      </>
   )
}


export default Quiz;