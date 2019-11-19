import React from 'react';

const ShowTimer= ({seconds}) => {
   return (
        <p className="show-timer"> 
            Total time: {seconds} seconds
        </p>
   )};

export default ShowTimer;