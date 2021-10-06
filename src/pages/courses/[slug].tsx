import CourseDetails from "components/CourseDetails/CourseDetails";
import Layout from "components/utilities/Layout";
import type { NextPage } from 'next';

const courseDetails: NextPage = () =>{
    return (
        <Layout>
         <CourseDetails></CourseDetails>
        </Layout>
    );
};

export default courseDetails;