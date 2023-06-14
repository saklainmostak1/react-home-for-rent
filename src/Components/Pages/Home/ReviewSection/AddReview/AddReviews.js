import React from 'react';
import img7 from '../../ReviewSection/AddReview/contact1.png'

const AddReviews = () => {
    return (
        <div className='m-5'>
        <div className=' container mx-auto'>
         <h2 className="text-4xl text-center mb-10">Add A Review 
         </h2>
         <div className='lg:flex'>
             <div>
                 <div className="text-center lg:text-left">
                     <img className='w-3/4' src={img7} alt="" />
                 </div>
             </div>
             <div>
                 <form
                 >

                     <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>
                         <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-success w-full " required />
                         <input name='email' type="email" d
                             placeholder="email" className="input input-bordered input-success w-full " />
                         <input name='photoURL' type="photo" placeholder="photoURL" className="input input-bordered input-success w-full " />
                         <input name='rating' type="text" placeholder="Ratings" className="input input-bordered input-success w-full " required />
                         <input name='productName' type="text" placeholder="Products Name" className="input input-bordered input-success w-full " />
                         {/* <img className='rounded-full h-24 w-24' src={user?.photoURL} alt="" /> */}

                     </div>
                     <textarea name='message' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Send Your Message" required></textarea>
                     <input className='btn btn-outline btn-info mb-5' type="submit" value="Send Review" />
                 </form>
             </div>
         </div>


     </div>
  </div>

    );
};

export default AddReviews;