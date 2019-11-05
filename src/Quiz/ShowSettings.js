import React from 'react';

const ShowSettings = ({ chosenCat, chosenDif }) => {
   return (
      <div className="show-settings">
         <p>Difficulty: {chosenDif}</p>
         <p>Category: {chosenCat.name}</p>
      </div>
   )
}

export default ShowSettings;