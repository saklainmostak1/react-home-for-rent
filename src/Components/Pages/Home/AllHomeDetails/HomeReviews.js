import React, { useEffect, useState } from 'react';
import { Form, Link, useParams } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";

const HomeReviews = () => {


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


                        </div>

                    </div>
                </div>


                <div className='max-w-[1440px] mx-auto '>
                    <div class="mt-5">
                        <div class="card border-primary px-8">

                            <button class="border-0 bg-blue-500 p-2 text-white ">All Review of {homes.name}</button>
                        </div>
                        <div>

                            <div className="bg-slate-100 container mx-auto px-5 lg:px-12 py-4 mt-5">

                                <h1 className="text-2xl font-bold text-center">All Products</h1>

                                <div className="mt-8 bg-white p-7 rounded-xl">

                                    <div className="overflow-x-auto">
                                        <table className="table w-full">
                                            <thead className="bg-white border-b-2">
                                                <tr>
                                                    <th className="bg-white">Img</th>
                                                    <th className="bg-white">Email</th>
                                                    <th className="bg-white">Name</th>
                                                    <th className="bg-white">Review</th>
                                                    <th className="bg-white">Rating</th>

                                                </tr>
                                            </thead>
                                            <tbody>


                                                <tr>


                                                    <td>
                                                        <div className="flex items-center">
                                                            <div className="avatar mr-2">
                                                                <div className="w-12 rounded">
                                                                    <img src='' alt='' />
                                                                </div>
                                                            </div>
                                                            <p className="text-slate-400 text-sm">
                                                                { }
                                                            </p>
                                                        </div>
                                                    </td>


                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                
                <div className='max-w-[1000px] mx-auto'>
                    <form action="">

                        <div className='container mx-auto gap-10 p-2 mb-20 mt-10'>


                            <div className='border'>
                                <div className='text-center bg-[#15396D] p-5 gap-5 text-white font-bold'>

                                    <p className=''>Add Review</p>
                                </div>
                                <div className='p-5'>
                                    <div className=" items-center">
                                        <div className="w-60">
                                            <label htmlFor="">
                                                Your  Name
                                                <sup>
                                                    <span className="text-red-500 mr-1">*</span>
                                                </sup>
                                            </label>
                                        </div>
                                        <input


                                            placeholder="Product Name"
                                            type="text"
                                            className="input input-bordered mt-1 w-full rounded-sm"
                                        />
                                    </div>

                                </div>
                                <div className='p-5'>
                                    <div className=" items-center">
                                        <div className="w-60">
                                            <label htmlFor="">
                                                Your  Name
                                                <sup>
                                                    <span className="text-red-500 mr-1">*</span>
                                                </sup>
                                            </label>
                                        </div>
                                        <input


                                            placeholder="Product Name"
                                            type="text"
                                            className="input input-bordered mt-1 w-full rounded-sm"
                                        />
                                    </div>

                                </div>
                                <div className='p-5'>
                                    <div className=" items-center">
                                        <div className="w-60">
                                            <label htmlFor="">
                                                Your  Name
                                                <sup>
                                                    <span className="text-red-500 mr-1">*</span>
                                                </sup>
                                            </label>
                                        </div>
                                        <input


                                            placeholder="Product Name"
                                            type="text"
                                            className="input input-bordered mt-1 w-full rounded-sm"
                                        />
                                    </div>

                                </div>
                                <div className='p-5'>
                                    <div className=" items-center">
                                        <div className="w-60">
                                            <label htmlFor="">
                                                Your  Name
                                                <sup>
                                                    <span className="text-red-500 mr-1">*</span>
                                                </sup>
                                            </label>
                                        </div>
                                       
                                         <textarea
                                            name='additionalInfo'
                                            type='text'
                                            id=""
                                            className="textarea textarea-bordered w-full"
                                            cols="30"
                                            rows="6"
                                        ></textarea>
                                    </div>

                                </div>

                                <div className='text-center mb-5 p-5'>
                                    <input type="button" value="Add Review" className='btn w-full bg-[#1697DA] border-none hover:bg-[#57a2ca]'/>
                                    {/* <button className='btn w-full bg-[#1697DA] border-none hover:bg-[#57a2ca]'>Add Review</button> */}
                                </div>
                            </div>


                        </div>
                    </form>




                </div>


            </div>
        </div>
    );
};

export default HomeReviews;