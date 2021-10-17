import CartItemTwo from 'components/Cart/CartItemTwo';
import Cookies from "js-cookie";
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { ICourses } from 'type';
import { Store } from 'utils/Store';
import Payment from "components/Payment/Payment"
import axios from 'axios';

const Checkout = () => {
    useEffect(() => {
        if (cartItems.length === 0) {
            router.push('/cart');
        }
    }, []);

    const router = useRouter()
    const { state, dispatch } = useContext(Store);
    const { cart: { cartItems }, userInfo } = state;
    console.log('userInfo', userInfo);
    
    const { billingAddress } = state;
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [show, setShow] = useState(true);
    const handlePaymentSuccess = async (paymentId: any) => {
        try {
            const { data } = await axios.post(
                '/api/orders/orders',
                {
                    phone: phone,
                    address: address,
                    paymentId,
                    userInfo,
                    // orderItems: cartItems,
                },
                {
                    headers: {
                        authorization: `Bearer ${userInfo.token}`,
                    },
                }
            )
            console.log('checkout_data', data);
            dispatch({ type: 'CART_CLEAR' });
            Cookies.remove('cartItems');
            // router.push(`/order/${data._id}`);
        } catch (err: any) {
            console.log(err.message);

        }
    }
    // TRY
    // const handlePaymentSuccess = (paymentId: any) => {

    //     const data = {
    //         userDetails: userInfo,
    //         phone: phone,
    //         address: address,
    //         paymentId,
    //         orderItems: cartItems,
    //     }
    //     console.log('checkout data', data);

    //     dispatch({ type: "BILLING_ADDRESS", payload: data });
    //     Cookies.set("billingAddress", data);
    // }


    return (
        <div>
            <div className="container cart-content section-padding">
                <div className="cart-content__item">
                    <h5>Select payment method</h5>


                    <div onClick={() => setShow(true)} className="flex items-center gap-3 mb-3">
                        <input type="radio" id="stripe" name="method" value="CSS" /> <label htmlFor="stripe">New Payment Card</label>
                    </div>
                    <div onClick={() => setShow(false)} className="flex items-center gap-3">
                        <input type="radio" id="paypal" name="method" value="Paypal" /> <label htmlFor="paypal">Paypal</label>
                    </div>
                    {show ?
                        <Payment handelPaymentSuccess={handlePaymentSuccess}></Payment>
                        : null}
                    <ul className="mt-12 cart-course-list">
                        <h5>Order details</h5>
                        {cartItems.length == 0 ? (
                            <div className="py-20 text-xl ">Cart is empty. <Link href="/courses"><a className="px-6 py-2 text-white rounded bg-royal-blue hover:bg-royal-blue-800">Go Courses Page</a></Link></div>
                        ) :
                            cartItems.map((item: ICourses) => (
                                <CartItemTwo item={item} key={item._id} />
                            ))
                        }
                    </ul>
                </div>
                <div className="card-content__checkout lg:w-1/3">
                    <div className="p-5 bg-royal-blue-200">
                        <div className="flex gap-3 p-3 mb-3 bg-white rounded shadow color-white">
                            <h6 className="m-0 text-lg ">Total ({cartItems.reduce((a: any, c: { quantity: any; }) => a + c.quantity, 0)}{' '}items):</h6> <h6 className="m-0 text-lg "><sup>$</sup>
                                {cartItems.reduce((a: number, c: { quantity: number; price: number; }) => a + c.quantity * c.price, 0)} </h6>
                        </div>

                        <div className="p-3 mb-3 bg-white rounded shadow color-white">
                            <h6>Billing Address</h6>
                            <label>Name:</label>
                            <input className="w-full px-4 py-3 mb-2 rounded focus:border-royal-blue" type="text" value={userInfo.name} />

                            <label>Email:</label>
                            <input className="w-full px-4 py-3 mb-2 rounded focus:border-royal-blue" type="text" value={userInfo.email} />

                            <label>Phone:</label>
                            <input className="w-full px-4 py-3 mb-2 rounded focus:border-royal-blue" onBlur={(e) => setPhone(e.target.value)} type="text" placeholder="Enter your Phone" />

                            <label>Address:</label>
                            <textarea className="w-full px-4 py-3 mb-2 rounded focus:border-royal-blue" onBlur={(e) => setAddress(e.target.value)} placeholder="Enter your Address" ></textarea>
                        </div>
                        {/* <input className="w-full h-10 p-2 mt-4 mb-4 rounded-sm" placeholder="Add Your Coupon" /> */}
                        {/* <button className="w-full h-10 text-xl font-semibold text-white rounded-sm bg-royal-blue hover:bg-royal-blue-800" onClick={orderHandler}>Order Place</button> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;