import React from 'react';
import { Link } from 'react-router-dom';


const HomeBanner = () => {
    return (
        <div className='mt-[-12px]'>
            <div className="hero " style={{ backgroundImage: `url("https://media.istockphoto.com/id/155700839/photo/a-beautiful-home-available-for-rent.jpg?s=612x612&w=0&k=20&c=aPwqJ67O3CGGItsDoI8fuGwAuTR3L3B80tImG2mlQQ8=")` }}>
                <div className=""></div>
                <div className="hero-content  text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold text-white">Let's Get Your Operating Authority</h1>
                        <p className="mb-5 text-white font-semibold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ducimus exercitationem, repellendus aperiam quisquam dolorem ratione numquam neque quaerat recusandae.</p>
                        <Link to={`/all-services`}>
                            <button className="btn bg-[#3aa1d8] border-none text-white hover:bg-blue-500 rounded-sm">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* https://www.investopedia.com/thmb/kZp7lYi4-3kV3w9EqVHoFjX3f3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/buying-your-first-investment-property-top-10-tips.asp-ADD-Color-074cf6b2f8434f4fbc8d94edeb361cd6.jpg 
            
            
            https://www.shutterstock.com/image-photo/home-rent-sign-front-new-260nw-777930703.jpg
            
            
            */}
        </div>
    );
};

export default HomeBanner;