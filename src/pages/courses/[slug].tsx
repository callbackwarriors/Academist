import CourseDetails from "components/CourseDetails/CourseDetails";
import Layout from "components/utilities/Layout";
import { API_URL } from "config";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";


export default function courseDetails({ evt }: any) {
    console.log('evt', evt);

    const router = useRouter()

    return (
        <Layout>
            <CourseDetails evt={evt}></CourseDetails>
        </Layout>
    );
};

// export default courseDetails;

// export async function getStaticPaths() {
//     const res = await fetch(`http://localhost:5000/api/courses`);
//     const courses = await res.json();

//     const paths = courses.map((evt: any) => ({
//         params: { slug: evt._id },
//     }));

//     return {
//         paths,
//         fallback: true,
//     };
// }

// export async function getStaticProps({ params: { slug } }: any) {
//     const res = await fetch(`http://localhost:5000/api/courses?slug=${slug}`);
//     const courses = await res.json();

//     return {
//         props: {
//             evt: courses[0],
//         },
//         revalidate: 1,
//     };
// }


export async function getServerSideProps({ query: { slug } }: any) {
    console.log(slug);

    const res = await fetch(`${API_URL}/courses?slug=${slug}`)
    const courses = await res.json()
    console.log('courses', courses);

    return {
        props: {
            evt: courses[0],
        },
    }
}