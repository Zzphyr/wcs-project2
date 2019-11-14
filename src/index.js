import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
   <BrowserRouter basename={process.env.REPO_NAME}>
      <App />
   </BrowserRouter>, 
   document.getElementById('root')
);

serviceWorker.unregister();
