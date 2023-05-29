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
        <div className='mt-16'>
            <h2 className='font-semibold text-3xl text-center'>All Category Of Our Website</h2>
            <div className=''>

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