import React, { Component } from 'react';

import './Quiz.css';

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
      const { updateUserAnswer, numQ, question } = this.props;
      console.log("pp", this.props.btnColor)
      return (
         <div>           
            <legend>{numQ} - {decodeURIComponent(question)}</legend>
            {this.state.answers.map((ans, i)=>{
               return (
                  <div key={decodeURIComponent(ans)} >
                     <input 
                        type="radio" 
                        name={numQ} 
                        value={decodeURIComponent(ans)} 
                        id={numQ*10+i}
                        onChange={() => updateUserAnswer(numQ, decodeURIComponent(ans))}
                        /> 
                        
                     <label className={this.props.btnColor} htmlFor={numQ*10+i}>{decodeURIComponent(ans)}</label>
                     <br/>
                  </div>
               )
            })} 
         </div>
      )
   }
}



export default Question;