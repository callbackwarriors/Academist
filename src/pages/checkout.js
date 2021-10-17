import Checkout from "components/Checkout/Checkout";
import Layout from "components/utilities/Layout";
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from 'utils/Store';


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
            <div className="text-center cart-head">
                <div className="container">
                    <h2>Checkout</h2>
                </div>
            </div>
           <Checkout></Checkout>
        </Layout>
    );
};

export default checkout;