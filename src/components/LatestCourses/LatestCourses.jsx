

import Title from "../utilities/Title";
import LatestCourse from './LatestCourse';
const LatestCourses = ({data}) => {

  return (
    <section className="latest__courses section-padding">
      <div className="container">

        <Title subtitle="NEWLY ADDED COURSES AT ACADEMIST" title="Latest courses" description="" />
      </div>
      <div className="container">
        <div className="flex flex-wrap">
          {data?.slice(0, 3).map((course) => (
            <LatestCourse key={course.title} course={course}></LatestCourse>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCourses;
