import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import Quiz from "./Quiz/Quiz";
import Result from "./Result/Result";
import Aboutpage from "./Aboutpage/Aboutpage";

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizInfo: {},
    }

  }

    // TODO: catch errors
    getQuiz = () => {
      fetch('https://opentdb.com/api.php?amount=10&difficulty=medium')
        .then(response => response.json())
        .then(data => {
          this.setState(
            // push runs immediately without waiting for request
            // results in oage change without receiving json
            // here, they are functions instead of objects
            // thus we get extra functionality including "waiting"
            (state) => ({
              ...state,
              quizInfo : data["results"],
            }), 
            () => this.props.history.push('/quiz')
          )
        })
      }

  /* Weird setup for the dropdown from Home   
  handleSettings = (changeCategory, changeDifficulty) => {
    this.setState({ 
      category: changeCategory, 
      difficulty: changeDifficulty,
    })
  } */

  render () {
    
    return (
      <>
      <Navbar />
          <Switch>
            <Route 
              exact path='/' 
              render={()=> (
                <Homepage 
                  // do we even need quizInfo here? maybe for Quiz only?
                  quizInfo={this.state.quizInfo} 
                  getQuiz={this.getQuiz}
                />
              )} 
            />
            
            <Route 
              exact path='/quiz' 
              render = {() => (
                <Quiz
                  quizInfo={this.state.quizInfo}
                />
              )}
            />
            <Route path='/result' component={Result} />
            <Route path='/about' component={Aboutpage} />
          </Switch>      
      </>
    );
  }
}

export default withRouter(App);
