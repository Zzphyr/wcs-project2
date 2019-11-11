import React from "react";
import Person from './Person';

const authors = [
    {
    name:"Manuela Cardoso",
    photo:"https://i.imgur.com/sCzb5UP.png?1",
    linkedin:"https://www.linkedin.com/in/manuela-cardoso-94b6b829/",
    github: "https://github.com/Zzphyr"
},
{ 
    name:"Victoria Zimmermann",
    photo:"https://i.imgur.com/pm9oA7Z.png?1",
    linkedin:"https://www.linkedin.com/in/victoria-z-b6b57295/",
    github: "https://github.com/tzimms"
    }
];
 
const People = () => (
    <section className="people"> 
        {authors.map(person => (
            <Person key= {person.name} 
                name={person.name}
                photo={person.photo}
                linkedin={person.linkedin}
                github={person.github}
            />
        ))} 
    </section> 
);

export default People; 