import CartItem from 'components/Cart/CartItem';
import Layout from 'components/utilities/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { ICourses } from 'type';
import { Store } from 'utils/Store';


const AddCart = () => {
    const router = useRouter()
    const { state } = useContext(Store);
    const {
        cart: { cartItems }
    } = state;

    return (
        <Layout>

            <div className="text-center cart-head">
                <div className="container">
                    <h2> Your Shopping Cart</h2>
                </div>
            </div>
            <div className="container cart-content section-padding">
                <div className="cart-content__item">
                    <ul className="cart-course-list">

                        {cartItems.length == 0 ? (
                            <div className="py-20 text-xl ">Cart is empty. <Link href="/courses"><a className="px-6 py-2 text-white rounded bg-royal-blue hover:bg-royal-blue-800">Go Courses Page</a></Link></div>
                        ) :
                            cartItems.map((item: ICourses) => (
                                <CartItem item={item} key={item._id} />
                            ))
                        }
                    </ul>
                </div>
                <div className="card-content__checkout lg:w-1/4 ">
                    <div className="p-5 bg-royal-blue-200">
                        <div className="flex gap-3 p-3 mb-3 bg-white rounded shadow color-white">

                            <h6 className="m-0 text-lg ">Total ({cartItems.reduce((a: any, c: { quantity: any; }) => a + c.quantity, 0)}{' '}items):</h6> <h6 className="m-0 text-lg "><sup>$</sup>
                                {cartItems.reduce((a: number, c: { quantity: number; price: number; }) => a + c.quantity * c.price, 0)}</h6>
                        </div>
                        {/* <input className="w-full h-10 p-2 mt-4 mb-4 rounded-sm" placeholder="Add Your Coupon" /> */}
                        <button className="w-full h-10 text-xl font-semibold text-white rounded-sm bg-royal-blue hover:bg-royal-blue-800" onClick={() => router.push('/checkout')}>Check out</button>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default AddCart;