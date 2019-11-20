import React from 'react';
import { Link } from 'react-router-dom'
import ShowCorrectAnswers from './ShowCorrectAnwers';
import ShowSettings from '../Quiz/ShowSettings';
import ShowTimer from '../Quiz/ShowTimer';

import '../App.css';
import './Result.css';

const Result = ({ quizInfo, chosenCat, chosenDif, seconds,}) =>{
  
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
  
   const resultImage = () => {
      let imageUrl ='';
      let relativeScore = getScore();
      if (relativeScore===100) {
         imageUrl ="https://media.giphy.com/media/zUwHGTclRb7W/giphy.gif";
      } else if (relativeScore>=80) {
         imageUrl = "https://media.giphy.com/media/3ohs88j0jPszpGCbYY/giphy.gif";
      } else if (relativeScore>=60) {
         imageUrl ="https://media.giphy.com/media/fGImYPTHJ3EXHbmR2W/giphy.gif";
      } else if (relativeScore>=40) {
         imageUrl ="https://media.giphy.com/media/l3q2umc327t2nzSOQ/giphy.gif";
      } else if (relativeScore>=20) {
         imageUrl ="https://media.giphy.com/media/1URYTNvDM2LJoMIdxE/giphy.gif";
      } else {
         imageUrl ="https://media.giphy.com/media/3ogsjHPK2mjgUUmdag/giphy.gif";
      }
      return imageUrl;
   }

   return (
      <main className="result-main">
         <section className="result-showsettings" >
            <ShowSettings chosenDif={chosenDif} chosenCat={chosenCat} />
         </section>
            <p className="result-message">{resultMessage()}</p>
            <div>
               <img className="result-image" src={resultImage()} alt='resultGifs'/> 
            </div>
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