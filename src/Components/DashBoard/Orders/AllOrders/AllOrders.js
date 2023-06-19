import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllOrders = () => {

    const { data: allOrders = [], isLoading, refetch
    } = useQuery({
        queryKey: ['useres'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5001/orders`)
            const data = await res.json()
            return data
        }
    })


    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure delete')

        if (proceed) {
            fetch(`http://localhost:5001/allHomes/${id}`, {
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
    const currentPosts = allOrders?.slice(firstPosIndex, lastPostIndex)
    let totalPosts = allOrders.length
    let pages = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }


    return (
        <div>

            <div className="bg-slate-100 container mx-auto px-5 lg:px-12 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">All Orders</h1>

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
                                    currentPosts?.map((allOrders, i) =>

                                        <tr>
                                            <td>
                                                {i + 1}
                                            </td>

                                            <td>
                                                <div className="flex items-center">
                                                    <div className="avatar mr-2">
                                                        <div className="w-12 rounded">
                                                            <img src={allOrders.image
                                                            } alt='' />
                                                        </div>
                                                    </div>
                                                    <p className="text-slate-400 text-sm">
                                                        {allOrders.productName}
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                
                                            </td>
                                            <td>

                                                <p className="text-sm text-slate-400">
                                                    <b className="text-black">Base Price: </b>${allOrders.price}
                                                </p>

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

export default AllOrders;