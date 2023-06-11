import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const AddAProducts = () => {

    const [categories, setCategories] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5001/category`)
            .then(Response => Response.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);






    // const [name, setName] = useState('')
    // const [category_id, setCategoryId] = useState('')
    // const [type, setType] = useState('')
    // const [image, setImage] = useState('')
    // const [price, setPrice] = useState('')
    // const [posted_date, setPosteDate] = useState('')
    // const [location, setLocation] = useState('')
    // const [validation, setValidation] = useState('')
    // const [description, setDescription] = useState('')
    // const [more_description, setMoreDescription] = useState('')
    // const [additional_info, setAdditionalInfo] = useState('')






    // useEffect(() => {
    //     getBrands()
    // }, [])


    // const getBrands = async () => {
    //     let result = await fetch(`http://localhost:5001/allHome`)
    //     result = await result.json()
    //     setName(result.name)
    //     setCategoryId(result.category_id)
    //     setType(result.type)
    //     setImage(result.image)
    //     setPrice(result.price)
    //     setPosteDate(result.posted_date)
    //     setLocation(result.location)
    //     setValidation(result.validation)
    //     setDescription(result.description)
    //     setMoreDescription(result.more_description)
    //     setAdditionalInfo(result.additional_info)


    // }




    // const addHome = async () => {

    //     console.log('PHOTO:');
    //     const h = {}; //headers
    //     let data = new FormData();

    //     data.append('name', name);
    //     data.append('category_id', category_id)
    //     data.append('type', type)
    //     data.append('image', image)
    //     data.append('price', price)
    //     data.append('posted_date', posted_date)
    //     data.append('location', location)
    //     data.append('validation', validation)
    //     data.append('description', description)
    //     data.append('more_description', more_description)
    //     data.append('additional_info', additional_info)




    //     h.Accept = 'application/json';
    //     fetch(`http://localhost:5001/allHome`, {
    //         method: 'POST',
    //         headers: h,
    //         body: data
    //     }).then(response => {
    //         response.json()
    //         console.log(response)

    //     }).catch(err => {
    //         console.log(err)

    //     });

    //     console.log(name, category_id, type, image, price, posted_date,location, validation, description, more_description, additional_info)

    // }


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
        const moreSescription = form.moreSescription.value
        const additionalInfo = form.additionalInfo.value
        const description = form.description.value

        console.log(name, category, type, image, price, date, validation, location, moreSescription, additionalInfo, description);

        const addProducts = {
            name, category_id: category, type, image, price, posted_date: date, validation, location, more_description: moreSescription, additional_info: additionalInfo, description
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

                    toast.success('Sucessfully add')
                    // refetch()
                }
            })
            .catch(error => console.error(error))
        form.reset('')
    }

    return (
        <div className='m-5'>
            <h2 className="text-4xl text-center mb-5">Add Products</h2>
            <form onSubmit={handleAddProducts}>
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
                    {/* <input type="file"
                        name='image'
                        className="input input-bordered input-success w-full " /> */}
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
            </form>
            {/* <button
                
                className="bg-[#ff8084] text-white px-6 py-2 lg:font-medium text-small lg:text-sm rounded-md my-7 cursor-pointer ">
                Save & Publish
            </button> */}

        </div>

    );
};

export default AddAProducts;