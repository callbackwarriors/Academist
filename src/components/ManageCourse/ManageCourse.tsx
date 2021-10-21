import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { ICourses } from 'type';

interface IProp {
  course: ICourses;
}

const ManageCourse = ({ course }: IProp) => {
  const { title, img, _id } = course;

  return (
    <div className="single__course">
      <div className="single__course__image">
        <Image height="80" width="80" src={img} />
        <h5 className="px-2 lg:px-4">{title}</h5>
      </div>
      <div className="flex-auto" >
        <button className="px-4 py-2 text-white bg-indigo-600 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800"><AiFillEye className="text-2xl" /></button>
        <Link href={`/admin/course/${_id}`}>
          <a>
            <button className="px-4 py-2 mx-4 text-white bg-indigo-600 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800">
              <FiEdit className="text-2xl" />
            </button>
          </a>
        </Link>
        <button className="px-4 py-2 text-white bg-indigo-600 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800"><RiDeleteBin7Line className="text-2xl" /></button>
      </div>
    </div>
  );
};

export default ManageCourse;