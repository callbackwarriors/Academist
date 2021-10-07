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
            <div className="cart-content container mb-24">
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
                <div className="card-content__checkout  bg-royal-blue-200 w-1/4 py-10 px-5 mt-8 h-72">
                    <h5>Total Price </h5>
                    <div className="flex justify-between">
                    <span className="mb-2 text-2xl font-semibold">$125</span>
                    <span className="text-xl text-gray-500"> 50% off $225</span>
                    </div>
                    <input className="w-full mt-4 mb-4 h-10 rounded-sm p-2" placeholder="Add Your Coupon"/>
                    <button className="bg-royal-blue hover:bg-royal-blue-800 text-white w-full h-10 text-xl font-semibold rounded-sm">Check out</button>
                    
                </div>
            </div>

        </Layout>
    );
};

export default AddCart;