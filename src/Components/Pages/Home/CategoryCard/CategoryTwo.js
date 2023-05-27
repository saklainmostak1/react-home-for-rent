import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import img from '../../../img/download.jpg'

const CategoryTwo = () => {
  

    const [homes, setHomes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5001/allHome`)
            .then(Response => Response.json())
            .then(data => setHomes(data))
    }, [])


    console.log(homes);
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
       
        <div className='container mx-auto '>
            <div className=" grid  grid-cols-1 mt-5 ">
                <div className='flex justify-end'>
                    <Link to={'/all-services'} className='underline text-blue-600'>See All</Link>
                </div>
                <Slider className=''  {...settings}>
                    {homes.slice(0, 6).map(item => (
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
    );
};

export default CategoryTwo;