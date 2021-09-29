import React from 'react';
import { BiLike } from 'react-icons/bi';

const courseCard = () => {
    return (
        <div className="container">
            <div className="courseCard shadow-xl">
                <div className="imgCard">
                    <div className="overley">
                        {/* <Image src={cb} alt="this is image" /> */}
                    </div>
                </div>
                <div className="Bal px-2">
                    <p className="pt-2" >Acctual Price</p>
                    <h3>$ 149.00</h3>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <h6>Course Features</h6>
                </div>

                <div className="bara grid grid-cols-2 mt-4 px-2">
                    <div className="hol flex mr-4">
                        <h6> <BiLike /></h6>
                        <p>3k View</p>
                    </div>
                    <div className="hol flex mr-4">
                        <h6> <BiLike /></h6>
                        <p>2 hour 30 min</p>
                    </div>
                    <div className="hol flex mr-4">
                        <h6> <BiLike /></h6>
                        <p>Principiante</p>
                    </div>
                    <div className="hol flex mr-4">
                        <h6> <BiLike /></h6>
                        <p>04 Certified</p>
                    </div>
                </div>

                <button> Get Membership  </button><br />
                <button> Enroll Now  </button>

            </div>
        </div>
    );
};

export default courseCard;