import CourseDetails from "components/CourseDetails/CourseDetails";
import Layout from "components/utilities/Layout";
import { API_URL } from "config";

export default function courseDetails({ evt }: any) {

    return (
        <Layout>
            <CourseDetails evt={evt}></CourseDetails>
        </Layout>
    );
}

export  async function getServerSideProps({ query: { slug } }: any) {
    console.log(slug);
    console.log(`${API_URL}/courses?slug=${slug}`);
    
    
    const res = await fetch(`${API_URL}/courses?slug=${slug}`)

    
    const courses = await res.json()
    console.log('courses', courses);

    return {
        props: {
            evt: courses[0],
        },
    }
}
