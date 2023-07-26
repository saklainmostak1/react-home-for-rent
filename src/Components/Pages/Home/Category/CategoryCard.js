import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../HomeCard/HomeCard.css'
import { FaStar } from 'react-icons/fa';


const CategoryCard = ({ categorie }) => {


    const { name, id, image, description } = categorie



    const [home, setHome]  = useState([])

    useEffect(() => {
    fetch(`https://home-for-rent-server.vercel.app/category/${id}`)
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

     <div>
         <div className='px-7'>
            <h1 className=" text-2xl mt-5 container mx-auto">Home {name}</h1>
            <div className='container mx-auto '>
                <div className=" grid  grid-cols-1  ">
                    <div className='flex justify-end'>
                        <Link to={`/allHome/${id}`} className='underline text-blue-600'>See All</Link>
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
         {/* <div >
            <Link to={`/allHome/${id}`}>
                <button className='btn w-full'>{name}</button>
            </Link>
        </div> */}




        {/* <div className="card m-10 shadow-xl image-full">
        <figure><img src={image} alt="" className='w-full'/></figure>
        <div className="card-body">
            <h2 className="text-center text-3xl my-5">{name}</h2>
            <p className='text-center'>{description}</p>
            <div className="card-actions justify-center">
                <Link to={`/allHome/${id}`}>
                    <button className="btn btn-primary mt-5 underline ">{name}</button>
                </Link>
            </div>
        </div>
    </div> */}
     </div>
       
    );
};

export default CategoryCard;