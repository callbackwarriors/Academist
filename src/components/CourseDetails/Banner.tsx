import React from 'react';
import { FaBookOpen, FaPlay, FaRegStar, FaStar, FaUser } from 'react-icons/fa';
import { ICourses } from 'type';
interface IProps {
    course: ICourses
}

const Banner = ({course}:IProps) => {

    const { name, image, description, slug } = course;

    return (
        <div className="container">
            <h3>{name}</h3>
            <div className="flex bannerDiv">
                <div className="flex box ">
                    <h6 className="px-2"> <FaBookOpen /></h6>
                    <p className="px-2">10 - 20 weeks</p>
                </div>

                <div className="flex box ">
                    <h6 className="px-2"> <FaPlay /></h6>
                    <p className="px-2">102 Lectures</p>
                </div>

                <div className="flex box ">
                    <h6 className="px-2"> <FaUser /></h6>
                    <p className="px-2">502 Student Enrolled</p>
                </div>
            </div>

            <p className="pText">{course.description}</p>

            <div className="flex box2 ">
                <h6 className="px-2"> <FaStar /></h6>
                <h6 className="px-2"> <FaStar /></h6>
                <h6 className="px-2"> <FaStar /></h6>
                <h6 className="px-2"> <FaStar /></h6>
                <h6 className="px-2"> <FaRegStar /></h6>
                <p className="px-2"> 4.7 Reviews</p>
                <p className="px-2"> 502 Student Enrolled.</p>
            </div>

        </div>
    );
};

export default Banner;