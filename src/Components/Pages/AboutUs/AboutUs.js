import React from 'react';
import img from '../../img/banner4.jpg'
import img1 from '../../img/values_icon_01.png'
import img2 from '../../img/values_icon_02.png'
import img3 from '../../img/values_icon_03.png'
import img4 from '../../img/values_icon_04.png'
import img5 from '../../img/values_icon_05.png'
import img6 from '../../img/values_icon_06.png'
import img8 from '../../img/about_img.png'

const AboutUs = () => {
    return (
        <div>
            <div>
                <h2 className='text-green-600 text-3xl font-semibold text-center mt-5'>HOME TO ALL YOUR PROPERTY NEEDS</h2>
            </div>
            <div>
                <h4 className='text-lg font-semibold text-center mb-5'>BUY | SELL | RENT | LEGAL | MORTGAGE | INTERIOR</h4>
            </div>
            <div>
                <img src={img} alt="" className='w-full h-96' />
            </div>



            <div className="hero container max-w-[1000px] mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="">

                            <img src={img8} alt="" />

                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">At A Glance</h1>
                        <p className="py-6">Starting back in 2016, Bproperty has now become the only real estate solutions provider in Bangladesh and its largest transacting real estate company. Combining an unmatched online and offline presence with our incomparable database of information, Bproperty has become the pioneer that caters to the needs of those with real estate queries, whether property search or customization, providing supporting services such as legal, mortgage, and interior to ensure all solutions are under one roof.
                        <br /> <br />

                            Bproperty utilizes technology to drive solutions for all stakeholders within the real estate industry with the vision to ensure that all Bangladeshis have access to a trusted and secure real estate service provider.</p>
                    </div>
                </div>
            </div>




            <div className='mt-5 mb-5'>
                <div className=" bg-gray-200 text-black  py-5">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Our Mission</h2>
                        <p>Continuously serving people with whatever they need to make the right decisions to retain confidence in real-estate.</p>

                    </div>
                    <div className="card-body items-center text-center mt-[-30px]">
                        <h2 className="card-title">Our Vision</h2>
                        <p>To be the household name for property services among Bangladeshis around the world.</p>

                    </div>

                    <div className='mt-[-30px]'>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Our Values</h2>
                        </div>
                        <div className='mt-[-20px]'>
                            {/* justify-center flex */}
                            <div className=' lg:flex gap-5 justify-center'>
                                <div className='flex justify-center gap-5 mt-5'>
                                    <img src={img1} alt="" className='w-16 h-16 ' />
                                    <img src={img2} alt="" className='w-16 h-16' />
                                </div>
                                <div className='flex justify-center gap-5 mt-5'>
                                    <img src={img3} alt="" className='w-16 h-16' />
                                    <img src={img4} alt="" className='w-16 h-16' />
                                </div>
                                <div className='flex justify-center gap-5 mt-5'>
                                    <img src={img5} alt="" className='w-16 h-16' />
                                    <img src={img6} alt="" className='w-16 h-16' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className=''>
                    <div className='lg:flex justify-center lg:bg-slate-300 mt-5 gap-10'>
                        <div className='text-center bg-slate-300 rounded-full p-5 mt-5'>
                            <h1 className='text-4xl font-bold'>4.8 lac+</h1>
                            <p>Clients Served</p>
                        </div>
                        <div className='text-center  bg-slate-300 rounded-full p-5 mt-5'>
                            <h1 className='text-4xl font-bold'>5.4 lac+</h1>
                            <p>Property Onboarded</p>
                        </div>
                        <div className='text-center  bg-slate-300 rounded-full p-5 mt-5'>
                            <h1 className='text-4xl font-bold'>700+</h1>
                            <p>Brands Served</p>
                        </div>
                        <div className='text-center  bg-slate-300 rounded-full p-5 mt-5'>
                            <h1 className='text-4xl font-bold'>2000 +</h1>
                            <p>Avg. Daily User Visit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;