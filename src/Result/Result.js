import React from 'react';

import ShowCorrectAnswers from './ShowCorrectAnwers';
import ShowSettings from '../Quiz/ShowSettings';
import ShowTimer from '../Quiz/ShowTimer';
import { Link } from 'react-router-dom'

import '../App.css';
import './Result.css';

const Result = ({ quizInfo, chosenCat, chosenDif, seconds, resetTimer}) =>{
  
   const getScore = () => {
      let score = 0;
      quizInfo.forEach((el) => {
         let correct = decodeURIComponent(el['correct_answer']);
         if (correct === el['user_answer']) {
            score +=10;
         }
      })
      return score;
   }

   // show a more personal message depending on user score
   const resultMessage = () => {
      let message = '';
      let relativeScore = getScore();
      if (relativeScore===100) {
         message = "LEGEN (wait for it) DARY!!!";
      } else if (relativeScore>=80) {
         message = "WOW... you are a genius!";
      } else if (relativeScore>=60) {
         message = "You are amazing!";
      } else if (relativeScore>=40) {
         message = "Good job!";
      } else if (relativeScore>=20) {
         message = "Well, it wasn't thaaat bad...";
      } else {
         message = "Oh dear! You might want to pick up a book or two.";
      }
      return message;
   }  
  
   return (
      <main className="result-main">
         <section className="result-showsettings">
            <ShowSettings chosenDif={chosenDif} chosenCat={chosenCat} />
         </section>
            <p>{resultMessage()}</p>
         <div className="result-info">
            <p>Your score: {getScore()} / 100 </p>
            <ShowTimer seconds={seconds} /> 
         </div>
         <ShowCorrectAnswers quizInfo={quizInfo}/>
         <Link to='/'> 
            <button className="playAgain-btn">Play again!</button> 
         </Link>    
      </main>
   )
}


export default Result;