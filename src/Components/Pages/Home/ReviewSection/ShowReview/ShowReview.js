import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useQuery } from 'react-query';
import AddReviews from '../AddReview/AddReviews';

const ShowReview = () => {


    const { data: webSiteReview = [], isLoading, refetch
    } = useQuery({
        queryKey: ['webSiteReview'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5001/webSite-review')
            const data = await res.json()
            return data
        }
    })


    return (
       <div>
         <div className='container mx-auto'>
            <div className=' grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>


                {
                    webSiteReview.map((reviewShow) =>

                        <div className="card my-10 mx-5 bg-emerald-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <div className="avatar">
                                    <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={reviewShow.photo} alt='' />
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Name : {reviewShow.name} </h2>
                                <p className='mt-5 text-xl'>Email : {reviewShow.email} <br /></p>
                                <p>Review Message:{reviewShow.message}</p>
                                <div className='flex text-orange-300'>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                </div>
                            </div>
                        </div>

                    )
                }










            </div>
        </div>
        <div>
            <AddReviews
            refetch={refetch}
            ></AddReviews>
        </div>
       </div>
    );
};

export default ShowReview;