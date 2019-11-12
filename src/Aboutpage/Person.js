import React from 'react';
import './Aboutpage.css'

const Person = ({ name, photo, linkedin, github }) => {
   return ( 
       <article className="person">
            <figure>
                <img src={photo} alt={name} className="photos-us" />
                <figcaption>
                    {name}
                    <p className="job-student">Web-Development Student</p>
                </figcaption>
            </figure>
            <div className="social-media">
                <a href={linkedin}> <img src="https://i.imgur.com/hzkKCzQ.png?1" alt={name} /> </a>
                <a href={github}> <img src="https://i.imgur.com/PYGpHt0.png?1" alt={name} /> </a>
            </div>
        </article>
    )
};


export default Person;