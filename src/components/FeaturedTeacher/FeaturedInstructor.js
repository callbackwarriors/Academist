import Link from 'next/link';
import Image from 'next/image'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillEye, AiFillVideoCamera, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';

const FeaturedInstructors = ({ instructor }) => {

    return (

        <div className="relative FeaturedTeacher__card">
            <div className="inline-flex p-2 align-middle bg-white rounded-full shadow ">
                <Image width="150px" className="rounded-full" height="150px" src={instructor?.img} alt={instructor.name} />
                <AiOutlineHeart className="absolute text-2xl top-3 right-3" />
            </div>
            <div className="flex justify-between gap-3 py-3 border-b border-gray-300">
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
            <h5>{instructor.name}</h5>
            <div className="inline-flex mt-2 text-center align-middle">
                <div className="flex">
                    {instructor?.facebook && (
                        <Link href={instructor?.facebook} passHref>
                            <a target="_blank">
                                <h6 className="instructorIcons" >
                                    <FaFacebookF />
                                </h6>
                            </a>
                        </Link>
                    )}
                    {instructor?.linkedIn && (
                        <Link href={instructor?.linkedIn} passHref>
                            <a target="_blank">
                                <h6 className="instructorIcons" >
                                    <FaLinkedinIn />
                                </h6>
                            </a>
                        </Link>
                    )}
                    {instructor?.twitter && (
                        <Link href={instructor?.twitter} passHref>
                            <a target="_blank">
                                <h6 className="instructorIcons" >
                                    <FaTwitter />
                                </h6>
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </div>


    );
};

export default FeaturedInstructors;