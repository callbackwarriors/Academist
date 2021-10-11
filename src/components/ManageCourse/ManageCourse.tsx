import React from 'react';
import Image from 'next/image'
import { ICourses } from 'type';

interface IProp {
  course: ICourses;
}

const ManageCourse = ({ course }: IProp) => {
  const { title, img } = course;

  return (
    <div className="grid p-5 m-5 bg-white rounded-lg grid-col-1 lg:grid-cols-3">
      <div className="text-center">
        <Image height="100px" width="100px" src={img} />
      </div>
      <div className="mt-1 ml-5 mr-10 text-center">
        <h5 className="font-semibold text-gray-600">{title}</h5>
      </div>
      <div className="mt-10 ml-8 text-center" >
        <button className="inline-block px-4 py-3 text-sm font-bold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">View Courses</button>
      </div>
    </div>
  );
};

export default ManageCourse;