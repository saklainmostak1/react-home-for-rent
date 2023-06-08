import React from 'react';
import img1 from '../../../img/istockphoto-1436217023-170667a.jpg'
import img2 from '../../../img/istockphoto-469432252-612x612.jpg'
import img3 from '../../../img/photo-1570129477492-45c003edd2be.jpg'
import img4 from '../../../img/download-23.webp'


const HomeSliderTwo = () => {
    return (
        <div className=' max-w-[1300px] mx-auto mt-10'>
            <div className="carousel w-full">
                <div id="slideA" className="carousel-item relative w-full">
                    <img src={img1} className="w-full h-[200px]" alt='' />
                 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slideD" className="btn btn-circle">❮</a>
                        <a href="#slideB" className="btn btn-circle">❯</a>
                        
                    </div>
                </div>
                <div id="slideB" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-[200px]" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slideA" className="btn btn-circle">❮</a>
                        <a href="#slideC" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slideC" className="carousel-item relative w-full">
                    <img src={img3} alt='' className="w-full h-[200px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slideB" className="btn btn-circle">❮</a>
                        <a href="#slideD" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slideD" className="carousel-item relative w-full">
                    <img src={img4} alt='' className="w-full h-[200px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slideC" className="btn btn-circle">❮</a>
                        <a href="#slideA" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
     
    );
};

export default HomeSliderTwo;