import React from 'react';
import './ShowSettings.css'

const ShowSettings = ({ chosenCat, chosenDif }) => {
   return (
      <div className="show-settings">
         <p>Category: {chosenCat.name === "Any Category" ? "Any" : chosenCat.name}</p>
         <p>Difficulty: {chosenDif.difficulty === "Any Difficulty" ? "Any" : chosenDif.difficulty}</p>
      </div>
   )
}

export default ShowSettings;