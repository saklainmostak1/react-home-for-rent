import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const AllCateGories = () => {


    const [homes, setHomes] = useState([])

    useEffect(() => {
        fetch('http://localhost:5001/allHome')
            .then(Response => Response.json())
            .then(data => setHomes(data))
    }, [])
    // console.log(home);




    const filterItem = (cateItems) => {
        const updateItems = homes.filter((currentElement) => {
            return currentElement.category_id === cateItems
        })

        setHomes(updateItems)
    }

    return (
        <div className='flex'>
            <div className='w-[30%]  '>
               
                <Link onClick={() => filterItem("2")}>For Rent</Link>
                <Link onClick={() => filterItem("1")}>For Sell</Link>
                
            </div>
           
            <div className='w-[70%]'>
                {
                    homes.map((home) =>

                       <p>
                        {home.name}
                       </p>
                    )
                }
            </div>

          
        </div>
    );
};

export default AllCateGories;