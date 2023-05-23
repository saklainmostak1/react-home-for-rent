import React from 'react';


const HomeBanner = () => {
    return (
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
    );
};

export default HomeBanner;