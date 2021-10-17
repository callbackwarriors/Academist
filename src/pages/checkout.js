import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from 'utils/Store';
import Layout from "components/utilities/Layout";
import Checkout from "components/Checkout/Checkout";


const checkout = () => {
    

    const [email, setUser] = useState(null)

    // fetch data
    useEffect(() => {
      const value = localStorage.getItem('email');
      // const user = !!value ? JSON.parse(value) : undefined;
      setUser(value)
    }, []);
    
    const router = useRouter()
    const { state } = useContext(Store);
    const { userInfo } = state;
    if (!userInfo) {
        router.push('/login?redirect=/checkout')
    }
    return (
        <Layout>
           <Checkout></Checkout>
        </Layout>
    );
};

export default checkout;