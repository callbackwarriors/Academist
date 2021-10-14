import {
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import React, { useMemo } from "react";
import { useState, useContext } from "react";
import { Store } from "utils/Store";
import Cookies from "js-cookie";

const useOptions = () => {
  const options = useMemo(() => ({
    style: {
      base: {
        color: "gray",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  }));

  return options;
};

const SimpleCardForm = ({handelPayment}) => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
    userInfo,
    billingAddress,
    paymentInfo,
  } = state;

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    console.log("paymentMethod", paymentMethod);

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod);
      setPaymentError(null);
      handelPayment(paymentMethod);
    }
  };

  // const handelPaymentSuccess= async (paymentId) => {
  //   const data = paymentId;
  //   console.log("data", data);
  //   dispatch({ type: "PAYMENT_DETAILS", paymentMethod: data });
  //   Cookies.set("paymentInfo", data);
  // };

  return (
    <div className="container mt-5 ">
      <form onSubmit={handleSubmit} className="lg:w-6/12">
        <label>
          Card number
          <CardNumberElement
            options={options}
            className="py-2"
            onChange={(event) => {
              console.log("CardNumberElement [change]", event);
            }}
          />
        </label>
        <label>
          Expiration date
          <CardExpiryElement
            options={options}
            className="py-2"
            onChange={(event) => {
              console.log("CardNumberElement [change]", event);
            }}
          />
        </label>
        <label>
          CVC
          <CardCvcElement
            options={options}
            className="py-2"
            onChange={(event) => {
              console.log("CardNumberElement [change]", event);
            }}
          />
        </label>
        <button
          className="flex px-6 py-2 my-6 text-lg text-white bg-indigo-600 border-0 rounded cursor-pointer focus:outline-none hover:bg-aquamarine-800"
          type="submit"
          disabled={!stripe}
        >
          Confirm Payment
        </button>
      </form>
      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
      {paymentSuccess && (
        <p style={{ color: "green" }}>Your Payment Was Successfully</p>
      )}
    </div>
  );
};

export default SimpleCardForm;