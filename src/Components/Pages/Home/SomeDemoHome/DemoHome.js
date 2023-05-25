import React from 'react';
import img from '../../../img/download-23.webp'
import img2 from '../../../img/istockphoto-1436217023-170667a.jpg'
import img3 from '../../../img/photo-1570129477492-45c003edd2be.jpg'
import { IoIosStar } from "react-icons/io";

const DemoHome = () => {

    const demoCard = [
        {
            _id: 1,
            img: img,
            price: 1059,
            name: 'Let Us Help You To Rent This 5500 Sq Ft Duplex Which Is Now Available In Lalmatia',
            text: 'Waiting for winning a ready Duplex in Lalmatia? You just chose......'

        },
        {
            _id: 2,
            img: img,
            price: 1059,
            name: 'Let Us Help You To Rent This 5500 Sq Ft Duplex Which Is Now Available In Lalmatia',
            text: 'Waiting for winning a ready Duplex in Lalmatia? You just chose......'

        },
        {
            _id: 3,
            img: img,
            price: 1059,
            name: 'Let Us Help You To Rent This 5500 Sq Ft Duplex Which Is Now Available In Lalmatia',
            text: 'Waiting for winning a ready Duplex in Lalmatia? You just chose......'

        },
    ]


    return (
        <div className='mt-5'>
            <h1 className='text-3xl font-bold text-center'>Some Demo Of Our House</h1>

            <div className='max-w-[1200px] mx-auto  '>
                <div className='lg:flex md:flex  gap-10 p-10'>
                    <div>
                        <img src={img} alt="" className='w-[700px] mx-auto rounded-md ' />
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
            <div className='max-w-[1200px] mx-auto  '>
                <div className='lg:flex md:flex flex-row-reverse gap-10 p-10'>
                    <div>
                        <img src={img2} alt="" className='w-[700px] mx-auto rounded-md ' />
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
            <div className='max-w-[1200px] mx-auto  '>
                <div className='lg:flex md:flex  gap-10 p-10'>
                    <div>
                        <img src={img3} alt="" className='w-[700px] mx-auto rounded-md ' />
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

         

        



            {/* <div className='max-w-[1000px] mx-auto mt-5 container'>

            <div className='lg:flex md:flex lg:ml-5 md:p-10'>
                <div>
                    <img src={img} alt="" className='w-[900px] mx-auto rounded-md p-10 lg:p-0 md:p-0' />
                </div>
                <div className='ml-6 px-5'>
                    <p className='text-green-600 font-bold'>$1,059.00</p>
                    <p>Waiting for winning a ready Duplex in Lalmatia? You just chose......</p>

                    <h1 className='text-lg font-semibold'>Let Us Help You To Rent This 5500 Sq Ft Duplex Which Is Now Available In Lalmatia</h1>
                </div>
            </div>
        </div> */}



        </div>
    );
};

export default DemoHome;