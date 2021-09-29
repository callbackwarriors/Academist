import FeaturedTeacher from 'components/FeaturedTeacher/FeaturedTeacher';
import LargestCourse from 'components/LargestCourse/LargestCourse';
import LatestCourses from 'components/LatestCourses/LatestCourses';
import Partner from 'components/Partner/Partner';
import Testimonial from 'components/Testimonial/Testimonial';
import type { NextPage } from 'next';
import Hero from '../components/Home/Hero';
import Layout from '../components/utilities/Layout';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Hero/>
      <LatestCourses/>
      <Testimonial />
      <FeaturedTeacher></FeaturedTeacher>
      <LargestCourse/>
      <Partner/>
    </Layout>
  )
}

export default HomePage