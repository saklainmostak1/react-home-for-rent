import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const UpdateProductsReviews = () => {


    const {id} = useParams()
    console.log(id)


    const [homeReviews, setHomeReviews] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5001/homeReviews/${id}`)
      .then(Response => Response.json())
      .then(data => setHomeReviews(data))
  }, [id])

console.log(homeReviews, 'nayan')


const handleEditHome = event => {
    event.preventDefault()
    fetch(`http://localhost:5001/allHome-review-update/${homeReviews._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(homeReviews)
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
    const review = { ...homeReviews }
    review[field ] = value
    setHomeReviews(review)
  }



    return (
        <div className=''>
        <form action=""  onSubmit={handleEditHome}>
          <div className=" px-5 pt-10 pb-10 bg-[#ddddddac]">
            <div className="container mx-auto ">
            <h1 className="font-bold text-2xl">Update product</h1>
              <div className=" mt-8  w-full lg:mr-5 ">
                <div className=" bg-white p-5 rounded-md">
                  <h3 className="text-xl font-bold">Product Information</h3>
                  <div className="divider"></div>
                  <div className="mt-6 lg:flex md:flex items-center">
                    <div className="w-60">
                      <label htmlFor="">
                        Product Name
                        <sup>
                          <span className="text-red-500 mr-1">*</span>
                        </sup>
                      </label>
                    </div>
                    <input
                     defaultValue={homeReviews.productName}
                      disabled
                      placeholder="Product Name"
                      type="text"
                      className="input input-bordered mt-1 w-full rounded-sm"
                    />
                  </div>
                  <div className="mt-6 lg:flex md:flex items-center">
                    <div className="w-60">
                      <label htmlFor="">
                        Your Name
                        <sup>
                          <span className="text-red-500 mr-1">*</span>
                        </sup>
                      </label>
                    </div>
                    <input
                     
                      defaultValue={homeReviews.name}
                      disabled
                      placeholder="Product Name"
                      type="text"
                      className="input input-bordered mt-1 w-full rounded-sm"
                    />
                  </div>
                  <div className="mt-6 lg:flex md:flex items-center">
                    <div className="w-60">
                      <label htmlFor="">
                        Rating 
                        <sup>
                          <span className="text-red-500 mr-1">*</span>
                        </sup>
                      </label>
                    </div>
                    <input
                    onChange={handleChange}
                     defaultValue={homeReviews.rating}
                      name='rating'
                      placeholder="Product Name"
                      type="text"
                      className="input input-bordered mt-1 w-full rounded-sm"
                    />
                  </div>
                  <div className="mt-6 lg:flex md:flex items-center">
                    <div className="w-60">
                      <label htmlFor="">
                        Rating Message
                        <sup>
                          <span className="text-red-500 mr-1">*</span>
                        </sup>
                      </label>
                    </div>
                    <input
                    onChange={handleChange}
                     defaultValue={homeReviews.message}
                      name='message'
                      placeholder="Product Name"
                      type="text"
                      className="input input-bordered mt-1 w-full rounded-sm"
                    />
                  </div>

                </div>
  
  
  
  
              </div>
           
            </div>
            <div className="flex justify-end">
  
              <input
  
                className='btn mt-5 btn-outline btn-info mb-5' type="submit" value="Update Products" />
            </div>
  
          </div>
        </form>
  
      </div>
    );
};

export default UpdateProductsReviews;