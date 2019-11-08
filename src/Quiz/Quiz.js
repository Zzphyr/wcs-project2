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
   const [btnColor, setBtnColor] = useState('');
   const [clickedNext, setClickedNext] = useState(false);
  
   // turns the json object from props into an array so we can iterate over it
   let arr = [];
   Object.keys(quizInfo).forEach(function(key) {
      arr.push(quizInfo[key]);
    });
   
   // using hooks
   const incrementStep = (e) => { 
      e.preventDefault();
      let corrAns = decodeURIComponent(quizInfo[step].correct_answer);
      let userAns = quizInfo[step].user_answer;
      corrAns===userAns ? setBtnColor("correct") : setBtnColor("incorrect");
      setClickedNext(true);
      //go to next question after a delay, otherwise go to result page
      if (step<9) { 
         setTimeout(()=> {
            setStep(step+1);
            setClickedNext(false);
            setBtnColor('');
         },1000); 
      } else {
         setTimeout(()=> {
            history.push("/result")
         },1000);
      } 
   }

   return (
      <>         
         <ShowSettings 
            chosenCat={chosenCat}
            chosenDif={chosenDif}
         />
         <Timer />
         {arr.map((q,i) => {
            if (step!==i) return null;
            return (
               <form onSubmit={incrementStep} key={decodeURIComponent(q.question)} className="container" >
                  <Question 
                     userAnswer={quizInfo[i].user_answer}
                     updateUserAnswer={updateUserAnswer}
                     numQ={i+1} 
                     question={q.question} 
                     correct={q.correct_answer} 
                     incorrect={q.incorrect_answers} 
                     btnColor={btnColor}
                     clickedNext={clickedNext}
                     />
                  {(step<9) && <input className="next-btn" type="submit" value="Next" />}
                  {(step===9) && <input className="submit-btn" type="submit" value="See score!" />}    
               </form>
            )    
         })} 
      </> 
   )
}

export default Quiz;