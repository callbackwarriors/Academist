import CourseDetails from "components/CourseDetails/CourseDetails";
import Layout from "components/utilities/Layout";
import { API_URL } from "config";
import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

export default function courseDetails({ evt }: any) {
    const router = useRouter();
    const id = router.query;

    const [coursesId, setCoursesId] = useState({});

    console.log('this is unique id', id)

    useEffect(() => {
        async function fetchCoursesData() {
            const response = fetch(`http://localhost:5000/api/courses/${id}`)
            const data = await (await response).json()
            setCoursesId(data)
        }
        fetchCoursesData()
    },[])

    console.log('courses',coursesId );

    return (
        <Layout>
            <CourseDetails evt={evt}></CourseDetails>
        </Layout>
    );
};



export async function getServerSideProps({ query: { slug } }: any) {
    const res = await fetch(`http://localhost:5000/api/courses?slug=${slug}`)
    const events = await res.json()
     console.log("this is responso",res)
     console.log("this is event",events)
    return {
        props: {
            evt: events[3],
        },
    }
}



// export default courseDetails;

// export async function getStaticPaths() {
//     const res = await fetch(`http://localhost:5000/api/courses`);
//     const events = await res.json();

//     const paths = events.map((evt: any) => ({
//         params: { slug: evt._id },
//     }));

//     return {
//         paths,
//         fallback: true,
//     };
// }

// export async function getStaticProps({ params: { slug } }: any) {
//     const res = await fetch(`http://localhost:5000/api/courses?slug=${slug}`);
//     const events = await res.json();

//     return {
//         props: {
//             evt: events[0],
//         },
//         revalidate: 1,
//     };
// }

//888888888888888888888888888888888888888888888888888888888888888

// export async function getServerSideProps({ query: { slug } }: any) {
//     const res = await fetch(`http://localhost:5000/api/courses?slug=${slug}`)
//     const events = await res.json()

//     return {
//         props: {
//             evt: events[0],
//         },
//     }
// }




//******************* */




// export async function getServerSideProps({ query: { slug } }: any) {
//     const res = await fetch(`http://localhost:5000/api/courses?slug=${slug}`)
//     const events = await res.json()

//     return {
//         props: {
//             evt: events[0],
//         },
//     }
// }