import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { HiTrash } from 'react-icons/hi2';
import { useQuery } from 'react-query';

const ManageUsers = () => {



    const { data: allusers = [], isLoading, refetch
    } = useQuery({
        queryKey: ['useres'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5001/users')
            const data = await res.json()
            return data
        }
    })
    // if(isLoading){
    //     return <Load></Loading>
    // }


    const handleMakeAdmin = id => {
        fetch(`http://localhost:5001/users/admin/${id}`, {
            method: "PUT"
        })
        .then(Response => Response.json())
        .then(data => {
           if(data.modifiedCount > 0 ){
            console.log(data);
            toast.success('Make Admin SuccessFully')
            refetch()
           }
        })
    }

    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure delete')
            
           if(proceed){
            fetch(`http://localhost:5001/users/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(Response => Response.json())
            .then(data => {
                if(data.deletedCount > 0){
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
    const currentPosts = allusers.slice(firstPosIndex, lastPostIndex)

    let totalPosts = allusers.length
    let pages = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }
    return (
        <div>

            <div className="bg-slate-100 container mx-auto px-5 lg:px-12 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">All Users</h1>

                </div>
                <div className="mt-8 bg-white p-7 rounded-xl">

                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className="bg-white border-b-2">
                                <tr>
                                    <th className="bg-white"></th>
                                    <th className="bg-white">Name</th>
                                    <th className="bg-white">Email</th>
                                    <th className="bg-white">Role</th>
                                    <th className="bg-white">Manage</th>
                                    <th className="bg-white">Options</th>

                                </tr>
                            </thead>
                            <tbody>
                                {

                                    currentPosts?.map((alluser, i) =>

                                        <tr>
                                            <td>
                                                {i + 1}
                                            </td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="avatar mr-2">
                                                        <div className="w-12 rounded">
                                                            <img src={alluser.photo
                                                            } alt='' />
                                                        </div>
                                                    </div>
                                                    <p className="text-slate-400 text-sm">
                                                        {alluser.name}
                                                    </p>
                                                </div>
                                            </td>
                                            <td>{alluser.email}</td>
                                            <td>{alluser.role}</td>
                                            <td className="w-full">
                                              {
                                                alluser?.role !== 'admin' && 


                                                <div className="flex items-center ">

                                                <button
                                                    onClick={() => handleMakeAdmin(alluser._id)}
                                                    className='border-none btn btn-xs bg-sky-500 hover:bg-sky-700'>
                                                    Make Admin
                                                </button>

                                            </div>
                                              }
                                            </td>
                                            <td className="w-full">
                                                <div className="flex items-center ">

                                                    <button
                                                    
                                                    onClick={() => handleDelete(alluser._id)}
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

export default ManageUsers;