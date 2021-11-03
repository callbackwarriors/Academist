import LargestCourses from 'components/LargestCourses/LargestCourses';
import LatestCourses from 'components/LatestCourses/LatestCourses';
import Partner from 'components/Partner/Partner';
import Testimonial from 'components/Testimonial/Testimonial';
import FeaturedInstructors from '../components/FeaturedTeacher/FeaturedInstructors';
import Hero from '../components/Home/Hero';
import Layout from '../components/utilities/Layout';
import Course from '../models/postCourse';
import User from '../models/User';
import db from '../utils/db';
const HomePage = (props) => {
  const {data, user} = props;

  return (
    <Layout>
      <Hero/>
      <LatestCourses data={data}/>
      <Testimonial />
      <FeaturedInstructors user={user} />
      <LargestCourses data={data}/>
      <Partner/>
    </Layout>
  )
}

export default HomePage;


export async function getServerSideProps() {
  await db.connect();
  const courses = await Course.find({}).lean();
  const user = await User.find({}).lean();
  const data = JSON.parse(JSON.stringify(courses))
  await db.disconnect();
  return {
    props: {
      data,
      user: user.map(db.convertDocToObj),
    },

  };
}
