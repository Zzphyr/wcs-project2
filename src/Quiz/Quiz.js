import React from 'react';
import Btn from '../Btn';
import Question from './Question';


const Quiz = ({ quizInfo }) =>{

   // turns the json object from props into an array so we can iterate over it
   let arr = [];
   Object.keys(quizInfo).forEach(function(key) {
      arr.push(quizInfo[key]);
    });

   return (
      <>
      <p>This is the Quizpage </p>
      {arr.map((q,i)=> {
        return <Question numQ={i+1} question={q.question} correct={q.correct_answer} incorrect={q.incorrect_answers} />;
    }
    )}
      <Btn 
         destination= {`./result`}
         text = {`Submit`} /> 
      </>
   )
}


export default Quiz;