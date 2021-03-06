import React from 'react';
import Image from 'next/image'
const StuckCart = ({sd}:any) => {
    const { picture, count, title} = sd;
    return (
        <div className="box-content w-full p-4 ml-3 mr-3 bg-white border rounded max-h-72">
            <div className="text-center">
            <Image height="75px" width="75px" src={picture} />
            </div>
            <h3 className="text-center">{count}</h3>
            <p className="text-center">{title}</p>
        </div>
    );
};

export default StuckCart;