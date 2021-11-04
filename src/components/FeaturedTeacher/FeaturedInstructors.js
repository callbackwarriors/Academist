import Title from 'components/utilities/Title';
import React from 'react';
import FeaturedInstructor from './FeaturedInstructor';
const FeaturedInstructors = ({ user }) => {
    const instructors = user.filter((instructor) => instructor.instructor === true);

    return (
        <section className="FeaturedTeacher">

            <Title subtitle="WORLD-CLASS INSTRUCTORS" title="Taught By Real Creators" description="" />
            <div className="container">
                <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                    {instructors?.slice(0, 4).map((instructor) => (
                        <FeaturedInstructor key={instructor._id} instructor={instructor} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedInstructors;