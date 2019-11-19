import React from 'react';
import './ShowSettings.css'

const Timer = ({seconds}) => {
        return (   
            <p className="setting-timer">Time: {seconds} s</p>  
        )
    }
 

export default Timer;
