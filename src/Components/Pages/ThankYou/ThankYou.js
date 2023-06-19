import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';

const ThankYou = () => {

    const {user} = useContext(AuthContext)


    return (
        <div>
            <div className='mt-[-22px]'>
                <progress className="progress progress-success w-[100%] bg-green-500 rounded-none" value="0" max="100"></progress>
            </div>

            <div className='container mx-auto p-5'>

                <div className='mt-10'>
                    <div className='text-center text-[#4CACDE] font-semibold'>
                        <p>Thank You!</p>
                    </div>
                    <div className='text-center text-4xl font-bold text-[#15396D] mt-5'>
                        <h1 >Your order was completed successfully.</h1>
                    </div>
                    <div className='text-center mt-5 mb-8 max-w-[600px] mx-auto'>
                        <p>We sent an email to <strong>{user?.email}</strong> with your order confirmation and receipt. if the email hasn’t arrived, please check your spam folder to see if the email was routed there.</p>
                    </div>
                    <div className='text-center mb-10 max-w-[400px] mx-auto'>
                        <Link to='/'>
                            <button className=' btn w-full bg-[#1697DA] border-none hover:bg-[#55a377]'>Back To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;