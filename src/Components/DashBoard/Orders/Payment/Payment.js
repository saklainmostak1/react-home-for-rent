import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../CheckOut/CheckoutForm';
// import CheckoutForm from './CheckoutForm';






const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)

const Payment = () => {


    const payments = useLoaderData()

    console.log(payments)


    return (

        <div>

            <h2 className='text-3xl  mb-5'>Payment</h2>
            <h3 className='text-xl'>Payment <strong>  {payments.price} TK </strong>  for {payments.productName}</h3>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    payments={payments}
                    />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;