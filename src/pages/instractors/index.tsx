import Footer from 'components/utilities/Footer';
import Header from 'components/utilities/Header';
import React from 'react';
import { AiFillEye, AiFillVideoCamera, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { BsFillGrid3X2GapFill, BsFillGrid3X3GapFill, BsSearch } from 'react-icons/bs';
const Instractors = () => {
    return (
        <div className="sectionAllCourses">
            <Header />
            <div className="bg-gray-300 allCourses">
                <h2 className="py-12 text-center bg-white">Courses Instractors</h2>

                <div className="container flex py-16">
                    <div className="w-1/3 pb-10 allCourses__page-sidebar ">
                        <div className="p-8 bg-white rounded-md page-sidebar">
                            <div className="flex allCourses__page-sidebar--findBox ">
                                <div>
                                </div>
                                <div className="flex w-full bg-gray-100 bg-opacity-50 border border-gray-300 allCourses__page-sidebar--findBox--find item-center h-14 ">
                                    <div className="p-2 pt-4">
                                        <BsSearch />
                                    </div>
                                    <input type="text" placeholder="Search for new course..." id="email" name="search" className="w-full px-3 py-1 text-base text-lg leading-8 text-gray-700 transition-colors duration-200 ease-in-out outline-none font-1 focus:border-royal-blue focus:bg-transparent focus:ring-2 focus:ring-indigo-200" />
                                </div>
                            </div>

                            <div className="allCourses__page-sidebar--catagory ">
                                <label className="" >
                                    <select className="w-full px-3 py-1 mt-3 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 outline-none h-14 focus:border-royal-blue focus:bg-transparent focus:ring-2 focus:ring-indigo-200">
                                        <option>Select</option>
                                        <option>Option 2</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                    </select>
                                </label>
                            </div>

                            <div className="mt-3 allCourses__page-sidebar--checklist">
                                <h6>Top instructor</h6>
                                <ul>
                                    <li className="">
                                        <label className="checkbox-container">Keny White
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="count">
                                            <span className="count">12</span>
                                        </div>
                                    </li>
                                    <li className="">
                                        <label className="checkbox-container">Keny White
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="count">
                                            <span className="count">12</span>
                                        </div>
                                    </li>
                                    <li className="">
                                        <label className="checkbox-container">Keny White
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="count">
                                            <span className="count">12</span>
                                        </div>
                                    </li>
                                    <li className="">
                                        <label className="checkbox-container">Keny White
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="count">
                                            <span className="count">12</span>
                                        </div>
                                    </li>
                                    <li className="">
                                        <label className="checkbox-container">Keny White
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="count">
                                            <span className="count">12</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="allCourses__page-sidebar--checklist">
                                <h6>Skill level</h6>
                                <ul>
                                    <li className="">
                                        <label className="checkbox-container">Beginner
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                    <li className="">
                                        <label className="checkbox-container">Intermediate
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                    <li className="">
                                        <label className="checkbox-container">Advanced
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            <div className="allCourses__page-sidebar--checklist ">
                                <h6>Price</h6>
                                <ul>
                                    <li className="">
                                        <label className="checkbox-container">All
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="count">
                                            <span className="count">100</span>
                                        </div>
                                    </li>
                                    <li className="">
                                        <label className="checkbox-container">Free
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="count">
                                            <span className="count">11</span>
                                        </div>
                                    </li>
                                    <li className="">
                                        <label className="checkbox-container">Paid
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="count">
                                            <span className="count">99</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="w-2/3 pl-2 content">
                        <div className="page-content ">
                            <div className="grid items-center grid-cols-2 px-2 bg-white rounded-sm page-content__header">
                                <div className="p-2">
                                    <h6>Showing 1-25 Of 72</h6>
                                </div>
                                <div className="grid grid-cols-3">
                                    <span className="flex justify-end p-3">Short by:</span>
                                    <div>
                                        <select className="w-full py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 outline-none h-14 focus:border-royal-blue focus:bg-transparent focus:ring-2 focus:ring-indigo-200">
                                            <option>Select</option>
                                            <option>Mostly visited</option>
                                            <option>Most popular</option>
                                            <option>Mostly sold</option>
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-2 grid-rows-1 ">
                                        <div className="px-6 pt-4 text-2xl">
                                            <BsFillGrid3X3GapFill />
                                        </div>
                                        <div className="px-6 pt-4 text-2xl">
                                            <BsFillGrid3X2GapFill />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap page-content__body">
                                <div className="p-4 transition duration-100 ease-in-out transform xl:w-1/3 md:w-1/2 hover:scale-105">
                                    <div className="p-6 bg-gray-100 rounded-lg">
                                        <div className="relative">
                                            <img className="object-cover object-center w-full h-40 mb-6 rounded" src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
                                            <AiOutlineHeart className="absolute text-2xl top-3 right-3" />
                                        </div>

                                        <div className="flex justify-between gap-3 pb-3 mb-3 border-b border-gray-300">
                                            <div className="flex items-center justify-center gap-1">
                                                <AiOutlineStar className="text-2xl text-yellow-400" /> 4.5
                                            </div>
                                            <div className="flex items-center justify-center gap-1">
                                                <AiFillEye className="text-2xl text-red-400" /> 2300
                                            </div>
                                            <div className="flex items-center justify-center gap-1">
                                                <AiFillVideoCamera className="text-2xl text-green-400" /> 15
                                            </div>
                                        </div>
                                        <h4 className="mb-2 text-2xl">Colosseum Roma</h4>
                                        <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                    </div>
                                </div>

                                <div className="p-4 transition duration-100 ease-in-out transform xl:w-1/3 md:w-1/2 hover:scale-105">
                                    <div className="p-6 bg-gray-100 rounded-lg">
                                        <div className="relative">
                                            <img className="object-cover object-center w-full h-40 mb-6 rounded" src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
                                            <AiOutlineHeart className="absolute text-2xl top-3 right-3" />
                                        </div>
                                        <div className="flex justify-between gap-3 pb-3 mb-3 border-b border-gray-300">
                                            <div className="flex items-center justify-center gap-1">
                                                <AiOutlineStar className="text-2xl text-yellow-400" /> 4.5
                                            </div>
                                            <div className="flex items-center justify-center gap-1">
                                                <AiFillEye className="text-2xl text-red-400" /> 2300
                                            </div>
                                            <div className="flex items-center justify-center gap-1">
                                                <AiFillVideoCamera className="text-2xl text-green-400" /> 15
                                            </div>
                                        </div>
                                        <h4 className="mb-2 text-2xl">Colosseum Roma</h4>
                                        <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                    </div>
                                </div>

                                <div className="p-4 transition duration-100 ease-in-out transform xl:w-1/3 md:w-1/2 hover:scale-105">
                                    <div className="p-6 bg-gray-100 rounded-lg">
                                        <div className="relative">
                                            <img className="object-cover object-center w-full h-40 mb-6 rounded" src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
                                            <AiOutlineHeart className="absolute text-2xl top-3 right-3" />
                                        </div>
                                        <div className="flex justify-between gap-3 pb-3 mb-3 border-b border-gray-300">
                                            <div className="flex items-center justify-center gap-1">
                                                <AiOutlineStar className="text-2xl text-yellow-400" /> 4.5
                                            </div>
                                            <div className="flex items-center justify-center gap-1">
                                                <AiFillEye className="text-2xl text-red-400" /> 2300
                                            </div>
                                            <div className="flex items-center justify-center gap-1">
                                                <AiFillVideoCamera className="text-2xl text-green-400" /> 15
                                            </div>
                                        </div>
                                        <h4 className="mb-2 text-2xl">Colosseum Roma</h4>
                                        <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                    </div>
                                </div>

                                <div className="p-4 transition duration-100 ease-in-out transform xl:w-1/3 md:w-1/2 hover:scale-105">
                                    <div className="p-6 bg-gray-100 rounded-lg">
                                        <div className="relative">
                                            <img className="object-cover object-center w-full h-40 mb-6 rounded" src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
                                            <AiOutlineHeart className="absolute text-2xl top-3 right-3" />
                                        </div>
                                        <div className="flex justify-between gap-3 pb-3 mb-3 border-b border-gray-300">
                                            <div className="flex items-center justify-center gap-1">
                                                <AiOutlineStar className="text-2xl text-yellow-400" /> 4.5
                                            </div>
                                            <div className="flex items-center justify-center gap-1">
                                                <AiFillEye className="text-2xl text-red-400" /> 2300
                                            </div>
                                            <div className="flex items-center justify-center gap-1">
                                                <AiFillVideoCamera className="text-2xl text-green-400" /> 15
                                            </div>
                                        </div>
                                        <h4 className="mb-2 text-2xl">Colosseum Roma</h4>
                                        <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Instractors;