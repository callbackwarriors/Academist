import React, { useEffect, useState } from 'react';
import Header from 'components/utilities/Header';
import {  BsFillGrid3X2GapFill, BsFillGrid3X3GapFill, BsSearch  } from 'react-icons/bs';
import Footer from 'components/utilities/Footer';
import CoursesSidebar from 'components/CoursesSidebar/CoursesSidebar';
import Courses from 'components/Courses/Courses';







const programmingCoruses = () => {
      const [proCourse, setProCourse] = useState([]);
  
      useEffect(()=>{
          async function fetchCoursesData() {
            const response = fetch("http://localhost:5000/api/courses")
            const data = await (await response).json()
            setProCourse(data);
          }
          fetchCoursesData()
      },[])

const programming = proCourse.filter(({res}:any)=> res.categories === "programming" )


    return (
        <>
               <div className="sectionAllCourses">
            <Header/>
            <div className="allCourses bg-gray-300">
                
                {/* <h2 className="py-12 bg-white"> Find Your Course</h2> */}
                
            <div className="container flex py-16">
            <div className="allCourses__page-sidebar w-1/3  pb-10 ">
            <CoursesSidebar />
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
        
        {
          programming.map(({pc}:any)=> <Courses pc={pc} />)
        }
           


                </div>
            </div>
            </div>
            </div> 
            <Footer/>                 
        </div> 
        </>
    );
};

export default programmingCoruses;  