import CartItemTwo from 'components/Cart/CartItemTwo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { ICourses } from 'type';
import { Store } from 'utils/Store';
import Cookies from "js-cookie";

const Checkout = () => {

    const router = useRouter()
    const { state, dispatch } = useContext(Store);
    const { cart: { cartItems }, userInfo} = state;
    const {billingAddress } = state;
    const [ phone, setPhone ] = useState('');
    const [ address, setAddress ] = useState('');

    const orderHandler = () => {
          const data ={
              phone: phone,
              address: address,
          } 
          dispatch({ type: "BILLING_ADDRESS", payload: data });
          Cookies.set("billingAddress", data);
          router.push('/payment')
    }
 
    return (
        <div>
            <div className="container cart-content section-padding">
                <div className="cart-content__item">
                    <ul className="cart-course-list">
                        {cartItems.length == 0 ? (
                            <div className="py-20 text-xl ">Cart is empty. <Link href="/courses"><a className="px-6 py-2 text-white rounded bg-royal-blue hover:bg-royal-blue-800">Go Courses Page</a></Link></div>
                        ) :
                            cartItems.map((item: ICourses) => (
                                <CartItemTwo item={item} key={item._id} />
                            ))
                        }
                    </ul>
                </div>
                <div className="card-content__checkout lg:w-1/4 ">
                    <div className="p-5 bg-royal-blue-200">
                        <div className="flex gap-3 p-3 mb-3 bg-white rounded shadow color-white">
                            <h6 className="m-0 text-lg ">Total ({cartItems.reduce((a: any, c: { quantity: any; }) => a + c.quantity, 0)}{' '}items):</h6> <h6 className="m-0 text-lg "><sup>$</sup>
                                {cartItems.reduce((a: number, c: { quantity: number; price: number; }) => a + c.quantity * c.price, 0)} </h6>
                        </div>

                        <div className="flex gap-3 p-3 mb-3 bg-white rounded shadow color-white">
                            <label>Name:</label>
                            <input type="text" value={userInfo.name} />
                        </div>

                        <div className="flex gap-3 p-3 mb-3 bg-white rounded shadow color-white">
                            <label>Email:</label>
                            <input type="text" value={userInfo.email} />
                        </div>

                        <div className="flex gap-3 p-3 mb-3 bg-white rounded shadow color-white">
                            <label>Phone:</label>
                            <input  onBlur={(e) => setPhone(e.target.value)} type="text" placeholder="Enter your Phone" />
                        </div>

                        <div className="flex gap-3 p-3 mb-3 bg-white rounded shadow color-white">
                            <label>Address:</label>
                            <input  onBlur={(e) => setAddress(e.target.value)}   type="text" placeholder="Enter your Address" />
                        </div>
                        {/* <input className="w-full h-10 p-2 mt-4 mb-4 rounded-sm" placeholder="Add Your Coupon" /> */}
                        <button className="w-full h-10 text-xl font-semibold text-white rounded-sm bg-royal-blue hover:bg-royal-blue-800" onClick={orderHandler}>Order Place</button>
         
                    </div>
                </div>
            </div>
             
            <div>
               
            </div>

        </div>
    );
};

export default Checkout;