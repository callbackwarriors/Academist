import Image from 'next/image';
import React from 'react';
const Card = ({cd}:any) => {
    const {picture, title} = cd;
    return (
        <div className="px-3 w-full lg:w-1/3 mb-6 xl:w-1/3 overflow-hidden    ">
            <div className="border p-3 rounded">
            <div className="text-center ">
            <Image height="100px" width="100px" src={picture} />
            </div>
            <div className="mt-1 ml-5 mr-10 text-center">
            <h5 className="font-semibold text-gray-600">{title}</h5>
            </div>
            <div className="text-center" >
                 <button className="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">View Courses</button>
             </div>
             </div>
        </div>
    );
};

export default Card;