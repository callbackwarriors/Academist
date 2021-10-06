import CategoryComponent from 'components/Category/Category';
import Footer from 'components/utilities/Footer';
import Layout from 'components/utilities/Layout';
import { NextPage } from 'next';


const category:NextPage = () => {
    return (
        <Layout>
            <CategoryComponent/>
            <Footer/>
        </Layout>
    );
};

export default category;