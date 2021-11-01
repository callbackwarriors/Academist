import FeaturedTeacher from 'components/FeaturedTeacher/FeaturedTeacher';
import LargestCourse from 'components/LargestCourse/LargestCourse';
import LatestCourses from 'components/LatestCourses/LatestCourses';
import Partner from 'components/Partner/Partner';
import Testimonial from 'components/Testimonial/Testimonial';
import Hero from '../components/Home/Hero';
import Layout from '../components/utilities/Layout';
import Courses from '../models/Courses';
import db from '../utils/db';
const HomePage = (props) => {

  const {data} = props;
  // console.log('data', data );
  return (
    <Layout>
      <Hero/>
      <LatestCourses data={data}/>
      <Testimonial />
      <FeaturedTeacher />
      <LargestCourse/>
      <Partner/>
    </Layout>
  )
}

export default HomePage;


export async function getServerSideProps() {
  await db.connect();
  const courses = await Courses.find({}).lean();
  const data = JSON.parse(JSON.stringify(courses))
  await db.disconnect();
  return {
    props: {
      data,
    },
  };
}