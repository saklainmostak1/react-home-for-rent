
import React, { useEffect, useState } from 'react';
import { Link, Outlet, } from 'react-router-dom';
import CategoryOne from './CategoryOne';
import CategoryTwo from './CategoryTwo';

const CategoryCard = () => {





    // useEffect(() => {
    //     fetch(`http://localhost:5000/category/${id}`)
    //         .then(Response => Response.json())
    //         .then(data => setCategories(data))
    // }, [])
    // console.log(categories);



    return (
        <div className='lg:flex container mx-auto'>
            <div className='lg:w-[20%] mt-5'>
                <CategoryOne></CategoryOne>

            </div>
            <Outlet></Outlet>
            <div className='lg:w-[80%]'>

                <CategoryTwo></CategoryTwo>
            </div>

        </div>
    );
};

export default CategoryCard;