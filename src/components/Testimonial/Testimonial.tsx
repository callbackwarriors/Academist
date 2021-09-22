import React from 'react';
import TestimonialCart from './TestimonialCart';
import fakeData from './TestimonialData'
// import ITestimonial from '../../types'
const Testimonial = () => {
    console.log(fakeData)
    interface ITestimonial {
        id: number;
        name: string;
        image: StaticImageData;
        position: string;
        compliment: string;
      }


    return (
        <>
        <div className="testimonial">
            <div className="testimonial__title">
                 <h3 >Our Cours Creater says</h3>
            </div>
            <div className="testimonial__cart ">
            {
              fakeData?.map((fd:ITestimonial)=> <TestimonialCart fd={fd} /> )
           } 
            </div>
         </div>
        </>
    );
};

export default Testimonial;