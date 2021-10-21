import instractor from "assets/images/instractor.jpg";
import Image from 'next/image';
import React from 'react';
const InstractorDetail = () => {
    return (
        <div className="container">
           <div className="flex align-center justify-center py-20 bg-royal-blue-200">
              <Image src={instractor} width="200px" height="200px"/>
              <div className="ml-5">
                  <span className="m-1 p-2 bg-red-100 text-red-900 rounded-2xl text-sm">Web Development</span>
                  <span className="m-1 p-2 bg-blue-100 text-blue-900 rounded-2xl text-sm">javaScript</span>
                  <h5 className="m-5 text-gray-600">Jhankar Mahbub</h5>
                  <div className="">
                       <span className="mx-2 text-gray-600">  10 - 20 weeks</span>
                      <span className="mx-2 text-gray-600">  102 Lectures</span>
                      <span className="mx-2 text-gray-600">502 Student Enrolled</span>
                      <p className="text-gray-500 mt-5">Excepteur sint occaecat cupidatat non proident, deserunt  <br /> mollit anim id est laborum. accusantium doloremque <br /> laudantium,vitae dicta <span className="text-green-600">Read More...</span> </p>
                  </div>
              </div>
              <div className="m-5">
                 <p className="m-2 p-5 bg-green-500 text-white rounded-sm ">Get Membership</p>
                 <p className="m-2 p-5 bg-white text-gray-900 rounded-sm border-2 border-gray-400 font-bold">Share</p>
                 <p className=""></p>
              </div>
             
           </div> 
        </div>
    );
};

export default InstractorDetail;