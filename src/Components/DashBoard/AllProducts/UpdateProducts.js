import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const UpdateProducts = () => {

  const { id } = useParams()

  const [home, setHome] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5001/allHome/${id}`)
      .then(Response => Response.json())
      .then(data => setHome(data))
  }, [id])


  const [categories, setCategories] = useState([])


  useEffect(() => {
    fetch(`http://localhost:5001/category`)
      .then(Response => Response.json())
      .then(data => setCategories(data))
  }, [])
  console.log(categories);


  console.log(home, 'nayan')


  const handleEditHome = event => {
    event.preventDefault()
    fetch(`http://localhost:5001/allHome-update/${home._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(home)
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
    const review = { ...home }
    review[field ] = value
    setHome(review)
  }



  return (
    <div>
      <form action="" onSubmit={handleEditHome}>
        <div className="container mx-auto px-5 pt-10 pb-10 bg-[#ddddddac]">
          <h1 className="font-bold text-2xl">Update product</h1>
          <div className="lg:flex ">
            <div className=" mt-8 lg:w-[65%] w-full lg:mr-5">
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
                    onChange={handleChange}
                    defaultValue={home.name}
                    name='name'
                    placeholder="Product Name"
                    type="text"
                    className="input input-bordered mt-1 w-full rounded-sm"
                  />
                </div>


                <div className="mt-4 lg:flex md:flex items-center">
                  <div className="w-60 mb-1">
                    <label htmlFor="">
                      Category
                      <sup>
                        <span className="text-red-500 mr-1">*</span>
                      </sup>
                    </label>
                  </div>
                  <div className="w-full">
                    <select

                      className="select select-bordered w-full rounded-sm"

                      id=""

                    >
                      <option selected disabled>Select A Category</option>
                      {
                        categories.map((categori) =>
                          <>
                            <option value={categori.id}>{categori.name}</option>
                          </>
                        )
                      }

                    </select>
                  </div>
                </div>

                <div className="mt-4 lg:flex md:flex items-center">
                  <div className="w-60 mb-1">
                    <label htmlFor="">
                      Type
                      <sup>
                        <span className="text-red-500 mr-1">*</span>
                      </sup>
                    </label>
                  </div>
                  <div className="w-full">
                    <select

                      className="select select-bordered w-full rounded-sm"

                      id=""

                    >

                      <option disabled selected>Select One Type</option>
                      <option >For Rent Only</option>
                      <option >For Sell Only</option>
                    </select>
                  </div>
                </div>


                <div className="mt-4 flex items-center">
                  <div className="w-60">
                    <label htmlFor="">Refundable</label>
                  </div>

                  <input
                    type="checkbox" class="toggle toggle-primary" />
                </div>
              </div>


              <div className="bg-white p-5 rounded-md mt-6">
                <h3 className="text-xl font-bold">Product Description</h3>
                <div className="divider"></div>

                <div className="mt-4 lg:flex md:flex ">
                  <div className="w-60 mb-1">
                    <label htmlFor="">Description</label>
                  </div>
                  <div className="w-full">
                    <textarea
                      defaultValue={home.description}
                      type='text'
                      id=""
                      className="textarea textarea-bordered w-full"
                      cols="30"
                      rows="6"
                    ></textarea>
                  </div>
                </div>
                <div className="mt-4 lg:flex md:flex ">
                  <div className="w-60 mb-1">
                    <label htmlFor="">More Description</label>
                  </div>
                  <div className="w-full">
                    <textarea
                      defaultValue={home.more_description}
                      type='text'
                      id=""
                      className="textarea textarea-bordered w-full"
                      cols="20"
                      rows="2"
                    ></textarea>
                  </div>
                </div>
                <div className="mt-4 lg:flex md:flex ">
                  <div className="w-60 mb-1">
                    <label htmlFor="">Additional Info</label>
                  </div>
                  <div className="w-full">
                    <textarea
                      defaultValue={home.additional_info}
                      type='text'
                      id=""
                      className="textarea textarea-bordered w-full"
                      cols="30"
                      rows="2"
                    ></textarea>
                  </div>
                </div>
              </div>


            </div>
            <div className="lg:w-[35%] w-full">


              <div className="bg-white p-5 rounded-md mt-8">
                <h3 className="text-xl font-bold mb-5">Product Information</h3>
                <hr />
                <div className="mt-6 lg:flex md:flex items-center">
                  <div className="w-60 mb-1">
                    <label htmlFor="">
                      Main Image <br />
                      <small>(600x600)</small>
                    </label>
                  </div>
                  <div className="w-full">
                    <input
                      type="file"
                      class="file-input file-input-bordered w-full"
                    />
                    <p className="leading-[15px]">
                      <small className="leading-4">
                        These images are visible in product details page gallery.
                        Use 600x600 sizes images.
                      </small>
                    </p>
                  </div>
                </div>
                <div className="mt-6 lg:flex md:flex items-center">
                  <div className="w-60 mb-1">
                    <label htmlFor="">
                      Main  Image two<br />
                      <small>(300x300)</small>
                    </label>
                  </div>
                  <div className="w-full">
                    <input
                     onChange={handleChange}
                     name='image'
                     type='text'
                      class="file-input file-input-bordered w-full"
                    />
                    <p className="leading-[15px]">
                      <small className="leading-4">
                        These images are visible in product details page gallery.
                        Use 600x600 sizes images.
                      </small>
                    </p>
                  </div>
                </div>

              </div>





              <div className="bg-white p-5 rounded-md mt-8">
                <h3 className="text-xl font-bold">More info</h3>
                <div className="divider"></div>
                <div className="mt-6 lg:flex md:flex items-center">
                  <div className="w-60">
                    <label htmlFor="">
                      Price
                      <sup>
                        <span className="text-red-500 mr-1">*</span>
                      </sup>
                    </label>
                  </div>
                  <input
                    onChange={handleChange}
                    defaultValue={home.price}
                    placeholder="Product Name"
                    name='price'
                    type="text"
                    className="input input-bordered mt-1 w-full rounded-sm"
                  />
                </div>
                <div className="mt-6 lg:flex md:flex items-center">
                  <div className="w-60">
                    <label htmlFor="">
                      Location
                      <sup>
                        <span className="text-red-500 mr-1">*</span>
                      </sup>
                    </label>
                  </div>
                  <input
                    defaultValue={home.location}
                    placeholder="Product Name"
                    type="text"
                    className="input input-bordered mt-1 w-full rounded-sm"
                  />
                </div>
                <div className="mt-6 lg:flex md:flex items-center">
                  <div className="w-60">
                    <label htmlFor="">
                      Validation
                      <sup>
                        <span className="text-red-500 mr-1">*</span>
                      </sup>
                    </label>
                  </div>
                  <input
                  onChange={handleChange}
                    defaultValue={home.validation}
                    name='validation'
                    placeholder="Product Name"
                    type="text"
                    className="input input-bordered mt-1 w-full rounded-sm"
                  />
                </div>

                <div className="mt-6 lg:flex md:flex items-center">
                  <div className="w-60">
                    <label htmlFor="">
                      Posted Date
                      <sup>
                        <span className="text-red-500 mr-1">*</span>
                      </sup>
                    </label>
                  </div>
                  <input
                    defaultValue={home.posted_date}
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

export default UpdateProducts;