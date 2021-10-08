import { useRouter } from 'next/router';
import React from 'react';

const Checkout = () => {
    const router = useRouter()
    router.push('/login')
    return (
        <div>
            checkout
        </div>
    );
};

export default Checkout;