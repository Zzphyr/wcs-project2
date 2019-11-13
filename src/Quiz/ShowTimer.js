import React from 'react';

const ShowTimer= ({seconds}) => {
   return (
       <div className="show-Timer"> 
       Total time taken: {seconds};
       </div>
   )};

export default ShowTimer;