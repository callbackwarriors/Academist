import FeaturedTeacher from 'components/FeaturedTeacher/FeaturedTeacher';
import LatestCourses from 'components/LatestCourses/LatestCourses';
import Partner from 'components/Partner/Partner';
import Testimonial from 'components/Testimonial/Testimonial';
import Footer from 'components/utilities/Footer';
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
      <Partner/>
      <Footer/>
    </Layout>
  )
}

export default HomePage