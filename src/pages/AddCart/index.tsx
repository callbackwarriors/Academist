import Footer from 'components/utilities/Footer';
import Header from 'components/utilities/Header';
import React from 'react';
import { BsFillXSquareFill } from 'react-icons/bs';

const AddCart = () => {
    return (
        <div>
            <Header/>
            <div className="cart-head">
               
                <h2> Your Shopping Cart</h2>
                         
            </div>
            <div className="cart-content container mb-24">
                <div className="cart-content__item">
                   <ul className="cart-course-list">
                    <li className="border border-gray-00 flex p-5">
                        <div className="flex">
                        <div className="course-image ">
                            <img src="http://skilify.theuxuidesigner.com/images/webp/crd-img3.webp"/>
                        </div>
                        <div className="CourseName-instructor">
                        <h5>Agile Crash Course: Agile Project Management</h5>
                        <picture className="flex">
                            <img src="http://skilify.theuxuidesigner.com/images/webp/profile-img4.webp"/>
                            <span>Pori moni</span>
                        </picture>
                        </div>
                        </div>
                        <div className="price my-5 mx-5">
                           <span className="mb-2 text-2xl font-semibold">$125</span><br/>
                           <del className="text-xl text-gray-500">$225</del>
                        </div>
                        <button className="text-red-400 text-2xl">
                            <BsFillXSquareFill/>
                        </button>

                    </li>
                    <li className="border border-gray-00 flex p-5">
                        <div className="flex">
                        <div className="course-image ">
                            <img src="http://skilify.theuxuidesigner.com/images/webp/crd-img3.webp"/>
                        </div>
                        <div className="CourseName-instructor">
                        <h5>Agile Crash Course: Agile Project Management</h5>
                        <picture className="flex">
                            <img src="http://skilify.theuxuidesigner.com/images/webp/profile-img4.webp"/>
                            <span>Pori moni</span>
                        </picture>
                        </div>
                        </div>
                        <div className="price my-5 mx-5">
                           <span className="mb-2 text-2xl font-semibold">$125</span><br/>
                           <del className="text-xl text-gray-500">$225</del>
                        </div>
                        <button className="text-red-400 text-3xl">
                            <BsFillXSquareFill/>
                        </button>

                    </li>
                    <li className="border border-gray-00 flex p-5">
                        <div className="flex">
                        <div className="course-image ">
                            <img src="http://skilify.theuxuidesigner.com/images/webp/crd-img3.webp"/>
                        </div>
                        <div className="CourseName-instructor">
                        <h5>Agile Crash Course: Agile Project Management</h5>
                        <picture className="flex">
                            <img src="http://skilify.theuxuidesigner.com/images/webp/profile-img4.webp"/>
                            <span>Pori moni</span>
                        </picture>
                        </div>
                        </div>
                        <div className="price my-5 mx-5">
                           <span className="mb-2 text-2xl font-semibold">$125</span><br/>
                           <del className="text-xl text-gray-500">$225</del>
                        </div>
                        <button className="text-red-400 text-3xl">
                            <BsFillXSquareFill/>
                        </button>

                    </li>
                   </ul>
                </div>
                <div className="card-content__checkout  bg-red-100 w-1/4 py-10 px-5 mt-8 h-72">
                    <h5>Total Price </h5>
                    <div className="flex justify-between">
                    <span className="mb-2 text-2xl font-semibold">$125</span>
                    <span className="text-xl text-gray-500"> 50% off $225</span>
                    </div>
                    <input className="w-full mt-4 mb-4 h-10 rounded-sm p-2" placeholder="Add Your Coupon"/>
                    <button className="bg-red-400 hover:bg-red-700 hover:text-white w-full h-10 text-xl font-semibold rounded-sm">Check out</button>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AddCart;