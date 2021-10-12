import React from 'react';
import coursesData from './CoursesData'
import Card from './Card'
const FeaturedCourse = () => {
    return (
        <>
            {
                coursesData.map((cd) => <Card cd={cd} />)
            }
        </>
    );
};

export default FeaturedCourse;