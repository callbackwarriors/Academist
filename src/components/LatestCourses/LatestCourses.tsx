import { API_URL } from 'config';
import { useEffect, useState } from 'react';
import { ICourses } from 'type';
import Title from "../utilities/Title";
import LatestCourse from './LatestCourse';


const LatestCourses = () => {
  const [courses, setCourses] = useState<ICourses[]>([]);

  useEffect(() => {
    async function fetchCoursesData() {
      const response = fetch(`${API_URL}/courses`)
      const data = await (await response).json()
      setCourses(data.slice(0, 3))
    }
    fetchCoursesData()
  }, [])

  return (
    <section className="latest__courses section-padding">
      <div className="container">
        <Title subtitle="ROOF PARTY POLAROID" title="Master Cleanse Reliac Heirloom" description="Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table." />
      </div>
      <div className="container">
        <div className="flex flex-wrap">
          {courses.map(course => (
            <LatestCourse key={course._id} course={course} ></LatestCourse>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCourses;