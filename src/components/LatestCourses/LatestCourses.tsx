import { useEffect, useState } from 'react';
import Title from "../utilities/Title";
import LatestCourse from './LatestCourse';

const LatestCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCoursesData() {
      const response = fetch('http://localhost:5000/api/courses')
      const data = await (await response).json()
      setCourses(data)

    }
    fetchCoursesData()
  }, [])

  return (
    <section className="latest__courses section-padding">
      <div className="container">
        <Title subtitle="ROOF PARTY POLAROID" title="Master Cleanse Reliac Heirloom" description="Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table." />
      </div>
      <div className="container">
        <div className="flex flex-wrap">{courses.map(course => (<LatestCourse course={course} ></LatestCourse>))}</div>
      </div>
    </section>
  );
};

export default LatestCourses;