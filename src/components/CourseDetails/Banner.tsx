import React from 'react';
import { FaBookOpen, FaPlay, FaUser, FaStar, FaRegStar } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="container">
        <h3>Ruby On Rails Program</h3>
        <div className="bannerDiv flex">
            <div className="box flex ">
                <h6 className="px-2"> <FaBookOpen /></h6>
                <p className="px-2">10 - 20 weeks</p>
            </div>

            <div className="box flex ">
                <h6 className="px-2"> <FaPlay /></h6>
                <p className="px-2">102 Lectures</p>
            </div>

            <div className="box flex ">
                <h6 className="px-2"> <FaUser /></h6>
                <p className="px-2">502 Student Enrolled</p>
            </div>
        </div>

        <p className="pText">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        <div className="box2 flex ">
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