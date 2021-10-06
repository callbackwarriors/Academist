import { AiFillEye, AiFillVideoCamera, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { ICourses } from 'type';
import Link from "next/link";

interface IProp {
    course: ICourses;
}

const LatestCourse = ({ course }: IProp) => {
    const { img, title, desc, _id } = course;
    // console.log('course', course);

    return (

        <div className="p-4 transition duration-100 ease-in-out transform xl:w-1/3 md:w-1/2 hover:scale-105">
            <Link href={`/courses/${_id}`}>
                <a>
                    <div className="p-6 bg-gray-100 rounded-lg">
                        <div className="relative">
                            <img className="object-cover object-center w-full h-40 mb-6 rounded" src={img} alt="" />
                            <AiOutlineHeart className="absolute text-2xl top-3 right-3" />
                        </div>
                        <div className="flex justify-between gap-3 pb-3 mb-3 border-b border-gray-300">
                            <div className="flex items-center justify-center gap-1">
                                <AiOutlineStar className="text-2xl text-yellow-400" /> 4.5
                            </div>
                            <div className="flex items-center justify-center gap-1">
                                <AiFillEye className="text-2xl text-red-400" /> 2300
                            </div>
                            <div className="flex items-center justify-center gap-1">
                                <AiFillVideoCamera className="text-2xl text-green-400" /> 15
                            </div>
                        </div>
                        <h4 className="mb-2 text-2xl">{title}</h4>
                        <p className="text-base leading-relaxed">{desc}</p>
                    </div>
                </a>
            </Link>
        </div>

    );
};

export default LatestCourse;
