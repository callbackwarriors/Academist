import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Store } from 'utils/Store';

const Checkout = () => {
    const router = useRouter()
    const { state } = useContext(Store);
    const { userInfo } = state;
    if(!userInfo) {
      router.push('/login?redirect=/checkout')
    }
    return (
        <div>
            checkout
        </div>
    );
};

export default Checkout;