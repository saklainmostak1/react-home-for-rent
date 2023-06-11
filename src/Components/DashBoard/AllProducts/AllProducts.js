import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import { HiTrash, HiEye, HiPencilAlt } from "react-icons/hi";
import { Button } from '@material-tailwind/react';

const AllProducts = () => {


    const [allHomes, setAllHomes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5001/allHome`)
            .then(Response => Response.json())
            .then(data => setAllHomes(data))
    }, [])


    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)


    const lastPostIndex = currentPage * postsPerPage
    const firstPosIndex = lastPostIndex - postsPerPage
    const currentPosts = allHomes.slice(firstPosIndex, lastPostIndex)

    let totalPosts = allHomes.length
    let pages = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }
    return (
        <div>

            <div className="bg-slate-100 container mx-auto px-5 lg:px-12 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">All Products</h1>
                    <div className="flex justify-end">
                        <label

                            className="bg-[#ff8084] text-white px-6 py-2 lg:font-medium text-small lg:text-sm rounded-lg my-7 cursor-pointer "
                        >
                            <Link to="/dashboard/addProducts">Add New Product</Link>
                            {/* <Link to="/dashboard/products/products/add-product">Add New Product</Link> */}
                        </label>
                    </div>
                    {/* MODAL */}



                </div>
                <div className="mt-8 bg-white p-7 rounded-xl">

                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className="bg-white border-b-2">
                                <tr>
                                    <th className="bg-white"></th>
                                    <th className="bg-white">Name</th>
                                    <th className="bg-white">type</th>
                                    <th className="bg-white">Price</th>
                                    <th className="bg-white">Posted Date</th>
                                    <th className="bg-white">Validation</th>
                                    <th className="bg-white">Location</th>
                                    <th className="bg-white">Description</th>
                                    <th className="bg-white ">More Description</th>
                                    <th className="bg-white ">Additional Info </th>
                                    <th className="bg-white ">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // loading ?

                                    //   <button className="btn loading m-10 ">loading</button>
                                    //   :
                                    currentPosts.map((product, i) =>

                                        <tr>
                                            <td>
                                                {i + 1}
                                            </td>

                                            <td>
                                                <div className="flex items-center">
                                                    <div className="avatar mr-2">
                                                        <div className="w-12 rounded">
                                                            <img src={product.image
                                                            } alt='' />
                                                        </div>
                                                    </div>
                                                    <p className="text-slate-400 text-sm">
                                                        {product.name}
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <p>{product.type}</p>
                                            </td>
                                            <td>

                                                <p className="text-sm text-slate-400">
                                                    <b className="text-black">Base Price: </b>${product.price}
                                                </p>

                                            </td>
                                            <td>
                                                {product.posted_date}
                                            </td>
                                            <td>
                                                {product.validation}
                                            </td>
                                            <td>
                                                {product.location}
                                            </td>

                                            <td>
                                                {product.description.slice(0, 30) + '...'}
                                            </td>
                                            <td>
                                                {product.more_description}
                                            </td>
                                            <td>
                                                {product.additional_info.slice(0, 20) + '....'}
                                            </td>
                                            <td className="w-full">
                                                <div className="flex items-center ">
                                                    <Link to={`/allHome/details/${product._id}`}>

                                                        <label
                                                            className="w-8 h-8 bg-green-200 inline-block rounded-full text-center cursor-pointer group hover:bg-green-500 duration-300 mr-1"
                                                            htmlFor=""
                                                        >
                                                            <p className=' mt-2 ml-2 text-green-700 group-hover:text-white duration-300'>
                                                                <HiEye></HiEye>
                                                            </p>
                                                        </label>
                                                    </Link>
                                                    <Link to={`/dashboard/update/products/${product._id}`}>

                                                        <label
                                                            className="w-8 h-8 bg-blue-200 inline-block rounded-full text-center cursor-pointer group hover:bg-blue-500 duration-300 mr-1"
                                                            htmlFor=""
                                                        >
                                                            <p className=' mt-2 ml-2 text-blue-700 group-hover:text-white duration-300'>
                                                                <HiPencilAlt></HiPencilAlt>
                                                            </p>
                                                        </label>
                                                    </Link>



                                                    <button>
                                                        <label
                                                            className="w-8 h-8 bg-red-200 inline-block rounded-full text-center cursor-pointer group hover:bg-red-500 duration-300 mr-1"
                                                            htmlFor=""
                                                        >
                                                            <p className=' mt-2 ml-2 text-red-500 group-hover:text-white duration-300'>
                                                                <HiTrash></HiTrash>
                                                            </p>

                                                        </label>
                                                    </button>

                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                    <div className=" mt-5 paigination">
                        {
                            pages.map((page, index) =>
                                <button
                                    key={index + 1}
                                    onClick={() => setCurrentPage(page)}
                                    className=

                                    {page === currentPage ? 'active' : ''}
                                >{page}</button>
                            )
                        }

                    </div>
                    {/* <div className=" mt-5">
              <button className="btn btn-circle mr-1">1</button>
              <button className="btn btn-circle mr-1">2</button>
              <button className="btn btn-disabled text-black mr-1">...</button>
              <button className="btn btn-circle mr-1">99</button>
              <button className="btn btn-circle mr-1">100</button>
            </div> */}
                </div>
            </div>


        </div>
    );
};

export default AllProducts;