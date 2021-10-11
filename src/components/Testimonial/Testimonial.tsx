import React from 'react';
import Title from '../utilities/Title';
import TestimonialCart from './TestimonialCart';
import fakeData from './TestimonialData';
// import ITestimonial from '../../types'


import { ICourses, users } from 'type';

interface IProp {
  users: users;
}

const Testimonial = ({ users}: IProp) => {
    interface ITestimonial {
        id: number;
        name: string;
        image: StaticImageData;
        position: string;
        compliment: string;
      }

console.log(users)
   


    return (
        <>
        <div className="testimonial section-padding">


         
         {users.map((ur) => (
                      <p>{ur.name } </p> 
          ))} 



          <div className="container">
            <Title subtitle="LEARNS THOUGHTS" title="Testimonials" description=""/>

          <div className="flex flex-wrap -m-4">
            {
              fakeData?.map((fd:ITestimonial)=> <TestimonialCart key={fd.id} fd={fd} /> )
           } 
            </div>
            </div>
         </div>
        </>
    );
};

export default Testimonial;