import React, { Component } from 'react';

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
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
      }
      return this.setState({answers: array})
   }
   
   render() {
      // destructuring props
      const { updateUserAnswer, numQ, question} = this.props;
      return (
         <div>           
            <legend>{numQ} - {question}</legend>
            {this.state.answers.map((ans, i)=>{
               return (
                  <div key={ans} >
                     <input 
                        type="radio" 
                        name={numQ} 
                        value={ans} 
                        id={numQ*10+i}
                        onChange={() => updateUserAnswer(numQ, ans)}
                     /> 
                     <label htmlFor={numQ*10+i}>{ans}</label>
                     <br/>
                  </div>
               )
            })} 
         </div>
      )
   }
}



export default Question;