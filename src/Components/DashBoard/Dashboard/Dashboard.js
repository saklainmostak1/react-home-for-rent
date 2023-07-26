import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';
import { useQuery } from 'react-query';
import Loading from '../../Pages/Shared/Loading/Loading';

const Dashboard = () => {

    const { user } = useContext(AuthContext)
    console.log(user);

    const { data: users = [], isLoading
    } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://home-for-rent-server.vercel.app/user?email=${user?.email}`)
            const data = await res.json()
            return data

        }
    })
    if (isLoading) {
        <Loading></Loading>
    }


    return (
        <div>
               
        <div className=' mt-10 grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1'>
   {
       users.map(profile =>

        //    <div >
        //         <h2 className='text-center text-green-600 font-bold text-6xl'>Welcome to {profile.role}  dashboard</h2>
        //         <img src={profile.photo} alt="" />
        //    </div>
        <div className="card  text-neutral-content">
        <div className="card-body items-center text-center">
        <h2 className='text-center text-green-600 font-bold text-6xl'>Welcome to {profile.role}  dashboard</h2>
          <div className="text-3xl mt-10 text-black">
          <p >{profile.name}</p>
           {profile.email}
          </div>
        </div>
      </div>

       )
   }

</div> 
      
  
</div>
    );
};

export default Dashboard;