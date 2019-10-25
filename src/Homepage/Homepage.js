import React from 'react';
import Btn from '../Btn';
import Difficulty from './ChooseSettingsDropdown';

const Homepage = () =>{
   return ( 
      <>
         <p>This is HOME</p>
         <Difficulty />
         <Btn 
            destination= {`./quiz`}
            text = {`Start`} /> 
      </>
   )
}


export default Homepage;