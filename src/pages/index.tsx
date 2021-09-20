import type { NextPage } from 'next';
import Layout from '../components/Layout';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <div className="container">
      <h1>Heading one</h1>
      <h2>Heading two</h2>
      <h3>Heading three</h3>
      <h4>Heading four</h4>
      <h5>Heading five</h5>
      <h6>Heading six</h6>
      <p>Lorem <a href="#">ipsum dolor sit amet</a> consectetur adipisicing elit. Pariatur quasi distinctio nobis labore sapiente officiis culpa ratione, unde qui alias impedit ullam deleniti magnam voluptate porro debitis facere in quis.</p>
      </div>
    </Layout>
  )
}

export default HomePage