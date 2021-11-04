import React from 'react';
import { IContact } from 'type';
import Title from '../utilities/Title';
import TestimonialCart from './TestimonialCart';
import Link from 'next/link';

interface IProp {
  contact: IContact
}

const Testimonial = ({ contact }: IProp) => {

  return (
    <>
      <div className=" testimonial section-padding">

        <div className="container">
          <Title subtitle="LEARNS THOUGHTS" title="Testimonials" description="" />

          <div className="flex flex-wrap mb-6 -m-4">
            {
              contact.slice(0, 2).map((contactInfo: IContact) => <TestimonialCart key={contactInfo._id} contactInfo={contactInfo} />)
            }
          </div>
          <Link href="/alltestimonial">
          <a>
            <button className="allTestimonialButton">
              View All Testimonial
            </button>
          </a>
        </Link>
        </div>
      </div>
    </>
  );
};

export default Testimonial;