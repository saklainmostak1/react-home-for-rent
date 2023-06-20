import React, { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Authentication/AuthProvider';
import { HiTrash } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const UserOrders = () => {

    const { user } = useContext(AuthContext)

    const { data: userOrders = [], isLoading, refetch
    } = useQuery({
        queryKey: ['userOrders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5001/order?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })


    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure delete')

        if (proceed) {
            fetch(`http://localhost:5001/order/${id}`, {
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
    const currentPosts = userOrders?.slice(firstPosIndex, lastPostIndex)
    let totalPosts = userOrders.length
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
                                    <th className="bg-white">Products Name</th>
                                    <th className="bg-white">User Name</th>
                                    <th className="bg-white">Email</th>
                                    <th className="bg-white">Price</th>
                                    <th className="bg-white">Delivery Adress</th>
                                    <th className="bg-white">Payment Status</th>
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
                                                {allOrders.name}
                                            </td>
                                            <td>
                                                {allOrders.email}
                                            </td>

                                            <td>

                                                <p className="text-sm text-slate-400">
                                                    <b className="text-black">Base Price: </b>${allOrders.price}
                                                </p>

                                            </td>
                                            <td>
                                                {allOrders.adress}
                                            </td>
                                           
                                            <td>
                                                {
                                                    allOrders.price && !allOrders.paid &&
                                                    <Link to={`/dashboard/orders/payments/${allOrders._id}`}>
                                                        <button className='btn btn-accent btn-xs'>PAY</button>
                                                    </Link>
                                                }

                                                {
                                                    allOrders.price && allOrders.paid &&
                                                    <span className='text-primary'>Paid</span>
                                                }
                                            </td>

                                            <td>
                                                <div className='w-full'>

                                                    {
                                                        allOrders.price && allOrders.paid ?
                                                            'Can not Delete After Payment'
                                                            :
                                                            <button
                                                                onClick={() => handleDelete(allOrders._id)}
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

                                                    }





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

export default UserOrders;