import React, { useEffect, useState } from 'react';
import img1 from './Vector4.png'
import img2 from './Vector3.png'
import { useParams } from 'react-router-dom';

const CheckOutPage = () => {

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
            <div className='mt-[-22px]'>
                <progress className="progress progress-success w-[33.333333%] bg-green-500 rounded-none" value="0" max="100"></progress>
            </div>



            <div className='lg:flex container mx-auto gap-10 p-2 mb-20 mt-10'>


                <div className='lg:w-[50%] border'>
                    <div className='flex bg-[#15396D] p-5 gap-5 text-white font-bold'>
                        <img src={img1} alt="" className='w-7 h-7' />
                        <p className=''> Name & Billing Address</p>
                    </div>
                    <div className='p-5'>
                        <div className=" items-center">
                            <div className="w-60">
                                <label htmlFor="">
                                    Name
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
                        <div className="mt-3  items-center">
                            <div className="w-60">
                                <label htmlFor="">
                                    Email
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
                                    Address
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
                            <input


                                placeholder="Product Name"
                                type="text"
                                className="input input-bordered mt-2 w-full rounded-sm "
                            />

                        </div>
                    </div>

                    <div className='p-5'>
                        <div className=" items-center">
                            <div className="w-60">
                                <label htmlFor="">
                                    Phone Number
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
                                    Optional Phone Number
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

                </div>




                <div className='lg:w-[50%] border mt-5 lg:mt-0'>
                    <div className='flex bg-[#15396D] p-5 gap-5 text-white font-bold'>
                        <img src={img2} alt="" className='' />
                        <p className=''>  Payment Detail</p>
                    </div>
                    <div className='p-5  '>
                        <div className="  items-center">
                            <div className="w-60">
                                <label htmlFor="">
                                    Full  Name
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

                    <div className='p-5  '>
                        <div className="  items-center">
                            <div className="w-60">
                                <label htmlFor="">
                                    Home  Name
                                    <sup>
                                        <span className="text-red-500 mr-1">*</span>
                                    </sup>
                                </label>
                            </div>
                            <input
                                defaultValue={homes.name }
                                placeholder="Product Name"
                                type="text"
                                className="input input-bordered mt-1 w-full rounded-sm"
                                disabled
                            />
                        </div>

                    </div>

                    <div class=" mb-3 mx-3 px-3">
                        <label class="input-text" for="">My billing address is different
                            <sup class="text-danger">*</sup></label>
                        <br />
                        <div class="flex mt-3">
                            <div class="mr-5">
                                <input type="radio" name="" id="" className='mr-2' />
                                Yes

                            </div>
                            <div class="mr-5">
                                <input type="radio" name="" id="" className='mr-2' />
                                No

                            </div>
                        </div>
                    </div>

                    <div className='divider'></div>
                    <div className=" px-6 mt-5">

                        <div className="flex justify-between">
                            <p>Service Charge</p>
                            <p>{homes.price} Taka</p>
                        </div>
                        <div className='divider'></div>

                        <div className="flex justify-between">
                            <p>Sales Tax</p>
                            <p>0.00</p>
                        </div>
                        <div className='divider'></div>

                        <div className="flex justify-between">
                            <p>Total Service Charge</p>
                            <p class="" >{homes.price} Taka</p>
                        </div>
                        <div className='divider'></div>
                        <div className="mr-5 mb-4">
                            <input type="checkbox" name="" id="" className="mr-2" />
                            I have read and agree to the <strong>Terms & Conditions </strong>and <strong> Refund Policy.</strong>

                        </div>
                        <div className='text-center mb-5'>
                            <button className='btn w-full bg-[#1697DA] border-none hover:bg-[#57a2ca]'>Proceed To CheckOut</button>
                        </div>
                    </div>
                </div>













            </div>



        </div>

    );
};

export default CheckOutPage;