import React from 'react';
import db from 'utils/db';
import stackData from './StackData'
import StuckCart from './StuckCart';
import Orders from '../../models/Orders';



const Stuck = ({orderingData}: any ) => {

  console.log('this is stck page ',orderingData )
    return (
        <div className="grid gap-10 p-5 grid-col-1 lg:grid-cols-2 justify-items-center">

          <StuckCart orderingData={orderingData} />

          {/* {
              stackData.map((sd)=> <StuckCart sd={sd} />)
          } */}
        </div>
    );
};

export default Stuck;

