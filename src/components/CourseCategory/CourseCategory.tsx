import React from 'react';
import Image from 'next/dist/client/image';
import cb from './../../assets/images/cb.jpg'

const CourseCategory = () => {
    return (
        <div className="courseCategory ">
            <div className="container ">
                <h5>Add Category</h5>
                <div className="grid grid-cols-2">
                    <div className="leftInput">
                        <p>Category Name</p>
                        <input type="text" name="title" />
                        <br />
                        <p>Category Title</p>
                        <input type="text" name="title" /> <br />
                    </div>
                    <div className="mt-5 leftInput">
                        <select>
                            <option value="">Category Parent</option>
                            <option value="">Bank</option>
                            <option value="">Programing</option>
                            <option value="">Microsoft Office</option>
                            <option value="">Accounting</option>
                            <option value="">Management</option>
                        </select> <br />
                        <p>Image</p>
                        <input type="file" name="title" />
                        <input type="submit" value="Add Category"></input>
                    </div>
                </div>

                <div className="container grid grid-cols-3 gap-4 pt-5 mt-5 mb-20 border-t-2">
                    <div className="shadow-xl courseCard">
                        <div className="imgCard">
                            <div className="overley">
                                <Image src={cb} alt="this is image" width="100"
                                    height="100" />
                            </div>
                        </div>
                        <div className="px-2 bal">
                            <h6>Web Development</h6>
                            <p>5 Sub Category</p>
                        </div>
                        <div className="subCategory">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Javascripte</p>
                            <p>Php</p>
                        </div>
                        <div className="flex">
                            <button className="member_ship"> Edit  </button><br />
                            <button className="enroll_now"> Delete </button>
                        </div>
                    </div>

                    <div className="shadow-xl courseCard">
                        <div className="imgCard">
                            <div className="overley">
                                <Image src={cb} alt="this is image" width="100"
                height="100" />
                            </div>
                        </div>
                        <div className="px-2 bal">
                            <h6>Web Development</h6>
                            <p>5 Sub Category</p>
                        </div>
                        <div className="subCategory">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Javascripte</p>
                            <p>Php</p>
                        </div>
                        <div className="flex">
                            <button className="member_ship"> Edit  </button><br />
                            <button className="enroll_now"> Delete </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseCategory;