import Image from 'next/image';
import Footer from 'components/Footer/Footer';
import Partner from 'components/Partner/Partner';

import FeaturedTeacher from 'components/FeaturedTeacher/FeaturedTeacher';
import Testimonial from 'components/Testimonial/Testimonial';

import type { NextPage } from 'next';
import Logo from '../assets/images/academist.svg';
import Hero from '../components/Home/Hero';
import Layout from '../components/Layout';
import LatestCourses from 'components/LatestCourses';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Hero/>
      <Image src={Logo}/>
      <LatestCourses/>
      <Testimonial />
      <FeaturedTeacher></FeaturedTeacher>
      <Partner/>
      <Footer/>
    </Layout>
  )
}

export default HomePage