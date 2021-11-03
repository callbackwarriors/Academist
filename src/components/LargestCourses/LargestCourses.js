import LargestCourse from "components/LargestCourse/LargestCourse";
import Title from "components/utilities/Title";
import Link from "next/link";

const LargestCourses = ({ data }) => {
  const prichardCurse = data.filter((course) => course?.prichard === true);

  return (
    <div className="largestCourse">
      <Title
        subtitle="GO AT YOUR OWN PACE"
        title="The World’s Largest Selection Of Courses"
        description=""
      />
      <div className="container grid-cols-2 gap-8 sm:grid ">
        {prichardCurse?.slice(0, 4).map((course) => (
          <LargestCourse key={course._id} course={course} />
        ))}
      </div>

      <Link href="/courses">
        <a>
          <button className="largestCourse__detailsButton">
            View All Course
          </button>
        </a>
      </Link>
    </div>
  );
};

export default LargestCourses;
