import Checkout from "components/Checkout/Checkout";
import Layout from "components/utilities/Layout";
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Store } from 'utils/Store';


const checkout = () => {
    const router = useRouter()
    const { state } = useContext(Store);
    const { userInfo } = state;
    if (!userInfo) {
        router.push('/login')
    }
    return (
        <Layout>
            <div className="text-center cart-head">
                <div className="container">
                    <h2>Checkout</h2>
                </div>
            </div>
           <Checkout />
        </Layout>
    );
};

export default checkout;