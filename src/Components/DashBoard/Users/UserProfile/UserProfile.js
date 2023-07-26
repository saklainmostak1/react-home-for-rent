import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Authentication/AuthProvider';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { HiPencilAlt } from 'react-icons/hi';
import EditProfile from './EditProfile';

const UserProfile = () => {



    const { user } = useContext(AuthContext)

    const { data: usersProfile = [], isLoading, refetch
    } = useQuery({
        queryKey: ['usersProfile'],
        queryFn: async () => {
            const res = await fetch(`https://home-for-rent-server.vercel.app/user?email=${user.email}`)
            const data = await res.json()
            return data
        }
    })

    // const [editProfile, setEditProfile] = useState()




    // const handleEditHome = event => {
    //     event.preventDefault()
    //     fetch(`https://home-for-rent-server.vercel.app/users/${editProfile._id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(editProfile)
    //     })
    //         .then(Response => Response.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.modifiedCount > 0) {
    //                 console.log(data)
    //                 toast.success('Successfully Update!');
    //             }

    //         })
    // }

    // const handleChange = event => {
    //     const field = event.target.name
    //     const value = event.target.value
    //     const review = { ...editProfile }
    //     review[field] = value
    //     setEditProfile(review)
    // }

    return (
       <div>
         <div className=''>
            <h2 className='text-4xl text-center bg-black p-5 mt-10 text-white'>User Profile</h2>

            <div className=' max-w-[1400px] mx-auto p-10 bg-slate-300 mt-10'>

                <div className='lg:w-[50%] mx-auto'>
                    <div className=' '>

                        {
                            usersProfile.map(profile =>


                                <div className="card bg-white  lg:m-7  shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <div className="avatar">
                                            <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={profile?.photo} alt='' />
                                            </div>
                                        </div>
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Name : {profile?.name}</h2>
                                        <p className='mt-5 text-xl'>Email : {profile?.email}</p>
                                        <p className='mt-5 text-xl'>Role : {profile?.role}</p>

                                    </div>
                                    <div className='flex justify-center mb-5'>
                                        <Link to={`/dashboard/users/profile/update/${profile._id}`}>

                                            <label
                                                className="w-8 h-8 bg-blue-200 inline-block rounded-full text-center cursor-pointer group hover:bg-blue-500 duration-300 mr-1"
                                                htmlFor=""
                                            >
                                                
                                                <p className=' mt-2 ml-2 text-blue-700 group-hover:text-white duration-300'>
                                                    <HiPencilAlt></HiPencilAlt>
                                                </p>
                                            </label>
                                        </Link>

                                    </div>
                                </div>

                            )
                        }

                    </div>
                </div>

            </div>
        </div>
       
       </div>
    );
};

export default UserProfile;