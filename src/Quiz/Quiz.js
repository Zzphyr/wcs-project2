import React, { useState } from 'react';
import Question from './Question';
import ShowSettings from './ShowSettings';
import { useHistory } from "react-router-dom";
import './Quiz.css';
import Timer from './Timer'



const Quiz = ({ quizInfo, chosenCat, chosenDif, updateUserAnswer }) =>{

   // to allow use of history.push
   let history = useHistory();

   // setup Hooks!
   const [step, setStep] = useState(0);
   let [btnColor] = useState("blue");

   
   // turns the json object from props into an array so we can iterate over it
   let arr = [];
   Object.keys(quizInfo).forEach(function(key) {
      arr.push(quizInfo[key]);
    });
   
   
   // using hooks
   const incrementStep = (e) => { 
      e.preventDefault();
      
      // REMEMBER to decodeURIComponent the correct answer
      let corrAns = decodeURIComponent(quizInfo[step].correct_answer);
      let userAns = quizInfo[step].user_answer;
      
      corrAns===userAns ? btnColor="correct" : btnColor="incorrect";
      console.log(btnColor);
      //go to next question after a delay, otherwise go to result page
      step<9 ? setTimeout(()=> setStep(step+1), 1000) : history.push("/result");
   }

   return (
      <>         
         <ShowSettings 
            chosenCat={chosenCat}
            chosenDif={chosenDif}
         />
         {console.log("xx",btnColor)}
         <Timer />

         {arr.map((q,i) => {
            if (step!==i) return null;
            return (
               <form onSubmit={incrementStep} key={decodeURIComponent(q.question)} >
                  <Question 
                     userAnswer={q.userAnswer}
                     updateUserAnswer={updateUserAnswer}
                     numQ={i+1} 
                     question={q.question} 
                     correct={q.correct_answer} 
                     incorrect={q.incorrect_answers} 
                     btnColor={btnColor}
                     />
                  {(step<9) && <input type="submit" value="Next" />}
                  {(step===9) && <input type="submit" value="See score!" />}     
               </form>
            )    
         })} 
      </> 
   )
}

export default Quiz;