import React from 'react';

const ShowTimer= ({seconds}) => {
   return (
        <p className="show-Timer"> 
            Total time: {seconds} seconds
        </p>
   )};

export default ShowTimer;