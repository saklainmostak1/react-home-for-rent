import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";

const AllHomeDetails = () => {


    const { id } = useParams()
    console.log(id);


    const [homes, setHomes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5001/allHome/${id}`)
            .then(Response => Response.json())
            .then(data => setHomes(data))
    }, [id])


    console.log(homes);


    return (
        <div>
            <div className='max-w-[1440px] mx-auto  '>
                <div className='lg:flex md:flex  gap-10 p-8 lg:p-10 md:px-10'>
                    <div>
                        <img src={homes.image} alt="" className='w-[700px] mx-auto rounded-md h-full ' />
                    </div>

                    <div className='lg:w-[677px] mx-auto md:w-full mt-5 lg:mt-0 md:mt-0 '>
                        <h2 className='text-2xl font-semibold mb-3'>Let Us Help You To Rent/Buy This {homes.name} Which Is Now Available Now</h2>
                        <p className='text-green-600 font-bold'>{homes.price} Taka</p>
                        <div className=' flex text-orange-300 mb-3 mt-2'>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                            <IoIosStar></IoIosStar>
                        </div>
                        <p >{homes.description}</p>

                        <div className='flex gap-2 mt-3 '>
                            <Link to={`/check-out-page/${homes._id}`}>

                                <button className='bg-[#1697DA] px-6 rounded-sm text-white font-semibold btn-sm'>Book Now</button>
                            </Link>
                            <Link to={`/all-Home/reviews/${homes._id}`}>

                                <button className='bg-[#1697DA] px-6 rounded-sm text-white font-semibold btn-sm'>Add Review</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className='max-w-[1440px] mx-auto '>
                <div class="mt-5">
                    <div class="card border-primary px-8">

                        <button class="border-0 bg-blue-500 p-2 text-white ">More Information</button>
                    </div>
                    <div class="card-body">

                        <p class="card-text">
                            {homes.description}
                        </p>
                        <br />
                        <p>{homes.more_description}</p>
                        <br />
                        <p>{homes.additional_info}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AllHomeDetails;