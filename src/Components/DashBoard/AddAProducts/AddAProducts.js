import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AddAProducts = () => {


    const { data: categories = [], isLoading, refetch
    } = useQuery({
        queryKey: ['useres'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5001/category')
            const data = await res.json()
            return data
        }
    })




    const handleAddProducts = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const category = form.category.value
        const type = form.type.value
        const image = form.image.value
        const price = form.price.value
        const date = form.date.value
        const validation = form.validation.value
        const location = form.location.value
        const moredescription = form.moredescription.value
        const additionalInfo = form.additionalInfo.value
        const description = form.description.value

        console.log(name, category, type, image, price, date, validation, location, moredescription, additionalInfo, description);

        const addProducts = {
            name, category_id: category, type, image, price, posted_date: date, validation, location, more_description: moredescription, additional_info: additionalInfo, description
        }
        fetch('http://localhost:5001/allHome', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProducts)

        })
            .then(Response => Response.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {

                    refetch()
                    toast.success('Sucessfully add')
                }
            })
            .catch(error => console.error(error))
        form.reset('')
    }

    return (
        <div className=''>
            <h2 className="text-4xl text-center mb-5">Add Products</h2>
            <form onSubmit={handleAddProducts}>
                <div className="container mx-auto px-3 pt-10 pb-10 bg-[#ddddddac]">
                    <h1 className="font-bold text-2xl ">Add product</h1>
                    <div className="lg:flex ">
                        <div className=" mt-8 lg:w-[50%] w-full lg:mr-5">
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
                                        name='name'
                                        placeholder="Product Name"
                                        type="text"
                                        className="input input-bordered mt-1 w-full rounded-sm"
                                    />
                                </div>



                                <div className="mt-8 lg:flex md:flex items-center">
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
                                            name='category'
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

                                <div className="mt-8 lg:flex md:flex items-center">
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
                                            name='type'
                                            className="select select-bordered w-full rounded-sm"

                                            id=""

                                        >
                                            <option disabled selected>Select One Type</option>
                                            <option >For Rent Only</option>
                                            <option >For Sell Only</option>

                                        </select>
                                    </div>
                                </div>



                                <div className="bg-white rounded-md mt-8">


                                    <div className="mt-8 lg:flex md:flex items-center">
                                        <div className="w-60">
                                            <label htmlFor="">
                                                Price
                                                <sup>
                                                    <span className="text-red-500 mr-1">*</span>
                                                </sup>
                                            </label>
                                        </div>
                                        <input
                                            name='price'
                                            placeholder="Product Name"
                                            type="text"
                                            className="input input-bordered mt-1 w-full rounded-sm"
                                        />
                                    </div>
                                    <div className="mt-8 lg:flex md:flex items-center">
                                        <div className="w-60">
                                            <label htmlFor="">
                                                Location
                                                <sup>
                                                    <span className="text-red-500 mr-1">*</span>
                                                </sup>
                                            </label>
                                        </div>
                                        <input
                                            name='location'
                                            placeholder="Product Name"
                                            type="text"
                                            className="input input-bordered mt-1 w-full rounded-sm"
                                        />
                                    </div>
                                    <div className="mt-8 lg:flex md:flex items-center">
                                        <div className="w-60">
                                            <label htmlFor="">
                                                Validation
                                                <sup>
                                                    <span className="text-red-500 mr-1">*</span>
                                                </sup>
                                            </label>
                                        </div>
                                        <input
                                            name='validation'

                                            placeholder="Product Name"
                                            type="text"
                                            className="input input-bordered mt-1 w-full rounded-sm"
                                        />
                                    </div>

                                    <div className="mt-8 lg:flex md:flex items-center">
                                        <div className="w-60">
                                            <label htmlFor="">
                                                Posted Date
                                                <sup>
                                                    <span className="text-red-500 mr-1">*</span>
                                                </sup>
                                            </label>
                                        </div>
                                        <input
                                            name='date'
                                            placeholder="Product Name"
                                            type="date"
                                            className="input input-bordered mt-1 w-full rounded-sm"
                                        />
                                    </div>

                                </div>


                            </div>

                        </div>
                        <div className="lg:w-[50%] w-full">


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

                            <div className="bg-white p-5 rounded-md mt-6">
                                <h3 className="text-xl font-bold">Product Description</h3>
                                <div className="divider"></div>

                                <div className="mt-4 lg:flex md:flex ">
                                    <div className="w-60 mb-1">
                                        <label htmlFor="">Description</label>
                                    </div>
                                    <div className="w-full">
                                        <textarea
                                            name='description'
                                            type='text'
                                            id=""
                                            className="textarea textarea-bordered w-full"
                                            cols="30"
                                            rows="4"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="mt-4 lg:flex md:flex ">
                                    <div className="w-60 mb-1">
                                        <label htmlFor="">More Description</label>
                                    </div>
                                    <div className="w-full">
                                        <textarea
                                            name='moredescription'
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
                                            name='additionalInfo'
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
                    </div>
                    <div className="flex justify-end">
                        <input

                            className="bg-[#ff8084] text-white px-6 py-2 lg:font-medium text-small lg:text-sm rounded-md my-7 cursor-pointer " type="submit" />
                        {/* <button

                        className="bg-[#ff8084] text-white px-6 py-2 lg:font-medium text-small lg:text-sm rounded-md my-7 cursor-pointer ">
                        Save & Publish
                    </button> */}
                    </div>

                </div>
            </form>

            {/* <form onSubmit={handleAddProducts}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input
                        name='name'
                        type="text" placeholder=" Name" className="input input-bordered input-success w-full " required />
                    <select
                        name='category'
                        className="input input-bordered input-success w-full ">
                        <option >Select One Category</option>
                        {
                            categories.map((categori) =>
                                <>
                                    <option value={categori.id}>{categori.name}</option>
                                </>
                            )
                        }
                    </select>

                    <select
                        name='type'
                        className="input input-bordered input-success w-full ">
                        <option >Select One Type</option>
                        <option >For Rent Only</option>
                        <option >For Sell Only</option>

                    </select>
                    <input type="file"
                        name='image'
                        className="input input-bordered input-success w-full " />
                    <input type="text"
                        placeholder='Photo Url'
                        name='image'
                        className="input input-bordered input-success w-full " />
                    <input
                        name='price'
                        type="text" placeholder=" Price" className="input input-bordered input-success w-full " required />
                    <input type="date"
                        name='date'
                        className="input input-bordered input-success w-full " />
                    <input
                        name='validation'
                        type="text" placeholder="Validation Months / Year"
                        className="input input-bordered input-success w-full " required />

                    <input
                        name='location'
                        type="text" placeholder="location"
                        className="input input-bordered input-success w-full " required />
                    <input
                        name='moreSescription'

                        type="text" placeholder="More Description"
                        className="input input-bordered input-success w-full " required />  <input
                        name='additionalInfo'
                        type="text" placeholder="additional info"
                        className="input input-bordered input-success w-full " required />
                </div>
                <textarea
                    name='description'
                    className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Add Description"></textarea>
                <input


                    className='btn btn-outline btn-info mb-5' type="submit" value="Add Products" />
            </form> */}
            {/* <button
                
                className="bg-[#ff8084] text-white px-6 py-2 lg:font-medium text-small lg:text-sm rounded-md my-7 cursor-pointer ">
                Save & Publish
            </button> */}

        </div>

    );
};

export default AddAProducts;