import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const EditProfile = () => {


    const updateProfile = useLoaderData()

    console.log(updateProfile)

    const [editProfile, setEditProfile] = useState(updateProfile)
    const handleEditHome = event => {
        event.preventDefault()
        fetch(`http://localhost:5001/users/${editProfile._id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(editProfile)
        })
          .then(Response => Response.json())
          .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
              console.log(data)
              toast.success('Successfully Update!');
            }
    
          })
      }
    
      const handleChange = event => {
        const field = event.target.name
        const value = event.target.value
        const review = { ...editProfile }
        review[field ] = value
        setEditProfile(review)
      }


    return (
        <div className='w-[50%] mx-auto'>
        <div className="mt-8 bg-white p-7 rounded-xl ">
            <div className="border-b-2">
                <h2 className="font-medium text-xl mb-3 ">Edit Profile From Here</h2>
            </div>
          

                    <div>
                        <form action="" onSubmit={handleEditHome}>
                            <div className="mt-5">
                                {" "}
                                <label htmlFor="">Name</label> <br />
                                <input
                                    defaultValue={updateProfile.name}
                                    onChange={handleChange}
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
                                onChange={handleChange}
                                defaultValue={updateProfile.photo}
                                    name="photo"
                                    type="text"
                                    className="input input-bordered rounded-none w-full mt-3"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="mt-5">
                                {" "}
                                <label htmlFor="">Email</label> <br />
                                <input
                                  onChange={handleChange}
                                defaultValue={updateProfile.email}
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

             
        </div>
    </div>

    );
};

export default EditProfile;