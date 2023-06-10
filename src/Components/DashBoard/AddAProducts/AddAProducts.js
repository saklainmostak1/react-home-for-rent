import React, { useEffect, useState } from 'react';

const AddAProducts = () => {

    const [categories, setCategories] = useState([])
    

    useEffect(() => {
        fetch(`http://localhost:5001/category`)
            .then(Response => Response.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);





    
    const [name, setName] = useState('')
    const [category_id, setCategory_id] = useState('')
    const [type, setType] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [posted_date, setPosted_date] = useState('')
    const [location, setLocation] = useState('')
    const [validation, setValidation] = useState('')
    const [description, setDescription] = useState('')
    const [more_description, setMore_description] = useState('')
    const [additional_info, setAdditional_info] = useState('')
   





    useEffect(() => {
        getBrands()
    }, [])


    const getBrands = async () => {
        let result = await fetch(`http://localhost:5001/products`)
        result = await result.json()
        setName(result.name)
        setCategory_id(result.category_id)
        setType(result.type)
        setImage(result.image)
        setPrice(result.price)
        setPosted_date(result.posted_date)
        setLocation(result.location)
        setValidation(result.validation)
        setDescription(result.description)
        setMore_description(result.more_description)
        setAdditional_info(result.additional_info)


    }




    const addHome = async () => {

        console.log('PHOTO:');
        const h = {}; //headers
        let data = new FormData();
      
        data.append('name', name);
        data.append('category_id', category_id)
        data.append('type', type)
        data.append('image', image)
        data.append('price', price)
        data.append('posted_date', posted_date)
        data.append('location', location)
        data.append('validation', validation)
        data.append('description', description)
        data.append('more_description', more_description)
        data.append('additional_info', additional_info)
        



        h.Accept = 'application/json';
        fetch(`http://localhost:5001/products`, {
            method: 'POST',
            headers: h,
            body: data
        }).then(response => {
            response.json()
            console.log(response)

        }).catch(err => {
            console.log(err)

        });

        console.log(name, category_id, type, image, price, posted_date,location, validation, description, more_description, additional_info)

    }

  


    return (
        <div className='m-5'>
            <h2 className="text-4xl text-center mb-5">Add Products</h2>
           
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder=" Name" className="input input-bordered input-success w-full " required />
                    <select name="" id="" className="input input-bordered input-success w-full ">
                        <option >Select One Category</option>
                        {
                            categories.map((categori) =>
                                <>

                                    <option value={categori.id}>{categori.name}</option>

                                </>
                            )
                        }
                    </select>

                    <select name="" id="" className="input input-bordered input-success w-full ">
                        <option >Select One Type</option>
                        <option >For Rent Only</option>
                        <option >For Sell Only</option>

                    </select>
                    <input type="file" name="" id="" className="input input-bordered input-success w-full " />
                    <input name='price' type="text" placeholder=" Price" className="input input-bordered input-success w-full " required />
                    <input type="date" name="" id="" className="input input-bordered input-success w-full " />
                    <input name='' type="text" placeholder="Validation Months / Year"
                        className="input input-bordered input-success w-full " required />

                    <input name='' type="text" placeholder="location"
                        className="input input-bordered input-success w-full " required />
                    <input name='' type="text" placeholder="More Description"
                        className="input input-bordered input-success w-full " required />  <input name='' type="text" placeholder="additional info"
                            className="input input-bordered input-success w-full " required />
                </div>
                <textarea name='description' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Add Description"></textarea>
                <input 
                onClick={addHome}
                
                className='btn btn-outline btn-info mb-5' type="submit" value="Add Products" />
          
        </div>

    );
};

export default AddAProducts;