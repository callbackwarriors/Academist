import React from 'react';
import { BiLike } from 'react-icons/bi';
import { ICourses } from 'type';
import Image from 'next/dist/client/image';

interface IProp {
    evt: ICourses;
}

const courseCard = ({ evt }: IProp) => {
    const { price, img } = evt;
    return (
        <div className="container">
            <div className="shadow-xl courseCard">
                <div className="imgCard">
                    <div className="overley">
                        {/* <Image src={img} alt="this is image" width="350px" height="330px" /> */}
                    </div>
                </div>
                <div className="px-2 Bal">
                    <p className="pt-2" >Acctual Price</p>
                    <h3>$ {price}</h3>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <h6>Course Features</h6>
                </div>

                <div className="grid grid-cols-2 px-2 mt-4 bara">
                    <div className="flex mr-4 hol">
                        <h6> <BiLike /></h6>
                        <p>3k View</p>
                    </div>
                    <div className="flex mr-4 hol">
                        <h6> <BiLike /></h6>
                        <p>2 hour 30 min</p>
                    </div>
                    <div className="flex mr-4 hol">
                        <h6> <BiLike /></h6>
                        <p>Principiante</p>
                    </div>
                    <div className="flex mr-4 hol">
                        <h6> <BiLike /></h6>
                        <p>04 Certified</p>
                    </div>
                </div>

                <button className="member_ship"> Get Membership  </button><br />
                <button className="enroll_now"> Enroll Now  </button>

            </div>
        </div>
    );
};

export default courseCard;