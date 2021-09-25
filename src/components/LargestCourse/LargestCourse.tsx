import { BsHeart, BsBook } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import c1 from 'assets/images/c1.jpg'
import c2 from 'assets/images/c2.jpg'
import c3 from 'assets/images/c3.jpg'
import c4 from 'assets/images/c4.jpg'
import c5 from 'assets/images/c5.jpg'
import c7 from 'assets/images/c7.jpg'
import Image from 'next/image'

const LargestCourse = () => {
    return (
        <div className="largestCourse">
            <h4>GO AT YOUR OWN PACE</h4>
            <h3>The World’s Largest Selection Of Courses</h3>
            <div className="container sm:grid  grid-cols-2 gap-8 ">

                <div className="largestCourse__cardSection">
                    <div className="largestCourse__cardSection--imgSection">
                        <Image src={c1} alt="" />
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
                        <Image src={c2} alt="" />
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
                        <Image src={c3} alt="" />
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
                        <Image src={c4} alt="" />
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

                <div className="largestCourse__cardSection">
                    <div className="largestCourse__cardSection--imgSection">
                        <Image src={c5} alt="" />
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
                                <p>120 Students</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="largestCourse__cardSection">
                    <div className="largestCourse__cardSection--imgSection">
                        <Image src={c7} alt="" />
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
            </div>
            <button className="largestCourse__detailsButton">View All Course</button>
        </div>
    );
};

export default LargestCourse;