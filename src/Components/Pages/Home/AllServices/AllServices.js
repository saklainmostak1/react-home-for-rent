import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import img from '../../../img/download.jpg'

const AllServices = () => {



    const [homes, setHomes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5001/allHome`)
            .then(Response => Response.json())
            .then(data => setHomes(data))
    }, [])


    console.log(homes);


    const [visible, setVisible] = useState(3)

    const showMoreProducts = () => {
        setVisible((preValue) => preValue + 3)
    }

    const [loading, setLoading] = useState(false)
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }, [])


    return (
        <div>

            <div className=''>

                {
                      loading ? 
                      <button className="btn loading m-10 ">loading</button>
                      :
                    homes.slice(0, visible).map(home =>

                        <div className='max-w-[1300px] mx-auto  '>
                            <div className='lg:flex md:flex  gap-10 p-8 lg:p-10 md:px-10'>
                                <div>
                                    <img src={home.image} alt="" className='w-[700px] mx-auto rounded-md h-full' />
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

                                    <div className='flex gap-2 mt-3 '>
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
                    className='btn bg-orange-200 text-orange-600 font-bold border-none mb-5 btn-sm rounded-sm'>Load More....</button>
            </div>
            {/* <div className='max-w-[1200px] mx-auto  '>
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
                        </div> */}
        </div>
    );
};

export default AllServices;