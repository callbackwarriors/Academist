import CartItem from 'components/Cart/CartItem';
import Layout from 'components/utilities/Layout';
import Link from 'next/link';
import React, { useContext } from 'react';
import { ICourses } from 'type';
import { Store } from 'utils/Store';


const AddCart = () => {
    const { state, dispatch } = useContext(Store);
    const {
        cart: { cartItems },
      } = state;

    return (
        <Layout>

            <div className="cart-head text-center">
                <div className="container">
                <h2> Your Shopping Cart</h2>    
                </div>      
            </div>
            <div className="cart-content container section-padding">
                <div className="cart-content__item">
                   <ul className="cart-course-list">

                    {cartItems.length == 0 ? (
                        <div className="py-20 text-xl ">Cart is empty. <Link href="/courses"><a className="bg-royal-blue hover:bg-royal-blue-800 text-white py-2 px-6 rounded">Go Courses Page</a></Link></div>
                    ) : 
                            cartItems.map((item: ICourses) => (
                                <CartItem item={item} key={item._id}/>
                            ))
                    }

                   </ul>
                </div>
                <div className="card-content__checkout lg:w-1/4 ">
                    <div className="bg-royal-blue-200  p-5">
                <div className="flex gap-3">

                    <h6 className="text-lg">Total ({cartItems.reduce((a: any, c: { quantity: any; }) => a + c.quantity, 0)}{' '}items):</h6> <span className="mb-2 text-2xl font-semibold"><sup>$</sup>
                    {cartItems.reduce((a: number, c: { quantity: number; price: number; }) => a + c.quantity * c.price, 0)}</span>

                    </div>
                    {/* <input className="w-full mt-4 mb-4 h-10 rounded-sm p-2" placeholder="Add Your Coupon"/> */}
                    <button className="bg-royal-blue hover:bg-royal-blue-800 text-white w-full h-10 text-xl font-semibold rounded-sm">Check out</button>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default AddCart;