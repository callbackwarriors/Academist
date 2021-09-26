import Login from "components/Login/Login";
import Layout from "components/utilities/Layout";
import type { NextPage } from 'next';

const login: NextPage = () =>{
    return (
        <Layout>
          <Login/>  
        </Layout>
    );
};

export default login;