import React from 'react';
import './Aboutpage.css'
const Person = ({name, photo, linkedin}) => {
   return ( <figure>
        <img className="stockPhotos" src={photo} alt={name} />
        <figcaption>
            <blockquote>{name}</blockquote>
            <span> Web-Development Student </span>
            <blockquote>{linkedin}</blockquote>
        </figcaption>
   </figure> )
};


export default Person;