import React from 'react';

const AddAProducts = () => {
    return (
        <div className='m-10'>
            <h2 className="text-4xl text-center mb-5">Add Products</h2>
            <form >
                {/* <h2 className="text-4xl">{}</h2>
            <h4 className="text-3xl">Price: $ {}</h4> */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder="Products Name" className="input input-bordered input-success w-full " required />
                    <input name='price' type="text" placeholder="Products Price" className="input input-bordered input-success w-full " required />
                    <input name='photoURL' type="text" placeholder="Products Photo" className="input input-bordered input-success w-full " required />
                    <input name='Rating' type="text" placeholder="Rating"
                        className="input input-bordered input-success w-full " required />
                </div>
                <textarea name='description' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Add Description"></textarea>
                <input className='btn btn-outline btn-info mb-5' type="submit" value="Add Products" />
            </form>
        </div>
        
    );
};

export default AddAProducts;