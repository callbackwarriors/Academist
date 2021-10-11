import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Store } from 'utils/Store';
import Layout from "components/utilities/Layout";

const Checkout = () => {
    const router = useRouter()
    const { state } = useContext(Store);
    const { userInfo } = state;
    if(!userInfo) {
      router.push('/login?redirect=/checkout')
    }
    return (
        <Layout>
            
        </Layout>
    );
};

export default Checkout;