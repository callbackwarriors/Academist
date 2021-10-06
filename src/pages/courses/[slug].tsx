import CourseDetails from "components/CourseDetails/CourseDetails";
import Layout from "components/utilities/Layout";
import { useRouter } from 'next/router';
import { ICourses } from 'type';
import data from '../../utils/data';
interface IProps {
    course: ICourses,
}
const courseDetails = () =>{
    const router = useRouter();
    const {slug} = router.query;
    const course = data.courses.find((a) => a.slug === slug);

    return (
        <Layout>
         <CourseDetails></CourseDetails>
        </Layout>
    );
};

export default courseDetails;