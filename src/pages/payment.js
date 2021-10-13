import Payment from 'components/Payment/Payment';
import Layout from "components/utilities/Layout";
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Store } from 'utils/Store';


const payment = () => {
    const router = useRouter()
    const { state } = useContext(Store);
    const { userInfo } = state;
    if (!userInfo) {
        router.push('/login')
    }
    return (
       
        <Layout>
        <Payment></Payment>
     </Layout>
        
    );
};

export default payment;