import c1 from 'assets/images/c1.jpg';
import Image from 'next/image';
import { BsBook, BsHeart } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';

const LargestCourse = ({ course }: any) => {
    const { img, title, price } = course;
    return (

        <>
            <div className="largestCourse__cardSection">
                <div className="largestCourse__cardSection--imgSection">
                    <div className="inline-flex p-2 align-middle bg-white rounded-full shadow">
                        <Image width="150px" height="150px" src={img} alt="" />
                    </div>
                </div>
                <div className="largestCourse__cardSection--TextSection">
                    <div className="flex justify-end">
                        <p> <BsHeart /></p>
                    </div>
                    <h5>${price}</h5>
                    <h6>{title}</h6>
                    <div className="flex justify-between details">
                        <div className="flex leftSide">
                            <h6><BsBook></BsBook></h6>
                            <p>15 lession</p>
                        </div>
                        <div className="flex leftSide ">
                            <h6><HiOutlineUserGroup /></h6>
                            <p>145 Students</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LargestCourse;