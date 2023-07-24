import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const CheckoutForm = ({ payments }) => {


    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("")
    const [processing, setProcessing] = useState(false)
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')


    const { price, name, email, _id, productName, image } = payments
    console.log(payments)

    const stripe = useStripe()
    const elements = useElements()


    useEffect(() => {
        fetch("http://localhost:5001/create-payment-intent", {
            method: "POST",
            headers: {
                "content-Type": "application/json",

            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);



    const handleSubmit = async (event) => {

        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,

                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === 'succeeded') {
            setSuccess('Payment SuccessFully')
            setTransactionId(paymentIntent.id)

            const payment = {

                price,
                transactionId: paymentIntent.id,
                email,
                OrderId: _id,
                productName,
                image
            }
            fetch('http://localhost:5001/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                   
                },
                body: JSON.stringify(payment)
            })
                .then(Response => Response.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Payment SucessFully')
                        setTransactionId(paymentIntent.id)
                        toast.success('payment sucessfully')
                    }
                })
        }
        setProcessing(false)
    }


    return (

        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-primary mt-4 btn-sm' disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your TransactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;