import React, { useContext, useEffect, useState } from 'react';
import img1 from './Vector4.png'
import img2 from './Vector3.png'
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const CheckOutPage = () => {

    const { id } = useParams()
    console.log(id);
    const { user } = useContext(AuthContext)

    // const [homes, setHomes] = useState([])

    // useEffect(() => {
    //     fetch(`https://home-for-rent-server.vercel.app/allHome/${id}`)
    //         .then(Response => Response.json())
    //         .then(data => setHomes(data))
    // }, [id])

    // console.log(homes);
const navigate = useNavigate()



    const { data: allOrders = [], isLoading, refetch
    } = useQuery({
        queryKey: ['useres'],
        queryFn: async () => {
            const res = await fetch(`https://home-for-rent-server.vercel.app/allHome/${id}`)
            const data = await res.json()
            return data
        }
    })





    const handleOrder = event => {
        event.preventDefault()
        const form = event.target
        const price = form.price.value
        const names = form.name.value
        const email = form.email.value
        const image = form.image.value
        const phone = form.phone.value
        const adress = form.adress.value
        const homeName = form.homeName.value

        console.log( price, names, email, image, phone, adress, homeName );
        const order = {
            OrderId: id,
            productName: homeName,
            name: names,
            price,
            email,
            phone,
            image,
            adress,

        }
        fetch('https://home-for-rent-server.vercel.app/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('Order Confirmed')
                    navigate('/thank-you')
                    refetch()


                }


            })
    }

    return (
        <div>
            <div className='mt-[-22px]'>
                <progress className="progress progress-success w-[33.333333%] bg-green-500 rounded-none" value="0" max="100"></progress>
            </div>



            <form onSubmit={handleOrder}>
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
                                        First  Name
                                        <sup>
                                            <span className="text-red-500 mr-1">*</span>
                                        </sup>
                                    </label>
                                </div>
                                <input

                                    name='name'
                                    placeholder=" Name"
                                    type="text"
                                    className="input input-bordered mt-3 w-full rounded-sm"
                                />
                            </div>
                            <div className=" items-center mt-5">
                                <div className="w-60">
                                    <label htmlFor="">
                                        Last  Name
                                        <sup>
                                            <span className="text-red-500 mr-1">*</span>
                                        </sup>
                                    </label>
                                </div>
                                <input


                                    placeholder=" Name"
                                    type="text"
                                    className="input input-bordered mt-3 w-full rounded-sm"
                                />
                            </div>
                            <div className="mt-5  items-center">
                                <div className="w-60">
                                    <label htmlFor="">
                                        Email
                                        <sup>
                                            <span className="text-red-500 mr-1">*</span>
                                        </sup>
                                    </label>
                                </div>
                                <input
                                    defaultValue={user.email}
                                    placeholder="email"
                                    type="text"
                                    name='email'
                                    disabled
                                    className="input input-bordered mt-3 w-full rounded-sm"
                                />
                            </div>
                            <div className="mt-5  items-center">
                                <div className="w-60">
                                    <label htmlFor="">
                                        Adress
                                        <sup>
                                            <span className="text-red-500 mr-1">*</span>
                                        </sup>
                                    </label>
                                </div>
                                <input

                                    placeholder="Adress"
                                    type="text"
                                    name='adress'
                                    className="input input-bordered mt-3 w-full rounded-sm"
                                />
                            </div>
                            <div className="mt-5  items-center">
                                <div className="w-60">
                                    <label htmlFor="">
                                        Phone Number
                                        <sup>
                                            <span className="text-red-500 mr-1">*</span>
                                        </sup>
                                    </label>
                                </div>
                                <input

                                    placeholder="email"
                                    type="text"
                                    name='phone'
                                    className="input input-bordered mt-3 w-full rounded-sm"
                                />
                            </div>
                            <div className="mt-5  items-center">
                                <div className="w-60">
                                    <label htmlFor="">
                                        Optional Phone Number
                                        <sup>
                                            <span className="text-red-500 mr-1">*</span>
                                        </sup>
                                    </label>
                                </div>
                                <input

                                    placeholder="Optional Phone Number"
                                    type="text"

                                    className="input input-bordered mt-3 w-full rounded-sm"
                                />
                            </div>
                        </div>

                    </div>


                    <div className='lg:w-[50%] border mt-5 lg:mt-0'>
                        <div className='flex bg-[#15396D] p-5 gap-5 text-white font-bold'>
                            <img src={img2} alt="" className='' />
                            <p className=''>  Order Detail</p>
                        </div>
                        <div className='p-5  '>
                            <div className="  items-center">
                                <div className="w-60">
                                    <label htmlFor="">
                                        Product Img
                                        <sup>
                                            <span className="text-red-500 mr-1">*</span>
                                        </sup>
                                    </label>
                                </div>
                                <input
                                    name='image'
                                    defaultValue={allOrders.image}
                                    disabled
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
                                    name='homeName'
                                    defaultValue={allOrders.name}
                                    placeholder="Product Name"
                                    type="text"
                                    className="input input-bordered mt-1 w-full rounded-sm"
                                    disabled
                                />
                            </div>

                        </div>
                        <div className='p-5  '>
                            <div className="  items-center">
                                <div className="w-60">
                                    <label htmlFor="">
                                       Price
                                        <sup>
                                            <span className="text-red-500 mr-1">*</span>
                                        </sup>
                                    </label>
                                </div>
                                <input
                                    name='price'
                                    defaultValue={allOrders.price}
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
                                <p >{allOrders.price} Taka</p>
                            </div>
                            <div className='divider'></div>

                            <div className="flex justify-between">
                                <p>Sales Tax</p>
                                <p>0.00</p>
                            </div>
                            <div className='divider'></div>

                            <div className="flex justify-between">
                                <p>Total Service Charge</p>
                                <p >{allOrders.price} Taka</p>
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
            </form>



        </div>

    );
};

export default CheckOutPage;