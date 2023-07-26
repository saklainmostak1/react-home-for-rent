import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { HiEye, HiTrash } from 'react-icons/hi2';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Authentication/AuthProvider';
import { Link } from 'react-router-dom';


const FavouritesList = () => {



    const { user } = useContext(AuthContext)


    const { data: favourites = [], isLoading, refetch
    } = useQuery({
        queryKey: ['favourites'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5001/favourites?user=${user.email}`)
            const data = await res.json()
            return data
        }
    })


    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure delete')

        if (proceed) {
            fetch(`http://localhost:5001/home-favourites/${id}`, {
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

    const [loading, setLoading] = useState(false)
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }, [])



    return (
        <div>

            <div className="bg-slate-100 container mx-auto px-5 lg:px-12 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Favourites Products</h1>





                </div>
                <div className="mt-8 bg-white p-7 rounded-xl">

                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className="bg-white border-b-2">
                                <tr>
                                    <th className="bg-white"></th>
                                    <th className="bg-white">Name</th>
                                    <th className="bg-white">User Email</th>
                                    <th className="bg-white">type</th>
                                    <th className="bg-white">Price</th>
                                    <th className="bg-white">Validation</th>
                                    <th className="bg-white">Location</th>

                                    <th className="bg-white ">Options</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {
                                      
                                        loading ?
    
                                          <button className="btn loading m-10 ">loading</button>
                                          :
                                    favourites?.map((product, i) =>

                                        <tr>
                                            <td>
                                                {i + 1}
                                            </td>

                                            <td>
                                                <div className="flex items-center">
                                                    <div className="avatar mr-2">
                                                        <div className="w-12 rounded">
                                                            <img src={product.homes.image
                                                            } alt='' />
                                                        </div>
                                                    </div>
                                                    <p className="text-slate-400 text-sm">
                                                        {product.homes.name}
                                                    </p>
                                                </div>
                                            </td>
                                            <td>
                                                <p>{product.email}</p>
                                            </td>
                                            <td>
                                                <p>{product.homes.type}</p>
                                            </td>

                                            <td>

                                                <p className="text-sm text-slate-400">
                                                    <b className="text-black">Base Price: </b>${product.homes.price}
                                                </p>

                                            </td>

                                            <td>
                                                {product.homes.validation}
                                            </td>
                                            <td>
                                                {product.homes.location}
                                            </td>


                                            <td className="w-full">
                                                <div className="flex items-center ">
                                                    <Link to={`/allHome/details/${product.homes._id}`}>

                                                        <label
                                                            className="w-8 h-8 bg-green-200 inline-block rounded-full text-center cursor-pointer group hover:bg-green-500 duration-300 mr-1"
                                                            htmlFor=""
                                                        >
                                                            <p className=' mt-2 ml-2 text-green-700 group-hover:text-white duration-300'>
                                                                <HiEye></HiEye>
                                                            </p>
                                                        </label>
                                                    </Link>
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
                    {/* <div className=" mt-5 paigination">
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

                    </div> */}
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

export default FavouritesList;