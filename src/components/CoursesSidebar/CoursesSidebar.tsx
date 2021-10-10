import React from 'react';
import {  BsSearch  } from 'react-icons/bs';

const CoursesSidebar = () => {
    return (
        <div>
                   
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
                        <h6>Course categories</h6>
                        <ul>
                            <li className="">
                                <label className="checkbox-container">
                                <a href="/">Keny White</a>
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
        
    );
};

export default CoursesSidebar;