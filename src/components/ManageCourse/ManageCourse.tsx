import React from 'react';
import Image from 'next/image'
import { ICourses } from 'type';
import Link from 'next/link'

interface IProp {
  course: ICourses;
}

const ManageCourse = ({ course }: IProp) => {
  const { title, img } = course;

  return (
    <div className="p-4 transition duration-100 ease-in-out transform xl:w-1/3 md:w-1/2 hover:scale-105">
      <Link href="#">
        <a>
          <div className="p-6 bg-gray-100 rounded-lg">
            <div className="relative">
              <Image
                width="500"
                height="300"
                className="object-cover mb-6 rounded"
                src={img}
                alt={title}
              />
            </div>
            <h4 className="mb-2 text-base">{title}</h4>
            <div className="">
              <button className="block w-full py-2 mb-2 text-sm text-center text-white bg-indigo-600 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800">View Courses</button>
              <button className="block w-full py-2 mb-2 text-sm text-center text-white bg-indigo-600 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800">Edit Courses</button>
              <button className="block w-full py-2 mb-2 text-sm text-center text-white bg-indigo-600 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800">Delete Courses</button>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ManageCourse;