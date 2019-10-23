import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Quiz from "./Quiz";
import Result from "./Result";
import Aboutpage from "./Aboutpage";

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
