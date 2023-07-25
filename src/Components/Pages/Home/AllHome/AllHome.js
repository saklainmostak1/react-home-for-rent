import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";

const AllHome = () => {

    const allHome = useLoaderData()
    console.log(allHome);
    const [visible, setVisible] = useState(3)

    const showMoreProducts = () => {
        setVisible((preValue) => preValue + 3)
    }

    



    return (
        <div>
            <div className='mt-5'>

                {
                    allHome.slice(0, visible).map(home =>

                        <div className='max-w-[1300px] mx-auto  '>
                            <div className='lg:flex md:flex  gap-10 p-8 lg:p-10 md:px-10'>
                                <div>
                                    <img src={home.image} alt="" className='w-[700px] mx-auto rounded-md h-full  ' />
                                </div>
                                <div className='lg:w-[677px] mx-auto md:w-full mt-5 lg:mt-0 md:mt-0'>
                                    <p className='text-green-600 font-bold'>{home.price} Taka</p>
                                    <div className=' flex text-orange-300 mb-1 mt-2'>
                                        <IoIosStar></IoIosStar>
                                        <IoIosStar></IoIosStar>
                                        <IoIosStar></IoIosStar>
                                        <IoIosStar></IoIosStar>
                                        <IoIosStar></IoIosStar>
                                    </div>
                                    <p>{home.description.slice(0, 300) + '...'}</p>

                                    <h2 className='text-2xl font-semibold mt-2'>Let Us Help You To Rent/Buy This {home.name} Which Is Now Available Now</h2>

                                    <div className='flex gap-2 mt-3'>
                                        <Link to={`/check-out-page/${home._id}`}>
                                        
                                        <button className='bg-[#1697DA] px-6 rounded-sm text-white font-semibold btn-sm'>Book Now</button>
                                        </Link>

                                        <Link to={`/allHome/details/${home._id}`}>
                                            <button className='bg-[#1697DA] px-6 rounded-sm text-white font-semibold btn-sm'>Details</button>

                                        </Link>

                                    </div>
                                       
                                </div>

                            </div>
                        </div>


                    )
                }



            </div>
            <div className='flex justify-center mt-5'>

                <button

                    onClick={showMoreProducts}
                    className='btn bg-orange-200 text-orange-600 font-bold border-none mb-5 rounded-sm btn-sm'>Load More.....</button>
            </div>
        </div>
    );
};

export default AllHome;