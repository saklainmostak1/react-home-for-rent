import React from 'react';
import img5 from '../../Pages/Blog/person-texting-on-phone.jpg'
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Blog = () => {
    return (
        <div className='mb-16'>
            <div className='mt-[-12px]'>
                <div className="hero " style={{ backgroundImage: `url("https://www.investopedia.com/thmb/kZp7lYi4-3kV3w9EqVHoFjX3f3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/buying-your-first-investment-property-top-10-tips.asp-ADD-Color-074cf6b2f8434f4fbc8d94edeb361cd6.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                            <h1 className="mb-5 text-4xl font-bold text-white">Let's Get Your Operating Authority</h1>
                            <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus exercitationem, repellendus aperiam quisquam dolorem ratione numquam neque quaerat recusandae.</p>
                            <button className="btn bg-[#3aa1d8] border-none text-white hover:bg-[#1697DA]">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-6 lg:px-0 md:px-28 max-w-[1000px] mx-auto mt-16'>
                <div className=''>
                    <p>Sometimes it can be challenging to get rent payments on time from tenants, so you might wonder what you can do to reduce late rent payments. Sending a rent reminder text is a great way to help proactively reduce late payments. However, it’s important to keep a few things in mind when sending out a rent reminder text so that it’s effective. In this blog post, we’ll teach you how to send a rent reminder text message that gets results.</p>
                    <img src={img5} alt="" className='rounded-md mt-8' />
                </div>
                <div>

                    <h1 className='text-4xl font-semibold mb-5 mt-8'>Key takeaways</h1>
                    <ul className='list-disc ml-8'>
                        <li>Sending a rent reminder text is an easy way to boost your monthly cash flow and reduce the stress of chasing down late payments.</li>
                        <li>Keep your text message short and sweet by making your point quickly and efficiently.</li>
                        <li>Your residents are busy people, so don’t bombard them with messages or be overly aggressive in your language.</li>
                        <li>A gentle payment reminder about an upcoming rent payment can be all it takes to prompt action.</li>
                        <li>Add a personal touch by including the tenant’s name or specific detail about their rental unit.</li>
                        <li>If you don’t hear back after your initial message, don’t hesitate to follow up with a polite reminder.</li>
                    </ul>

                </div>

                <div className='mt-8'>
                    <h1 className='text-4xl font-semibold mb-5 '>Why rent reminder texts are important</h1>
                    <p>If you’re a landlord, you know how important it is to get rent payments on time. Not only does it keep your business running smoothly, but it also helps to build good relationships with your tenants.</p> <br />
                    <p>One way to help ensure timely rent payments is to send rent reminder texts. Rent reminder texts are a quick and easy way to remind tenants that their rent is due and can be customized to fit each tenant’s needs. For example, you can set up automatic reminders that are sent a few days before the rent is due, or you can send manual reminders as needed.</p> <br />
                    <p>Additionally, rent reminder texts can be used to provide tenants with important information about late fees or other changes to their lease agreement. By sending regular reminders, you can help reduce the number of late or missed rent payments and ensure that your tenants are happy and satisfied with their rental experience.</p>
                </div>
            </div>

            <div className='flex justify-center mt-20'>
                                <button className="mr-1 btn btn-circle bg-red-700 border-none text-white">< FaGoogle></FaGoogle></button>
                                <button className="mr-1 btn btn-circle bg-sky-500 border-none text-white">< FaTwitter></FaTwitter></button>
                                <button className="mr-1 btn btn-circle bg-blue-900 border-none text-white">< FaFacebook></FaFacebook></button>
                                <button className="mr-1 btn btn-circle bg-sky-800 border-none text-white">< FaLinkedin></FaLinkedin></button>
                            </div>
            <div className=' bg-slate-300 container mx-auto mt-20 rounded-md'>

                <div className='m-20'>
                   <div className='p-5'>
                   <h2 className="text-2xl text-center">NEWSLETTER
                    </h2>
                    <p className='text-center'>Enter your name and email address below to subscribe to myBproperty newsletter</p>
                   </div>
                    <form
                    >

                        <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>
                            <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-success w-full " required />
                            <input name='email' type="email" d
                                placeholder="email" className="input input-bordered input-success w-full " />

                        </div>
                        <input className='btn btn-outline btn-info mb-5 w-full mt-5' type="submit" value="Send Review" />
                    </form>
                </div>



            </div>
        </div>


    );
};

export default Blog;