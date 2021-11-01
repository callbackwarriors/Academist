

import Title from "../utilities/Title";
import LatestCourse from './LatestCourse';
const LatestCourses = ({data}) => {

  return (
    <section className="latest__courses section-padding">
      <div className="container">

        <Title subtitle="ROOF PARTY POLAROID" title="Master Cleanse Reliac Heirloom" description="Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table." />
      </div>
      <div className="container">
        <div className="flex flex-wrap">
          {data.slice(0, 3).map((course) => (
            <LatestCourse key={course.title} course={course}></LatestCourse>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCourses;
