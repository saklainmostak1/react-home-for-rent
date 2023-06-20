import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';




const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

console.log(stripePromise);

const Payment = () => {


    const { id } = useParams()


    const { data: payments = [], isLoading, refetch
    } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5001/orders/${id}`)
            const data = await res.json()
            return data
        }
    })
    console.log(payments);


    return (

        <div>

            <h2 className='text-3xl  mb-5'>Payment</h2>
            <h3 className='text-xl'>Payment <strong>  {payments.price} TK </strong>  for {payments.productName}</h3>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        payments={payments}
                    />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;