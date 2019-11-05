import React from 'react';
import './ChooseSettings.css';
 
const ChooseSettings = (props) =>  {
   const handleDiffSelect= (e) => props.selectDif (props.difficulties.find(cat=> cat.difficulty === e.target.value));
   const handleCatSelect= (e) => props.selectCat (props.categories.find(cat=> cat.name === e.target.value));

   return ( 
        <div className="chooseSettingsWrap">
            <select  className="settingsOptionsDrop" value={props.chosenDif.difficulty} onChange={handleDiffSelect}>
                {props.difficulties.map(diff => (
                    <option 
                        key={diff.id}>{diff.difficulty}
                    </option>
                ))}
            </select>
            <select className="settingsOptionsDrop" value={props.chosenCat.name} onChange={handleCatSelect}>
                {props.categories.map(cat => (
                    <option 
                        key={cat.id}>{cat.name}
                    </option>
                ))} 
            </select>
        </div> 
    )
}


export default ChooseSettings;

