import React from 'react';
import '../spinner/spinner.scss';

const Spinner = () => {
  

   return (
      <div>
         <div className="spinner">
            simon
            <div className="spinner-sector spinner-sector-red"></div>
            <div className="spinner-sector spinner-sector-blue"></div>
            <div className="spinner-sector spinner-sector-green"></div>
            <div className="spinner-sector spinner-sector-yellow"></div>
         </div>
      </div>
   );
};

export default Spinner;
