import React from 'react';
import './ChooseSettings.css';

  

const ChooseSettings = (props) =>  {
   const handleDiffSelect= (e) => props.selectDif (e.target.value);
   const handleCatSelect= (e) => props.selectCat (e.target.value);

    return ( 
        <div className="chooseSettingsWrap">
            <select  className="settingsOptionsDrop" value={props.chosenDif} onChange={handleDiffSelect}>
                {props.difficulties.map(diff => (
                     <option key={diff.difficulty} value={diff.difficulty}>{diff.difficulty === "" ? 'any difficulty' : diff.difficulty}</option>
                ))}

            </select>
            <select className="settingsOptionsDrop" value={props.chosenCat.name} onChange={handleCatSelect}>
                {props.chosenCat.map(cat => (
                    <option key={cat.id}>{cat.name}</option>
                ))} 
            </select>
        </div> 
    )}




export default ChooseSettings;

