import React, { Component } from 'react';

import './Quiz.css';
import './Question.css'

class Question extends Component {
   constructor(props) {
      super(props);
      this.state = {
         answers: [],
      }
   }

   componentDidMount(){
      this.shuffleAnswers([...this.props.incorrect, this.props.correct]);
   }

   // ES6 Fisher–Yates shuffle algorithm
   shuffleAnswers = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
         decodeURIComponent(array[i])
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
      }  
      return this.setState({answers: array})
   }
   
   render() {
      // destructuring props
      const { updateUserAnswer, numQ, question, btnColor, userAnswer, clickedNext } = this.props;
      const { answers } = this.state;
      return (
         <div className="question-div text-center">           
            <legend>{numQ} - {decodeURIComponent(question)}</legend>
            <div>
            
            {answers.map((ans, i)=>{
               let answer = decodeURIComponent(ans);
               return (
                  <>
                     <input 
                        type="radio" 
                        name={numQ} 
                        value={answer} 
                        id={numQ*10+i}
                        onChange={() => updateUserAnswer(numQ, answer)}
                     />     
                     <label 
                        htmlFor={numQ*10+i} 
                        key={answer} 
                        className={(answer===userAnswer&&clickedNext) ? `answer-div ${btnColor} col-sm-5 col-md-4` : `answer-div answer-div-nonClickedNext col-sm-5 col-md-4`}
                     >
                        {answer}
                     </label>
                  </>
               )
            })} 
            </div>
             
         </div>
      )
   }
}



export default Question;