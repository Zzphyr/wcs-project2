import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import Quiz from "./Quiz/Quiz";
import Result from "./Result/Result";
import Aboutpage from "./Aboutpage/Aboutpage";
import {VerticleButton as ScrollUpButton} from 'react-scroll-up-button';

import ErrorBoundary from './Errors/ErrorBoundary';
import NotFoundPage from './Errors/NotFoundPage';

import './App.css';
import { NONAME } from 'dns';


const difficulty = [
  {id: "", difficulty: "Any Difficulty"}, 
  {id: "easy", difficulty: "Easy"},
  {id: "medium", difficulty: "Medium"},
  {id: "hard", difficulty: "Hard"},
]



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizInfo: {},
      chosenCat: { id:0, name:"Any Category" },
      chosenDif: { id:0, difficulty: "Any Difficulty"},
      categories:[{ id:0, name:"Any Category" }],
      seconds: 0,
      isPlaying: true, 
    }
  }
   
  getQuiz = () => {
    const lessThan10Questions = [13, 25,26, 29, 30];
    let askedDif = this.state.chosenDif.id;
    if (lessThan10Questions.includes(this.state.chosenCat.id)){
      askedDif='';
    }
    fetch(`https://opentdb.com/api.php?amount=10&category=${this.state.chosenCat.id}&difficulty=${askedDif}&type=multiple&encode=url3986`)
      .then(response => response.json())
      .then(data => {
        this.setState(
            // push runs immediately without waiting for request
            // results in page change without receiving json
            // here, they are functions instead of objects
            // thus we get extra functionality including "waiting"
          (state) => ({
              ...state,
              quizInfo : data["results"],
              seconds : 0,
              isPlaying: true, 
            }), 
          () => this.props.history.push('/quiz')
        )
      })
  }

  componentDidMount() {
    this.getCategories();
    this.pauseTimer();
  }
  
  // Fetch category list from API (for the dropdown) 
  getCategories = () => {
    fetch('https://opentdb.com/api_category.php')
      .then (response => response.json())
      .then (results => {
        this.setState( (state) => ({ 
          ...state,
          categories: [
            { id:0, name:"Any Category" }, 
            ...results.trivia_categories
          ],
        }))
      })
  };

  handleCategory = (clickedCat) => {
    this.setState({
      chosenCat: clickedCat
    });
  }

  handleDifficulty = (clickedDif) => {
    this.setState({
      chosenDif: clickedDif
    });
  }

  updateUserAnswer = (numQ, ans) => {
    this.setState(
      (state) => {
        const updateAnswer = state.quizInfo.map((q,i) => {
          if(i===numQ-1) {
            q['user_answer']=ans;
          }
          return q;
        })
        return {
          ...state,
          quizInfo: updateAnswer,
        }
      }
    )
  }

  updateTimer = () => {
    this.myInterval = setInterval(() => {
      this.setState((state) => ({
        ...state,
        seconds: state.seconds +1,
      }),
      () => { 
        if (this.state.isPlaying === false ) {
          this.pauseTimer();
        }
      })
    }, 1000)
  }
  
  pauseTimer = () => {
    clearInterval(this.myInterval) 
    }


    handleStopPlaying = () => {
      this.setState({
        isPlaying: false, 
      });
    }




  render () {
    const { quizInfo, chosenCat, chosenDif, categories, seconds} = this.state;
    return (
      <>
      <Navbar />
        <Switch>
          <Route 
            exact path='/' 
            render={()=> (
              <Homepage 
              getQuiz={this.getQuiz}
              selectDif={this.handleDifficulty}
              chosenDif={chosenDif}
              difficulties={difficulty}
              chosenCat={chosenCat}
              selectCat={this.handleCategory}
              categories={categories}
              updatedTimer={this.updateTimer}
              />
            )} 
            />
          <Route 
            exact path='/quiz' 
            render = {() => (
              <Quiz
              quizInfo={quizInfo}
              chosenCat={chosenCat}
              chosenDif={chosenDif}
              updateUserAnswer={this.updateUserAnswer} 
              componentDidUpdate={this.componentDidUpdate}
              seconds={seconds}
              stopPlaying={this.handleStopPlaying}
              
              />
            )}
            />
              <Route exact path='/about' component={Aboutpage} />
            <Route 
              exact path='/result' 
              render = {() => (
                <ErrorBoundary>
                <Result 
                  quizInfo={quizInfo}
                  chosenCat={chosenCat}
                  chosenDif={chosenDif}
                  seconds={seconds}
                  />
                  </ErrorBoundary>      
              )}
            />  
              <Route path='*' component={NotFoundPage} />
        </Switch>
        <ScrollUpButton
          EasingType="easeInOutQuad"
          ShowAtPosition={380}
        />
      </>
    );
  }
  
}

export default withRouter(App);
