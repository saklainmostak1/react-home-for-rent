import React from 'react';

const CartModal = ({favourites}) => {


    let total = 0;
    for (const product of favourites) {
        total = total + product.price
    }
    let myNumber = (favourites.map(favourites => parseInt(favourites.homes.price)))
    let sum = 0;

    for (let i = 0; i < myNumber.length; i++) {
        sum += myNumber[i];
    }

    return (
        <div>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative lg:w-6/12 max-w-7xl">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                <h3 className="text-lg font-bold mb-3">Order Summary
                </h3>
                <hr />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-6'>
                    <form action="">
                       {      
                        favourites.map(ct =>
                            
                            <div className="bg-white p-5 rounded-md mt-8">

                            <div className=' mt-5 mb-5'>

                                <div className='flex items-center'>
                                    <img className='w-16 mr-4' src={ct.homes.image} alt="" />
                                    <p><small>{ct.homes.name}  </small>
                                    </p>

                                </div>
                                <div className='mt-2'>
                                    <p><strong>Price: {ct.homes.price} TK</strong></p>
                                    
                                </div>
                              

                            </div>
                            <hr />   
                        </div>
                            )
                           
                                                             
                       }


                    </form>
                    <form action="">

                        <div className="bg-white p-5 rounded-md mt-8">

                            <div className='border'>

                                <p className='ml-3 p-2'>Customer Info</p>
                            </div>
                            <div className='border flex justify-center items-center h-[100px]'>

                                <p className='ml-3 p-2 '>No customer information selected.</p>
                            </div>




                            <div className='mt-10'>
                                <div className='flex justify-between mt-5'>
                                    <p>Sub Total</p>
                                    <p>{sum}</p>
                                  
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <p>Tax</p>
                                    <p>$0.00</p>
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <p>Shipping</p>
                                    <p>$0.00</p>
                                </div>
                                <div className='flex justify-between mt-2 mb-5'>
                                    <p>Discount</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between mt-2'>
                                <p><strong>Total</strong></p>
                                <p>{sum}</p>
                               
                            </div>
                        </div>


                    </form>


                </div>
                <div className='mt-5 grid lg:flex lg:justify-end '>

                <label htmlFor="my-modal-3"  className='btn bg-blue-400 text-white mr-2 mb-1 border-none'>Confirm With Cash</label>

                </div>
            </div>

        </div>
    </div>
    );
};

export default CartModal;