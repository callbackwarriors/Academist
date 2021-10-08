import React from 'react';
import { BsCameraVideo, BsBook } from 'react-icons/bs';
import { FaFacebook, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import Image from 'next/image';
import c2 from 'assets/images/c2.jpg'

const Instructor = () => {
    return (
        <div className="px-10 py-10 mt-10 mb-20 rounded-md shadow-lg tab1">
            <div className="largestCourse__cardSection">
                <div className="largestCourse__cardSection--imgSection">
                    <Image src={c2} alt="" width="100"
                        height="100" />
                </div>
                <div className="largestCourse__cardSection--TextSection">
                    <h5>Jonathan Campbell</h5>
                    <div className="flex justify-between details">
                        <div className="flex leftSide">
                            <h6><BsCameraVideo /></h6>
                            <p>80 Videos</p>
                        </div>
                        <div className="flex leftSide ">
                            <h6><BsBook /></h6>
                            <p>102 Leacture</p>
                        </div>

                        <div className="flex leftSide">
                            <h6><HiOutlineUserGroup /></h6>
                            <p>4 Year Ex</p>
                        </div>
                    </div>
                    <p className="ml-5">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis pr.</p>

                    <div className="flex justify-between mt-4 details">
                        <div className="flex leftSide">
                            <h6><FaFacebook /></h6>
                            <h6><FaLinkedin /></h6>
                            <h6><FaTwitterSquare /></h6>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;