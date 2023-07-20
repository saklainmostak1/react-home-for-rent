import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiTrash, HiEye, HiPencilAlt } from "react-icons/hi";
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const ManageContactMessage = () => {



    const { data: contactMessage = [], isLoading, refetch
    } = useQuery({
        queryKey: ['contactMessage'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5001/contact-message')
            const data = await res.json()
            return data
        }
    })


    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure delete')

        if (proceed) {
            fetch(`http://localhost:5001/contact-message/${id}`, {
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


    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)


    const lastPostIndex = currentPage * postsPerPage
    const firstPosIndex = lastPostIndex - postsPerPage
    const currentPosts = contactMessage.slice(firstPosIndex, lastPostIndex)

    let totalPosts = contactMessage.length
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
                                    <th className="bg-white">Email</th>
                                    <th className="bg-white">Sms</th>
                                    <th className="bg-white ">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // loading ?

                                    //   <button className="btn loading m-10 ">loading</button>
                                    //   :
                                    currentPosts?.map((message, i) =>

                                        <tr>
                                            <td>
                                                {i + 1}
                                            </td>
                                            <td>{message.name}</td>
                                            <td>{message.email}</td>
                                            <td>{message.message}</td>

                                            <td className="w-full">
                                                <div className="flex items-center ">



                                                    <button
                                                        onClick={() => handleDelete(message._id)}
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

export default ManageContactMessage;