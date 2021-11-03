import Link from 'next/link';
import Image from 'next/image'
import { FaBook, FaStar, FaUsers } from 'react-icons/fa'
import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const FeaturedInstructors = ({ instructor }) => {

    return (

        <div className="FeaturedTeacher__card">
            <div className="inline-flex inline-block p-2 align-middle bg-white rounded-full shadow">
                <Image width="150px" height="150px" src={instructor?.img} alt="Teacher" />
            </div>
            <h5>{instructor.name}</h5>
            <div className="flex justify-between mt-4 details">
                <div className="flex leftSide">
                    {instructor?.facebook && (
                        <Link href={instructor?.facebook} passHref>
                            <a target="_blank">
                                <h6>
                                    <FaFacebook />
                                </h6>
                            </a>
                        </Link>
                    )}
                    {instructor?.linkedIn && (
                        <Link href={instructor?.linkedIn} passHref>
                            <a target="_blank">
                                <h6>
                                    <FaLinkedin />
                                </h6>
                            </a>
                        </Link>
                    )}
                    {instructor?.twitter && (
                        <Link href={instructor?.twitter} passHref>
                            <a target="_blank">
                                <h6>
                                    <FaTwitterSquare />
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