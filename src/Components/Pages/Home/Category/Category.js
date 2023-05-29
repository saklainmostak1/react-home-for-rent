import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { Link } from 'react-router-dom';

const Category = () => {


    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5001/category`)
            .then(Response => Response.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);


    return (
        <div className=' mx-auto max-w-[1200px] '>
            <h2 className='font-semibold text-3xl text-center'>All Category Of Our Website</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 mt-5'>



           {
            categories.map((categorie) =>
            <CategoryCard
            key={categorie.id}
            categorie={categorie}
            
            ></CategoryCard>
            
            
            )
           }
            </div>
        </div>
    );
};

export default Category;