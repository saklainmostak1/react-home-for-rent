
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeCard.css'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeCard = () => {

    const [home, setHome]  = useState([])

        useEffect(() => {
        fetch(`https://home-for-rent-server.vercel.app/allHome`)
            .then(Response => Response.json())
            .then(data => setHome(data))
    }, [])
    console.log(home);


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        

        <div className='px-7 '>
            <h1 className=" text-2xl mt-5 container mx-auto">All Home</h1>
            <div className='container mx-auto '>
                <div className=" grid  grid-cols-1  ">
                    <div className='flex justify-end'>
                        <Link to={'/all-services'} className='underline text-blue-600'>See All</Link>
                    </div>
                    <Slider className=''  {...settings}>
                        {home.slice(0, 6).map(item => (
                            <div className="card rounded-none shadow-xl">
                                <figure className="">
                                    <img src={item.image} alt="Shoes" className="w-[360px] h-[200px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-orange-500">{item.price} TAKA</h2>
                                    <div className='flex text-orange-300'>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                        <FaStar></FaStar>
                                    </div>
                                    <p>{item.name.slice(0, 15) + '...'}</p>

                                </div>
                            </div>

                        ))}

                    </Slider>
                </div>

            </div>
        </div>
        //         <div className='container mx-auto px-5'>
        // <div className='lg:flex md:flex max-w-[1000px] mx-auto gap-16'>
        //                 <div className='max-w-[500px]'>
        //                     <img className='rounded-md' src={img} alt="" />
        //                 </div>
        //                 <div className='max-w-[500px]'>
        //                 <div class="d-flex align-items-center">
        //                 <h6 class="font-bold mr-3 mt-2 text-[#79BF24]">$1,059.00</h6>

        //               </div>
        //                     <div className=' flex text-orange-300'>
        //                         <IoIosStar></IoIosStar>
        //                         <IoIosStar></IoIosStar>
        //                         <IoIosStar></IoIosStar>
        //                         <IoIosStar></IoIosStar>
        //                         <IoIosStar></IoIosStar>
        //                     </div>
        //                     <p>Waiting for winning a ready Duplex in Lalmatia? You just chose......</p>
        //                     <p className='font-semibold mt-3'>Let Us Help You To Rent This 5500 Sq Ft Duplex Which Is Now Available In Lalmatia</p>
        //                 </div>
        //             </div> 





        //         </div>
    );
};

export default HomeCard;