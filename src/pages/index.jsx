import FeaturedTeacher from 'components/FeaturedTeacher/FeaturedTeacher';
import LargestCourses from 'components/LargestCourses/LargestCourses';
import LatestCourses from 'components/LatestCourses/LatestCourses';
import Partner from 'components/Partner/Partner';
import Testimonial from 'components/Testimonial/Testimonial';
import Hero from '../components/Home/Hero';
import Layout from '../components/utilities/Layout';
import Course from '../models/postCourse';
import db from '../utils/db';
const HomePage = (props) => {
  const {data} = props;
  return (
    <Layout>
      <Hero/>
      <LatestCourses data={data}/>
      <Testimonial />
      <FeaturedTeacher />
      <LargestCourses data={data}/>
      <Partner/>
    </Layout>
  )
}

export default HomePage;


export async function getServerSideProps() {
  await db.connect();
  const courses = await Course.find({}).lean();
  const data = JSON.parse(JSON.stringify(courses))
  await db.disconnect();
  return {
    props: {
      data,
    },
  };
}