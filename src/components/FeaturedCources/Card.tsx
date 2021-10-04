import React from 'react';
import Image from 'next/image'
const Card = ({cd}:any) => {
    const {picture, title} = cd;
    return (
        <div className=" p-5 m-5 rounded-lg  bg-white grid grid-col-1 lg:grid-cols-3 ">
            <div className="text-center">
            <Image height="100px" width="100px" src={picture} />
            </div>
            <div className="text-center ml-5 mt-1 mr-10">
            <h5 className="font-semibold text-gray-600">{title}</h5>
            </div>
            <div className="text-center ml-8 mt-10" >
                 <button className="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">View Courses</button>
             </div>
        </div>
    );
};

export default Card;