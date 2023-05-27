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
            <div >
                <div className='flex'>
                    <div >
                        {
                            categories.map((categorie) =>
                                <p>
                                    <Link to={`/category/${categorie.id}`} className='flex text-blue-500 underline'>{categorie.name}</Link>

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