import type { NextPage } from 'next';
import Image from 'next/image';
import Logo from '../assets/images/academist.svg';
import Hero from '../components/Home/Hero';
import Layout from '../components/Layout';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Hero/>
      <div className="container">
      <Image src={Logo}/>
      <h1>Heading one</h1>
      <h2>Heading two</h2>
      <h3>Heading three</h3>
      <h4>Heading four</h4>
      <h5>Heading five</h5>
      <h6>Heading six</h6>
      <p>Lorem <a href="#">ipsum dolor sit amet</a> consectetur adipisicing elit. Pariatur quasi distinctio nobis labore sapiente officiis culpa ratione, unde qui alias impedit ullam deleniti magnam voluptate porro debitis facere in quis.</p>
      <p>Probir from Bhola</p>
      </div>
    </Layout>
  )
}

export default HomePage