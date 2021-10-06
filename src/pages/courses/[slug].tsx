import CourseDetails from "components/CourseDetails/CourseDetails";
import Layout from "components/utilities/Layout";
import { useRouter } from 'next/router';
import data from '../../utils/data';

const courseDetails = () =>{
    const router = useRouter();
    const {slug} = router.query;
    const course = data.courses.find((a) => a.slug === slug);

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