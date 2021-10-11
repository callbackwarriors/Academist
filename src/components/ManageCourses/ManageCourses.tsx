import React from 'react';
import Image from 'next/image'
import ManageCourse from 'components/ManageCourse/ManageCourse';
import { ICourses } from 'type';

interface IProp {
  courses: ICourses;
}

const ManageCourses = ({courses}: IProp) => {
  
  return (
    <div>
      <h5>This is manage section</h5>
      {courses.map((course: ICourses) => (
        <ManageCourse key={course.title} course={course}></ManageCourse>
      ))}
    </div>
  );
};

export default ManageCourses;


