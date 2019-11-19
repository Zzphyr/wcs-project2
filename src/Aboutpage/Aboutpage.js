import React from 'react';
import People from './People';

import './Aboutpage.css';
import '../App.css';

const Aboutpage = () => {
   
   return (
      <main className="about-main">
         <h1 className="about-title">About us</h1>
         <People />
         <article className="project-description">
            <p>App developed for Wild Code School's second group project in React Web Dev course.</p>
            <p>Here we aimed to apply what we learned in one month. We wanted to train and practice with an ambicious project for newcomers, not just as a showcase of knowledge... and to provide an enjoyable experience to you, dear visitor!</p>  
         </article>
      </main>
   );
   
}

export default Aboutpage;