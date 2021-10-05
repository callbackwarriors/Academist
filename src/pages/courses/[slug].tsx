import CourseDetails from "components/CourseDetails/CourseDetails";
import Layout from "components/utilities/Layout";
import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import { ICourses } from 'type';

interface IProp {
    course: ICourses;
}

const courseDetails: NextPage = ({ course }: IProp) =>{
    const router = useRouter()
    console.log(item)
    return (
        <Layout>
         <CourseDetails></CourseDetails>
        </Layout>
    );
};

export default courseDetails;


export async function getServerSideProps({ query: { slug } }) {
    const res = await fetch(`http://localhost:5000/api/courses/?slug=${slug}`)
    const events = await res.json()
  
    return {
      props: {
        item: courses[0],
      },
    }
  }