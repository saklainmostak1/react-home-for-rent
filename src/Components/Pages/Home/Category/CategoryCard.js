import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ categorie }) => {


    const { name, id, image, description } = categorie


    return (
        // <div >
        //     <Link to={`/allHome/${id}`}>
        //         <button className='btn w-full'>{name}</button>
        //     </Link>
        // </div>
        <div className="card m-10 shadow-xl image-full">
        <figure><img src={image} alt="" className='w-full'/></figure>
        <div className="card-body">
            <h2 className="text-center text-3xl my-5">{name}</h2>
            <p className='text-center'>{description}</p>
            <div className="card-actions justify-center">
                <Link to={`/allHome/${id}`}>
                    <button className="btn btn-primary mt-5 underline ">{name}</button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default CategoryCard;