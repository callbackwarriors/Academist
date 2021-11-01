import CourseDetails from "components/CourseDetails/CourseDetails";
import Layout from "components/utilities/Layout";
import { ICourses } from "type";
import Courses from '../../models/Courses';
import db from '../../utils/db';

interface IProps {
  course: ICourses;
}


const courseDetails = () => {
  // console.log('props', props);
  
  // const { singleCourse } = props;
  // if (!singleCourse) {
  //   return <Layout>
  //     <div className="container py-20 text-center">
  //       Loading...
  //     </div>
  //   </Layout>
  // }

  return (
    <div>Safawat Vai</div>
    // <Layout title={course.title}>
    //   <CourseDetails course={course}></CourseDetails>
    // </Layout>
  );
};

export default courseDetails;

// export async function getServerSideProps(context: { params: any; }) {
//   const { params } = context;
//   const { slug } = params;
//   await db.connect();
//   const course = await Courses.findOne({ slug }).lean();
//   const singleCourse = JSON.parse(JSON.stringify(course))
//   await db.disconnect();
//   return {
//     props: {
//       singleCourse,
//     },
//   };
// }