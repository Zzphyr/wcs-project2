import React from 'react';
import './ShowSettings.css'

const Timer = ({seconds}) => {
        return (
            <div>
                <p className= "setting-Timer"> Time: {seconds} </p>
            </div>
        )
    }
 

export default Timer;
