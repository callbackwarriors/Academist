import CourseDetails from "components/CourseDetails/CourseDetails";
import Layout from "components/utilities/Layout";
import { API_URL } from "config";
import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

export default function courseDetails({ evt }: any) {
    const router = useRouter()

    return (
        <Layout>
            <CourseDetails evt={evt}></CourseDetails>
        </Layout>
    );
};

// export default courseDetails;

export async function getStaticPaths() {
    const res = await fetch(`http://localhost:5000/api/courses`);
    const events = await res.json();

    const paths = events.map((evt: any) => ({
        params: { slug: evt._id },
    }));

    return {
        paths,
        fallback: true,
    };
}
// 61597ca74d0c193bf4547ec4 || 61598005c48fd96b3616e539
export async function getStaticProps({ params: { slug } }: any) {
    const res = await fetch(`http://localhost:5000/api/courses?slug=${slug}`);
    const events = await res.json();

    return {
        props: {
            evt: events[0],
        },
        revalidate: 1,
    };
}
