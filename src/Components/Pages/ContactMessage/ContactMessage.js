import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram, FaGoogle, } from 'react-icons/fa';
import GoogleMap from './GoogleMap';
import { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';
import { toast } from 'react-hot-toast';

const ContactMessage = () => {


    const { user } = useContext(AuthContext)

    



    const addReview = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value 
        const message = form.message.value


        console.log(name, email,  message);

        const addReview = {
            name, email, message
        }
        fetch('https://home-for-rent-server.vercel.app/contact-message', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)

        })
            .then(Response => Response.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    toast.success('Sucessfully send message')
                    // refetch()
                    form.reset('')
                }
            })
            .catch(error => console.error(error))

    }
    


    return (
        <div className=''>
            <div className='lg:flex max-w-[1300px] mx-auto mt-10 mb-10 '>
                <div className='lg:w-[70%] bg-slate-500 rounded-md m-5'>
                    <div className='lg:m-20 m-5 md:m-10'>
                        <h2 className="text-4xl text-center mb-10">Send Us Message What You Want To Say
                        </h2>
                        <div className='max-w-[1140px] mx-auto'>
                            <form
                            onSubmit={addReview}
                            >

                                <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>
                                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-success w-full " required />
                                    <input 
                                    defaultValue={user?.email}
                                    name='email' type="email" disabled
                                        placeholder="email" className="input input-bordered input-success w-full " />

                                </div>
                                <textarea name='message' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Send Your Message" required></textarea>
                                <input className='btn btn-outline btn-info mb-5' type="submit" value="Send Message" />
                            </form>
                        </div>



                    </div>
                </div>
                <div className='lg:w-[30%] ' >

                    <div className=' m-5  '>
                        <div className="card  bg-gray-400 text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-2xl"> Our office</h2>
                                <div className='divider'></div>
                                <p>745 West Dhanmondi, Bosila, Mohammad Pur Dhaka</p>
                                <p>Phone: 01774412135</p>
                                <p>Phone: 01774412135</p>
                            </div>
                            <div className='divider'></div>
                            <div className='mb-5 text-center'>
                                <p>Email: saklainmostak2135@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='max-w-[1300px] mx-auto m-10 p-4'>

                <div>
                    <h1 className='text-4xl font-semibold mb-5 '>Things To Consider Before House Rent in Dhaka City</h1>
                    <p>First thing first, you have to decide on a specific location where you would like to stay in Dhaka. Nobody likes a noisy area. Before you rent a flat in Dhaka, you should check the place how much noisy is it? Then, you need to know about the availability of Gas and Water in that area. Do you know that some areas in Dhaka don’t have proper Gas and Water availability? Before moving on, you should inspect the Gas and Water availability. Besides, it is important to have markets nearby. Otherwise, it may give you an unpleasant experience sooner or later. Safety is another big issue. Inspect the security system before renting a flat in Dhaka city. It will be an advantage if the property is surveillance with CCTV cameras. Last but not the least, budget is an important factor to consider when you are looking for rent in Dhaka. Talk to the property owner about the Advance you have to pay. Also, ask the owner about if any additional expenses you need to bear. If everything goes fine, you can rent flat in Dhaka. Now, I would like to inform you how to get Home Rent in Dhaka.</p>
                </div>
                <div>
                    <h1 className='text-4xl font-semibold mb-5 '>How to Get Houses For Rent in Dhaka?</h1>
                    <p>You can rent a home both offline and online. The offline method has some hassles, You have to look for To-let boards and search manually. That doesn’t sound great at all. The second method is way more convenient. You can use the RENTS.com.bd website, one of the most popular online rental portals in Bangladesh. All you need to do is visit the website. Then, set your Property location, Property type, and Property Status. You will find the best available property rent in Dhaka at the best price. Right there, you can get the contact information and WhatsApp number. That is convenient, isn’t it?</p>
                </div>
                <div className='container '>

                    <h1 className='text-4xl font-semibold mb-5 mt-8'>Type of Property You can Rent in Dhaka:</h1>
                    <ul className='list-disc ml-8'>
                        <li>Home Rent</li>
                        <li> Commercial Space</li>
                        <li>Shop and Restaurant Space</li>
                        <li>Furniture and Home Appliances</li>
                        <li>Residential Apartment</li>
                        <li>Furnished Apartment</li>
                    </ul>

                </div>
            </div>


            <div className=''>
                <GoogleMap></GoogleMap>
            </div>
        </div>
    );
};

export default ContactMessage;