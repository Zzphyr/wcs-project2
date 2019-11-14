import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';


// <BrowserRouter basename={process.env.REPO_NAME}> 

ReactDOM.render(
   <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
   </BrowserRouter>, 
   document.getElementById('root')
);

serviceWorker.unregister();
