import React from 'react';
import { FaStar } from 'react-icons/fa';

const ShowReview = () => {
    return (
        <div className='container mx-auto'>
            <div className='m-5 grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                
                <div className="card m-10 bg-emerald-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src='' alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name : </h2>
                        <p className='mt-5 text-xl'>Email : <br /></p>
                        <p>Review Message: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam velit tempora molestias sapiente quidem ratione provident fuga similique aut vitae.</p>
                        <div className='flex text-orange-300'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                    </div>
                </div>

                <div className="card m-10 bg-emerald-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src='' alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name : </h2>
                        <p className='mt-5 text-xl'>Email : <br /></p>
                        <p>Review Message: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam velit tempora molestias sapiente quidem ratione provident fuga similique aut vitae.</p>
                        <div className='flex text-orange-300'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                    </div>
                </div>

                <div className="card m-10 bg-emerald-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src='' alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name : </h2>
                        <p className='mt-5 text-xl'>Email : <br /></p>
                        <p>Review Message: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam velit tempora molestias sapiente quidem ratione provident fuga similique aut vitae.</p>
                        <div className='flex text-orange-300'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                    </div>
                </div>



        
              
            </div>
        </div>
    );
};

export default ShowReview;