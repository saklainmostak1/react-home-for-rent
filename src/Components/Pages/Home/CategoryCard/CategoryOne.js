import React, { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';

const CategoryOne = () => {





    const [categories, setCategories] = useState([])


    useEffect(() => {
        fetch('http://localhost:5001/category')
            .then(Response => Response.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);
    return (
        
        <div>
            <div className='container mx-auto mt-10'>
                <div className='flex'>

                    <div className='w-[30%]'>
                        {
                            categories.map((categorie) =>
                                <p>
                                    <Link to={`/category.${categorie.id}`} className='flex text-blue-500 underline'>{categorie.cate_name}</Link>

                                </p>

                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CategoryOne;