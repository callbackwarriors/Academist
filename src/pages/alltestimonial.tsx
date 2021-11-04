import React from 'react';
import Contact from "../models/Review";
import Title from 'components/utilities/Title';
import AllTestimonial from 'components/AllTestimonial/AllTestimonial';
import db from 'utils/db';
import Layout from 'components/utilities/Layout';
import { IContact } from 'type';

interface IProp {
    props: IContact;
}

const alltestimonial = (props: IProp) => {
    const { testimonials }: any = props

    return (
        <Layout>
            <div className=" testimonial section-padding">

                <div className="container">
                    <Title subtitle="LEARNS THOUGHTS" title="Testimonials" description="" />

                    <div className="flex flex-wrap mb-6 -m-4">
                        {
                            testimonials.map((testimonial: IContact) => <AllTestimonial key={testimonial._id} testimonial={testimonial} />)
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default alltestimonial;


export async function getServerSideProps() {
    await db.connect();
    const testimonials = await Contact.find({}).lean();
    await db.disconnect();
    return {
        props: {
            testimonials: testimonials.map(db.convertDocToObj),
        },
    };
}