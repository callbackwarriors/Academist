import React from 'react';
import Card from './Card';
import coursesData from './CoursesData';
const FeaturedCourse = () => {
    return (
        <div className="flex flex-wrap overflow-hidden">
            {
                coursesData.map((cd) => <Card cd={cd} />)
            }
        </div>
    );
};

export default FeaturedCourse;