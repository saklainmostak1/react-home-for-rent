import React from 'react';
import img from '../../../img/banner3.jpg'

const WhatWeSay = () => {
    return (

        <div className='mt-8'>
            <h1 className='text-2xl text-center'>Our Best Agent</h1>
            <div className='container mx-auto'>
                <div className='grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Jordan Smith</h2>
                            <p>Expart Agent</p>

                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Sandra Brown</h2>
                            <p>Sale Agent</p>

                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Susan Mendelson</h2>
                            <p>Area Agent</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeSay;