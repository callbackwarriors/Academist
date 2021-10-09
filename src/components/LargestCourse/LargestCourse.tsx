import c1 from 'assets/images/c1.jpg';
import c2 from 'assets/images/c2.jpg';
import c3 from 'assets/images/c3.jpg';
import c4 from 'assets/images/c4.jpg';
import Title from 'components/utilities/Title';
import Image from 'next/image';
import { BsBook, BsHeart } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';

const LargestCourse = () => {
    return (
        <div className="largestCourse">

            <Title subtitle="GO AT YOUR OWN PACE" title="The World’s Largest Selection Of Courses" description=""/>
            <div className="container sm:grid  grid-cols-2 gap-8 ">

                <div className="largestCourse__cardSection">
                    <div className="largestCourse__cardSection--imgSection">
                    <div className="shadow bg-white rounded-full p-2 inline-flex align-middle inline-block">
                        <Image width="150px" height="150px" src={c1} alt="" />
                    </div>
                    </div>
                    <div className="largestCourse__cardSection--TextSection">
                        <div className="flex justify-end">
                            <p> <BsHeart /></p>
                        </div>
                        <h5>$39</h5>
                        <h6>Agile Crash Course: Agile Project Management</h6>
                        <div className="details flex justify-between">
                            <div className="leftSide flex">
                                <h6><BsBook></BsBook></h6>
                                <p>15 lession</p>
                            </div>
                            <div className="leftSide flex  ">
                                <h6><HiOutlineUserGroup /></h6>
                                <p>145 Students</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="largestCourse__cardSection">
                    <div className="largestCourse__cardSection--imgSection">
                    <div className="shadow bg-white rounded-full p-2 inline-flex align-middle inline-block">
                        <Image width="150px" height="150px" src={c2} alt="" />
                        </div>
                    </div>
                    <div className="largestCourse__cardSection--TextSection">
                        <div className="flex justify-end">
                            <p> <BsHeart /></p>
                        </div>
                        <h5>$29</h5>
                        <h6>Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)</h6>
                        <div className="details flex justify-between">
                            <div className="leftSide flex">
                                <h6><BsBook></BsBook></h6>
                                <p>10 lession</p>
                            </div>
                            <div className="leftSide flex  ">
                                <h6><HiOutlineUserGroup /></h6>
                                <p>100 Students</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="largestCourse__cardSection">
                    <div className="largestCourse__cardSection--imgSection">
                    <div className="shadow bg-white rounded-full p-2 inline-flex align-middle inline-block">
                        <Image width="150px" height="150px" src={c3} alt="" />
                    </div>
                    </div>
                    <div className="largestCourse__cardSection--TextSection">
                        <div className="flex justify-end">
                            <p> <BsHeart /></p>
                        </div>
                        <h5>$44</h5>
                        <h6>Crash Course: Agile Project dark Management</h6>
                        <div className="details flex justify-between">
                            <div className="leftSide flex">
                                <h6><BsBook></BsBook></h6>
                                <p>25 lession</p>
                            </div>
                            <div className="leftSide flex  ">
                                <h6><HiOutlineUserGroup /></h6>
                                <p>130 Students</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="largestCourse__cardSection">
                    <div className="largestCourse__cardSection--imgSection">
                    <div className="shadow bg-white rounded-full p-2 inline-flex align-middle inline-block">
                        <Image width="150px" height="150px" src={c4} alt="" />
                    </div>
                    </div>
                    <div className="largestCourse__cardSection--TextSection">
                        <div className="flex justify-end">
                            <p> <BsHeart /></p>
                        </div>
                        <h5>$69</h5>
                        <h6>Agile Crash Course: Agile Project Management</h6>
                        <div className="details flex justify-between">
                            <div className="leftSide flex">
                                <h6><BsBook></BsBook></h6>
                                <p>11 lession</p>
                            </div>
                            <div className="leftSide flex  ">
                                <h6><HiOutlineUserGroup /></h6>
                                <p>125 Students</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <button className="largestCourse__detailsButton">View All Course</button>
        </div>
    );
};

export default LargestCourse;