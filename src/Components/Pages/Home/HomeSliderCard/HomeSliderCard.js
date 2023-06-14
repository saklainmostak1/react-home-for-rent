import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeSliderCard = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5001/category`)
            .then(Response => Response.json())
            .then(data => setCategory(data))
    }, [])
    console.log(category);




    return (
        <div className='lg:w-[800px] md:w-[800px] w-[300px] mx-auto'>
            <div className='container mx-auto px-5'>
            <div className='mt-[-120px] lg:mt-[-100px] '>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5'>
                    {
                        category.map((categories) =>
                            <div className="card  bg-base-100 shadow-xl image-full">
                                <figure><img className='w-full' src={categories.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{categories.name}</h2>
                                    <p>{categories.description}</p>
                                    <div className="card-actions">
                                        <Link to={`/allHome/${categories.id}`} className='w-full'>
                                            <button className="btn bg-[#1697DA] border-none w-full hover:bg-green-400 rounded-sm">Buy Now</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>

                        )
                    }


                </div>

            </div>
        </div>
        </div>
    );
};

export default HomeSliderCard;