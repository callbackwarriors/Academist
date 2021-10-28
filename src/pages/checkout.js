import Checkout from "components/Checkout/Checkout";
import Layout from "components/utilities/Layout";
import React from 'react';


const checkout = () => {
    
    
    return (
        <Layout>
            <div className="text-center cart-head">
                <div className="container">
                    <h2>Checkout</h2>
                </div>
            </div>
            <Checkout ></Checkout>
        </Layout>
    );
};

export default checkout;