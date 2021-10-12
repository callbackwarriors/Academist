import React from 'react';
import stackData from './StackData'
import StuckCart from './StuckCart';
const Stuck = () => {
    return (
        <div className="grid gap-10 p-5 grid-col-1 lg:grid-cols-2 justify-items-center">
          {
              stackData.map((sd)=> <StuckCart sd={sd} />)
          }
        </div>
    );
};

export default Stuck;