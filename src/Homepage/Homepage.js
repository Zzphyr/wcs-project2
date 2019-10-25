import React, { Component } from 'react';


class Homepage extends Component {
   constructor(props) {
      super(props);
      
      this.state = {

      }
      }
   
handleChoices() {
      // let cat = this.dropdownCat.value;
      // let dif = this.dropdownDif.value;
      this.props.getQuiz(); 
      // later use cat and dif arguments
   };

   render() {

      return ( 
         <>
         <p>This is HOME</p>
         <button onClick={() => this.handleChoices()}>Start Quiz </button>
         <button onClick={() => this.props.history.push('/quiz')}>Hi there</button>

      </>
   )
}
}


export default Homepage;

