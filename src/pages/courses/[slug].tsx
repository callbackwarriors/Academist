import CourseDetails from "components/CourseDetails/CourseDetails";
import Layout from "components/utilities/Layout";
import Courses from '../../models/Courses';
import db from '../../utils/db';



const courseDetails = (props) =>{

    const { course } = props;
    if(!course) {
        return <Layout>
         <div className="container py-20 text-center">
         Loading...
         </div>
       </Layout>
    }

    return (
        <Layout title={course.name}>
         <CourseDetails course={course}></CourseDetails>
        </Layout>
    );
};

export default courseDetails;



export async function getServerSideProps(context) {
    const {params} = context;
    const {slug} = params;
    await db.connect();
    const course = await Courses.findOne({slug}).lean();
    await db.disconnect();
    return {
      props: {
        course: db.convertDocToObj(course),
      },
    };
  }