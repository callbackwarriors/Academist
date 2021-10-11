import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {
    AiFillEye,
    AiFillVideoCamera,
    AiOutlineHeart,
    AiOutlineStar,
} from "react-icons/ai";
import { ICourses } from 'type';

interface IProp {
    course: ICourses;
}

const AllCourses = ({ course }: IProp) => {
    const { title, img, slug } = course;

    return (
        <div className="p-4 transition duration-100 ease-in-out transform xl:w-1/3 md:w-1/2 hover:scale-105">
            <Link href={`/courses/${slug}`}>
                <a>
                    <div className="p-6 bg-gray-100 rounded-lg">
                        <div className="relative">
                            {/* <img
                        className="object-cover object-center w-full h-40 mb-6 rounded"
                        src="https://i.ibb.co/9V1Xq8s/crd-img.webp"
                        alt=""
                    /> */}
                            <Image
                                width="500"
                                height="300"
                                className="object-cover mb-6 rounded"
                                src={img}
                                alt={title}
                            />
                            <AiOutlineHeart className="absolute text-2xl top-3 right-3" />
                        </div>

                        <div className="flex justify-between gap-3 pb-3 mb-3 border-b border-gray-300">
                            <div className="flex items-center justify-center gap-1">
                                <AiOutlineStar className="text-2xl text-yellow-400" />
                                4.5
                            </div>

                            <div className="flex items-center justify-center gap-1">
                                <AiFillEye className="text-2xl text-red-400" /> 2300
                            </div>

                            <div className="flex items-center justify-center gap-1">
                                <AiFillVideoCamera className="text-2xl text-green-400" />
                                15
                            </div>
                        </div>
                        <h4 className="mb-2 text-base">{title}</h4>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default AllCourses;