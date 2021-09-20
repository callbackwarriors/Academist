import type { NextPage } from 'next';
import Layout from '../components/Layout';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl text-yellow-600 font-mono font-bold bg-gray-600">Hello world</h1>
    </Layout>
  )
}

export default HomePage