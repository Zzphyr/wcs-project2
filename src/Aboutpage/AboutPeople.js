import React from "react";
import Person from './AboutPerson';

const people = [{
    name:"Manuela Cardoso",
    photo:"https://c8.alamy.com/comp/EAKDHA/portrait-of-a-little-girl-with-hat-posing-as-a-gangster-EAKDHA.jpg",
    linkedin:"Linked-M"
 },
 { 
    name:"Toria Zimmermann",
    photo:"https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg",
    linkedin:"Linked-T"
 }];
 
 
// const People = () => (
//     <div>
//         {people.map(person => (
//             <Person key={people.name} 
//             Person={person} />
//         ))}
//     </div>
// );

const People = () => (
    <div> 
        {people.map(person => (
            <Person key= {person.name} 
                name={person.name}
                photo={person.photo}
                linkedin={person.linkedin} 
            />
        ))} 
    </div> 
    );

export default People; 