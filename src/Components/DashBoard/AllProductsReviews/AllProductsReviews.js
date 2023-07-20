import React, { useState } from 'react';
import '../AllProducts/style.css'
import { HiTrash, HiEye, HiPencilAlt } from "react-icons/hi";
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AllProductsReviews = () => {

    const { data: allProductsReviews = [], isLoading, refetch
    } = useQuery({
        queryKey: ['allProductsReviews'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5001/all-home-reviews')
            const data = await res.json()
            return data
        }
    })



    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)


    const lastPostIndex = currentPage * postsPerPage
    const firstPosIndex = lastPostIndex - postsPerPage
    const currentPosts = allProductsReviews?.slice(firstPosIndex, lastPostIndex)
    let totalPosts = allProductsReviews.length
    let pages = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }


    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure delete')

        if (proceed) {
            fetch(`http://localhost:5001/home-reviews/${id}`, {
                method: "DELETE",

            })
                .then(Response => Response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch()
                        toast.success('Delete Successfully')
                    }

                })
        }
    }


    return (
        <div>

            <div className="bg-slate-100 container mx-auto px-5 lg:px-12 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">All Reviews</h1>





                </div>
                <div className="mt-8 bg-white p-7 rounded-xl">

                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className="bg-white border-b-2">
                                <tr>
                                    <th className="bg-white"></th>
                                    <th className="bg-white">Products</th>
                                    <th className="bg-white">user Name</th>
                                    <th className="bg-white">Email</th>
                                    <th className="bg-white">Rating</th>
                                    <th className="bg-white">Message</th>

                                    <th className="bg-white ">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // loading ?

                                    //   <button className="btn loading m-10 ">loading</button>
                                    //   :
                                    currentPosts?.map((product, i) =>

                                        <tr>
                                            <td>
                                                {i + 1}
                                            </td>

                                            <td>
                                                <div className="flex items-center">
                                                    <div className="avatar mr-2">
                                                        <div className="w-12 rounded">
                                                            <img src={product.photo
                                                            } alt='' />
                                                        </div>
                                                    </div>
                                                    <p className="text-slate-400 text-sm">
                                                        {product.productName}
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <p>{product.name}</p>
                                            </td>
                                            <td>
                                                <p>{product.email}</p>
                                            </td>
                                            <td>

                                                {product.rating}

                                            </td>
                                            <td>
                                                {product.message}
                                            </td>
                                            <td className="w-full">
                                                <div className="flex items-center ">



                                                    <button
                                                        onClick={() => handleDelete(product._id)}
                                                    >
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

export default AllProductsReviews;