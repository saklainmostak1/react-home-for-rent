import React from 'react';
import img from '../../../img/download-23.webp'
import { IoIosStar } from "react-icons/io";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeCard.css'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeCard = () => {
    const cardData = [
        {
            name: "Gerber Unisex-Baby Onesies Bodysuit Multi Pack",
            image: img,
            price: '$250.00'
        },
        {
            name: "Calvin Klein Women's Scuba Sleeveless Princess Seamed Sheath Dress",
            image: img,
            price: '$350.00'
        },
        {
            name: "SUNGAIT Ultra Lightweight Rectangular Polarized Sunglasses UV400 Protection",
            image: img,
            price: '$450.00'
        },
        {
            name: "HP Stream 9VK97UA#ABA 14 inches HD(1366x768) Display",
            image: img,
            price: '$550.00'
        },
        {
            name: "Dell Inspiron 15 3511 15.6 Inch Laptop, Full HD LED Non-Touch WVA Display - Intel Core i3-1115G4, 8GB DDR4 RAM, 256GB SSD",
            image: img,

            price: '$150.00'
        },
        {
            name: "Nike Men 'Mercurial Superfly 7 Elite Firm Ground Football Shoe",
            image: img,
            price: '$650.00'
        },
        {
            name: "Under Armour Men's Charged Assert 9 Running Shoe",
            image: img,
            price: '$90.00'
        },
        {
            name: "Adidas Women's Parma 16 Shorts",
            image: img,
            price: '$50.00'
        },
        {
            name: "Rb3030 Outdoorsman I Aviator Sunglasses",
            image: img,
            price: '$250.00'
        },
        {
            name: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
            image: img,
            price: '$350.00'
        },
        {
            name: "Men's Machine Stainless Steel Quartz Chronograph Watch",
            image: img,
            price: '$50.00'
        },
        {
            name: "Womens Summer Plus Size Lace Neckline Cold Shoulder Short Sleeve",
            image: img,
            price: '$950.00'
        },
    ];
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
            <h1 className=" text-2xl mt-5 container mx-auto">Home For Rent</h1>
            <div className='container mx-auto shadow-2xl'>

                <div className=" grid  grid-cols-1 mt-5 ">
                    <div className='flex justify-end'>
                        <Link className='underline text-blue-600'>See All</Link>
                    </div>
                    <Slider className=''  {...settings}>
                        {cardData.map(item => (
                            <div className="card  shadow-xl">
                                <figure className="">
                                    <img src={item.image} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-orange-500">{item.price}</h2>

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