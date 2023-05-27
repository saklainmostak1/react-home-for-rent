
import React, { useEffect, useState } from 'react';
import { Link,  } from 'react-router-dom';

const CategoryCard = () => {



    
    const [categories, setCategories] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(Response => Response.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);



    // useEffect(() => {
    //     fetch(`http://localhost:5000/category/${id}`)
    //         .then(Response => Response.json())
    //         .then(data => setCategories(data))
    // }, [])
    // console.log(categories);



    return (
        <div>
       
        
       </div>
    );
};

export default CategoryCard;