import React from 'react';
import coursesData from './CoursesData'
import Card from './Card'
const FeaturedCourse = () => {
    return (
        <div>
            {
                coursesData.map((cd)=> <Card cd={cd} />)
            }
        </div>
    );
};

export default FeaturedCourse;