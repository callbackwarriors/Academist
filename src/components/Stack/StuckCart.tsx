import React from 'react';
import Image from 'next/image'
const StuckCart = ({sd}:any) => {
    const { picture, count, title} = sd;
    return (
        <div className="box-content max-h-72  w-full mr-3 ml-3 p-4 border rounded bg-white">
            <div className="text-center">
            <Image height="75px" width="75px" src={picture} />
            </div>
            <h3 className="text-center">{count}</h3>
            <p className="text-center">{title}</p>
        </div>
    );
};

export default StuckCart;