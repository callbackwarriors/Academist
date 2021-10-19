import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_X2jogsHYgJQNw8Mxn1iYXZyM001TvFWmtv');

const Payment = ({handelPaymentSuccess}) => {
    return (
        <Elements  stripe={stripePromise} >
             <SimpleCardForm handelPayment={handelPaymentSuccess}></SimpleCardForm>  
        </Elements>
    );
};

export default Payment;