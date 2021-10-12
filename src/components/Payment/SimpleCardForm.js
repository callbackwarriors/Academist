import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React from 'react';
import { useState,useContext } from 'react';
import { Store } from 'utils/Store';
import {axios} from "axios";
import Cookies from "js-cookie";
import Link from "next/link";

const SimpleCardForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)
    const { state, dispatch } = useContext(Store);
    const { cart: { cartItems }, userInfo,billingAddress, paymentInfo} = state;


    console.log('this is payment info from cookis',paymentInfo );


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null)
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handelPaymentSuccess(paymentMethod.id);
        }
    };



    const handelPaymentSuccess =async (paymentId)=>{
        const data = paymentId;
        dispatch({ type: "PAYMENT_DETAILS", payload: data });
        Cookies.set("paymentInfo", data);
      }

    return (
        <div className="container mt-5">
            <form  onSubmit={handleSubmit}>
                <CardElement className="paymentFrom" />
                <button className="paymentButton" type="submit" disabled={!stripe}>
                 Confirm Payment
                </button>
            </form>
            {
                paymentError && <p style={{color:'red'}}>{paymentError}</p>
            }
             {
                paymentSuccess && <p style={{color:'green'}}>Your Payment Was Successfully</p>
            }
        </div>
    );
};

export default SimpleCardForm;