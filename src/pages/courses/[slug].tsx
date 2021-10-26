import CourseDetails from "components/CourseDetails/CourseDetails";
import Layout from "components/utilities/Layout";
import { ICourses } from "type";
import Courses from '../../models/Courses';
import db from '../../utils/db';

interface IProps {
  course: ICourses;
}


const courseDetails = (props: IProps) => {

  const { course } = props;
  if (!course) {
    return <Layout>
      <div className="container py-20 text-center">
        Loading...
      </div>
    </Layout>
  }

  return (
    <Layout title={course.title}>
      <CourseDetails course={course}></CourseDetails>
    </Layout>
  );
};

export default courseDetails;

export async function getServerSideProps(context: { params: any; }) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const course = await Courses.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      course: db.convertDocToObj(course),
    },
  };
}