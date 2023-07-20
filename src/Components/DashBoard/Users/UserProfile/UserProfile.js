import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Authentication/AuthProvider';
import { Link } from 'react-router-dom';

const UserProfile = () => {

    const { user } = useContext(AuthContext)

    const { data: usersProfile = [], isLoading, refetch
    } = useQuery({
        queryKey: ['usersProfile'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5001/user?email=${user.email}`)
            const data = await res.json()
            return data
        }
    })


    return (
        <div className=''>
            <h2 className='text-4xl text-center bg-black p-5 mt-10 text-white'>User Profile</h2>

            <div className='lg:flex  max-w-[1400px] mx-auto p-10 bg-slate-300 mt-10'>

                <div className='lg:w-[50%]'>
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
                                </div>

                            )
                        }

                    </div>
                </div>
                <div className='lg:w-[50%] '>
                    <div className="mt-8 bg-white p-7 rounded-xl ">
                        <div className="border-b-2">
                            <h2 className="font-medium text-xl mb-3 ">Edit Profile From Here</h2>
                        </div>
                        {
                            usersProfile.map((user) =>

                                <div>
                                    <form action="" >
                                        <div className="mt-5">
                                            {" "}
                                            <label htmlFor="">Name</label> <br />
                                            <input
                                                defaultValue={user.name}
                                                name="name"
                                                type="text"
                                                className="input input-bordered rounded-none w-full mt-3"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="mt-5">
                                            {" "}
                                            <label htmlFor="">Image</label> <br />
                                            <input
                                            defaultValue={user.photo}
                                                name="image"
                                                type="text"
                                                className="input input-bordered rounded-none w-full mt-3"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="mt-5">
                                            {" "}
                                            <label htmlFor="">Email</label> <br />
                                            <input
                                            defaultValue={user.email}
                                                name="email"
                                                type="text"
                                                className="input input-bordered rounded-none w-full mt-3"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="text-right mt-5 rounded-md ">
                                            <button className="text-white btn bg-[#f77b0b] border-0 px-6 hover:bg-[#df6d09] duration-200">
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;