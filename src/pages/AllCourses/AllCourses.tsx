import React from 'react';
import Header from 'components/utilities/Header';
import { AiFillEye, AiFillVideoCamera, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { BsFileMinus, BsFillGrid3X2GapFill, BsFillGrid3X3GapFill, BsSearch  } from 'react-icons/bs';
import Footer from 'components/utilities/Footer';
const AllCourses = () => {
    return (
        <div className="sectionAllCourses">
            <Header/>
            <div className="allCourses bg-gray-300">
            <h2 className="py-12 bg-white"> Find Your Course</h2>
            <div className="container flex py-16">
           
            <div className="allCourses__page-sidebar w-1/3  pb-10 ">
                <div className="page-sidebar bg-white p-8 rounded-md">
                    <div className="allCourses__page-sidebar--findBox flex ">
                    <div>
                         
                    </div>
                        <div className="allCourses__page-sidebar--findBox--find flex item-center w-full bg-gray-100 bg-opacity-50 h-14  border border-gray-300 ">
                            <div className="p-2 pt-4">
                            <BsSearch />
                            </div>
                       
                            <input type="text" placeholder="Search for new course..." id="email" name="search" className="font-1 text-lg w-full focus:border-royal-blue focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                   
					<div className="allCourses__page-sidebar--catagory ">						
                    <label className="" >

                        <select className=" mt-3 w-full bg-gray-100 bg-opacity-50 h-14  border border-gray-300 focus:border-royal-blue focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            <option>Select</option>
                            <option>Option 2</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                        </select>
                        
                    </label>
                    </div>

                    <div className="allCourses__page-sidebar--checklist mt-3">
                        <h6>Top instructor</h6>
                        <ul>
                            <li className="">
                                <label className="checkbox-container">Keny White
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                <div className="count">                              
                                    <span className="count">12</span>
                                </div>
                               
                            </li>
                            <li className="">
                                <label className="checkbox-container">Keny White
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                <div className="count">                              
                                    <span className="count">12</span>
                                </div>
                               
                            </li>
                            <li className="">
                                <label className="checkbox-container">Keny White
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                <div className="count">                              
                                    <span className="count">12</span>
                                </div>
                               
                            </li>
                            <li className="">
                                <label className="checkbox-container">Keny White
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                <div className="count">                              
                                    <span className="count">12</span>
                                </div>
                               
                            </li>
                            <li className="">
                                <label className="checkbox-container">Keny White
                                    <input type="checkbox"/>
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
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                
                            </li>
                            <li className="">
                            <label className="checkbox-container">Intermediate
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>                            
                            </li>
                            <li className="">
                            <label className="checkbox-container">Advanced
                                    <input type="checkbox"/>
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
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                <div className="count">                              
                                    <span className="count">100</span>
                                </div>
                               
                            </li>
                            <li className="">
                            <label className="checkbox-container">Free
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                <div className="count">                              
                                    <span className="count">11</span>
                                </div>
                               
                            </li>
                            <li className="">
                            <label className="checkbox-container">Paid
                                    <input type="checkbox"/>
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
            <div className="content w-2/3 pl-2">
                <div className="page-content ">
                    <div className="page-content__header grid grid-cols-2 items-center bg-white rounded-sm px-2">
                        <div className="p-2">
                        <h6>Showing 1-25 Of 72</h6>
                        </div>
                        <div className="grid  grid-cols-3">
                        <span className="flex justify-end p-3">Short by:</span>
                        <div>
                        <select className="  w-full bg-gray-100 bg-opacity-50 h-14  border border-gray-300 focus:border-royal-blue focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out">
                            <option>Select</option>
                            <option>Mostly visited</option>
                            <option>Most popular</option>
                            <option>Mostly sold</option>
                       
                        </select>
                        </div>
                        <div className=" grid grid-cols-2 grid-rows-1">
                            <div className="px-6 pt-4 text-2xl">
                            <BsFillGrid3X3GapFill />
                            </div>
                            <div className="px-6 pt-4 text-2xl">
                            <BsFillGrid3X2GapFill/>
                            </div>
                                            
                        </div>
                        </div>
                    </div>

                    <div className="page-content__body flex flex-wrap">
                        <div className="xl:w-1/3 md:w-1/2 p-4 transition duration-100 ease-in-out transform hover:scale-105">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <div className="relative">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
                        <AiOutlineHeart className="text-2xl absolute top-3 right-3"/>
                        </div>

                        <div className="flex justify-between gap-3 pb-3 mb-3 border-gray-300 border-b">
                            <div className="flex justify-center items-center gap-1">
                            <AiOutlineStar  className="text-2xl text-yellow-400" /> 4.5
                            </div>

                            <div className="flex justify-center items-center gap-1">
                            <AiFillEye  className="text-2xl text-red-400" /> 2300
                            </div>

                            <div className="flex justify-center items-center gap-1">
                            <AiFillVideoCamera  className="text-2xl text-green-400" /> 15
                            </div>

                        </div>
                        <h4 className="text-2xl mb-2">Colosseum Roma</h4>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>

                        
                    </div>

                    <div className="xl:w-1/3 md:w-1/2 p-4 transition duration-100 ease-in-out transform hover:scale-105">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <div className="relative">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
                        <AiOutlineHeart className="text-2xl absolute top-3 right-3"/>
                        </div>

                        <div className="flex justify-between gap-3 pb-3 mb-3 border-gray-300 border-b">
                            <div className="flex justify-center items-center gap-1">
                            <AiOutlineStar  className="text-2xl text-yellow-400" /> 4.5
                            </div>

                            <div className="flex justify-center items-center gap-1">
                            <AiFillEye  className="text-2xl text-red-400" /> 2300
                            </div>

                            <div className="flex justify-center items-center gap-1">
                            <AiFillVideoCamera  className="text-2xl text-green-400" /> 15
                            </div>

                        </div>
                        <h4 className="text-2xl mb-2">Colosseum Roma</h4>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>

                        
                    </div>

                    <div className="xl:w-1/3 md:w-1/2 p-4 transition duration-100 ease-in-out transform hover:scale-105">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <div className="relative">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
                        <AiOutlineHeart className="text-2xl absolute top-3 right-3"/>
                        </div>

                        <div className="flex justify-between gap-3 pb-3 mb-3 border-gray-300 border-b">
                            <div className="flex justify-center items-center gap-1">
                            <AiOutlineStar  className="text-2xl text-yellow-400" /> 4.5
                            </div>

                            <div className="flex justify-center items-center gap-1">
                            <AiFillEye  className="text-2xl text-red-400" /> 2300
                            </div>

                            <div className="flex justify-center items-center gap-1">
                            <AiFillVideoCamera  className="text-2xl text-green-400" /> 15
                            </div>

                        </div>
                        <h4 className="text-2xl mb-2">Colosseum Roma</h4>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>

                        
                    </div>

                    <div className="xl:w-1/3 md:w-1/2 p-4 transition duration-100 ease-in-out transform hover:scale-105">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <div className="relative">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://i.ibb.co/9V1Xq8s/crd-img.webp" alt="" />
                        <AiOutlineHeart className="text-2xl absolute top-3 right-3"/>
                        </div>

                        <div className="flex justify-between gap-3 pb-3 mb-3 border-gray-300 border-b">
                            <div className="flex justify-center items-center gap-1">
                            <AiOutlineStar  className="text-2xl text-yellow-400" /> 4.5
                            </div>

                            <div className="flex justify-center items-center gap-1">
                            <AiFillEye  className="text-2xl text-red-400" /> 2300
                            </div>

                            <div className="flex justify-center items-center gap-1">
                            <AiFillVideoCamera  className="text-2xl text-green-400" /> 15
                            </div>

                        </div>
                        <h4 className="text-2xl mb-2">Colosseum Roma</h4>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>

                        
                    </div>
                    </div>


                </div>
            </div>
            </div>
            </div> 
            <Footer/>                 
        </div>
    );
};

export default AllCourses;