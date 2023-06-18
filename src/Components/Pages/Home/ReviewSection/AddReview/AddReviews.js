import React from 'react';
import img7 from '../../ReviewSection/AddReview/contact1.png'
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../../Authentication/AuthProvider';
import ShowReview from '../ShowReview/ShowReview';

const AddReviews = ({refetch}) => {

    const { user } = useContext(AuthContext)

    



    const addReview = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photoURL.value
        const rating = form.rating.value
        const message = form.message.value


        console.log(name, email, photo, rating, message);

        const addReview = {
            name, email, photo, rating, message
        }
        fetch('http://localhost:5001/webSite-review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)

        })
            .then(Response => Response.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    toast.success('Sucessfully add')
                    refetch()
                }
            })
            .catch(error => console.error(error))

    }



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

                    <form onSubmit={addReview}>

                        <div>
                            <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>
                                <input name='name'
                                    defaultValue={user?.displayName}
                                    type="text" placeholder="Your Name" className="input input-bordered input-success w-full " required disabled />

                                <input name='email' type="email"
                                    defaultValue={user?.email}
                                    placeholder="email" className="input input-bordered input-success w-full " disabled />
                                <input
                                    disabled defaultValue={user?.photoURL}
                                    name='photoURL' type="text" placeholder="photoURL" className="input input-bordered input-success w-full " />
                                <input name='rating' type="text" placeholder="Ratings" className="input input-bordered input-success w-full " required />

                            </div>
                            <textarea name='message' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Send Your Message" required></textarea>
                            <input className='btn btn-outline btn-info mb-5' type="submit" value="Send Review" />
                        </div>
                    </form>



                </div>


                {/* <img className='rounded-full h-24 w-24' src={user?.photoURL} alt="" /> */}


            </div>
        </div>


    );
};

export default AddReviews;