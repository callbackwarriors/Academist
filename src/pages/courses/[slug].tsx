import CourseDetails from "components/CourseDetails/CourseDetails";
import Layout from "components/utilities/Layout";
import { ICourses } from "type";
import Course from '../../models/postCourse';
import db from '../../utils/db';

interface IProps {
  course: ICourses;
}


const courseDetails = (props: IProps) => {
  const { singleCourse }: any = props;

  if (!singleCourse) {
    return <Layout>
      <div className="container py-20 text-center">
        Loading...
      </div>
    </Layout>
  }

  return (
    <Layout title={singleCourse.title}>
      <CourseDetails course={singleCourse}></CourseDetails>
    </Layout>
  );
};

export default courseDetails;

export async function getServerSideProps(context: { params: any; }) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const course = await Course.findOne({ slug }).lean();
  const singleCourse = JSON.parse(JSON.stringify(course))
  await db.disconnect();
  return {
    props: {
      singleCourse,
    },
  };
}