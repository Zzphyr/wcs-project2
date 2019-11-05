import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import Quiz from "./Quiz/Quiz";
import Result from "./Result/Result";
import Aboutpage from "./Aboutpage/Aboutpage";


import './App.css';


const difficulty = [
  {difficulty: "" }, 
  {difficulty: "easy"},
  {difficulty: "medium"},
  {difficulty: "hard"},
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizInfo: {},
      chosenCat: { id:0, name:"Any Category" },
      chosenDif: difficulty[0].difficulty,
      categories:[],
    }
  }
   
  getQuiz = () => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${this.state.chosenCat.id}&difficulty=${this.state.chosenDif}&type=multiple`)
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

      // Trial for fetching dropdowns 
  getCategories = () => {
    fetch('https://opentdb.com/api_category.php')
      .then (response => response.json())
      .then (results => {
        this.setState( (state) => ({ 
          ...state,
          categories: [{ id:0, name:"Any Category" }, ...results.trivia_categories],
         })
        )})
  }
  handleCategory = (clickedCat) => {
    console.log('clicked', clickedCat)
      this.setState({
        chosenCat: clickedCat
        });
  }

  handleDifficulty = (clickedDif) => {
      this.setState({
        chosenDif: clickedDif
        });
  }

  
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
                  selectDif={this.handleDifficulty}
                  chosenDif={this.state.chosenDif}
                  difficulties={difficulty}
                  chosenCat={this.state.chosenCat}
                  selectCat={this.handleCategory}
                  categories={this.state.categories}
                />
              )} 
            />
            
            <Route 
              exact path='/quiz' 
              render = {() => (
                <Quiz
                  quizInfo={this.state.quizInfo}
                  chosenCat={this.state.chosenCat}
                  chosenDif={this.state.chosenDif}
                />
              )}
            />
            <Route 
              path='/result' 
              render = {() => (
                <Result 
                  quizInfo={this.state.quizInfo}
/*                   chosenCat={this.chosenCat}
                  chosenDif={this.chosenDif} */
                />
              )}
            />  
            <Route path='/about' component={Aboutpage} />
          </Switch>      
      </>
    );
  }
}

export default withRouter(App);
