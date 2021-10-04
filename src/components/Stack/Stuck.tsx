import React from 'react';
import stackData from './StackData'
import StuckCart from './StuckCart';
const Stuck = () => {
    return (
        <div className="grid grid-col-1 lg:grid-cols-2 gap-10 max-h-full justify-items-center">
          {
              stackData.map((sd)=> <StuckCart sd={sd} />)
          }
        </div>
    );
};

export default Stuck;