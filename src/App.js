import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import Quiz from "./Quiz/Quiz";
import Result from "./Result/Result";
import Aboutpage from "./Aboutpage/Aboutpage";

import ErrorBoundary from './ErrorBoundary';
import NotFoundPage from './NotFoundPage';

import './App.css';


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
            }), 
          () => this.props.history.push('/quiz')
        )
      })
  }

  componentDidMount() {
    this.getCategories();
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
  
  render () {
    const { quizInfo, chosenCat, chosenDif, categories} = this.state;
    return (
      <>
      <ErrorBoundary>
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
                />
              )}
            />
            <Route 
              path='/result' 
              render = {() => (
                <Result 
                  quizInfo={quizInfo}
                  chosenCat={chosenCat}
                  chosenDif={chosenDif}
                />
              )}
            />  
            <Route path='/about' component={Aboutpage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </ErrorBoundary>      
      </>
    );
  }
}

export default withRouter(App);
