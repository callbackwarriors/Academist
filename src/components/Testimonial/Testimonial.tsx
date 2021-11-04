import React from 'react';
import { IContact } from 'type';
import Title from '../utilities/Title';
import TestimonialCart from './TestimonialCart';

interface IProp {
  contact: IContact
}

const Testimonial = ({ contact }: IProp) => {

  return (
    <>
      <div className=" testimonial section-padding">

        <div className="container">
          <Title subtitle="LEARNS THOUGHTS" title="Testimonials" description="" />

          <div className="flex flex-wrap -m-4">
            {
              contact?.map((contactInfo) => <TestimonialCart key={contactInfo._id} contactInfo={contactInfo} />)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;