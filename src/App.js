import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import Quiz from "./Quiz/Quiz";
import Result from "./Result/Result";
import Aboutpage from "./Aboutpage/Aboutpage";

import './App.css';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/quiz' component={Quiz} />
          <Route path='/result' component={Result} />
          <Route path='/about' component={Aboutpage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
