import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
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

                        <div className='max-w-[1200px] mx-auto  '>
                            <div className='lg:flex md:flex  gap-10 p-10'>
                                <div>
                                    <img src={home.image} alt="" className='w-[700px] mx-auto rounded-md ' />
                                </div>
                                <div className=''>
                                    <p className='text-green-600 font-bold'>$1,059.00</p>
                                    <div className=' flex text-orange-300 mb-1'>
                                        <IoIosStar></IoIosStar>
                                        <IoIosStar></IoIosStar>
                                        <IoIosStar></IoIosStar>
                                        <IoIosStar></IoIosStar>
                                        <IoIosStar></IoIosStar>
                                    </div>
                                    <p>Waiting for winning a ready Duplex in Lalmatia? You just chose......</p>

                                    <h1 className='text-lg font-semibold'>Let Us Help You To Rent This 5500 Sq Ft Duplex Which Is Now Available In Lalmatia</h1>
                                    <div className='flex gap-2 mt-3'>
                                        <button className='bg-[#1697DA] px-6 rounded-md text-white font-semibold btn-sm'>Book Now</button>

                                        <button className='bg-[#1697DA] px-6 rounded-md text-white font-semibold btn-sm'>Details</button>

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
                    className='btn bg-orange-200 text-orange-600 font-bold border-none mb-5'>Load More.</button>
            </div>
        </div>
    );
};

export default AllHome;