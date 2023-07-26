import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';



const AllUsers = () => {
 


    const { data: allusers = [], isLoading, refetch
    } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch('https://home-for-rent-server.vercel.app/users')
            const data = await res.json()
            return data
        }
    })


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
                                    

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // loading ?

                                    //   <button className="btn loading m-10 ">loading</button>
                                    //   :
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

export default AllUsers;