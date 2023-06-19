import React, { useContext } from 'react';
import { FaBars, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Authentication/AuthProvider';
import { toast } from 'react-hot-toast';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';

const Nav2 = () => {





  const { user, logOut } = useContext(AuthContext)
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  console.log(user);

  const { data: myProfile = [], isLoading
  } = useQuery({
    queryKey: ['myProfile'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5001/user?email=${user?.email}`)
      const data = await res.json()
      return data

    }
  })
  console.log(myProfile);
  if (isLoading) {
    return <Loading></Loading>
  }


  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('login')
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <>
      <nav className="relative bg-[#15396D] flex flex-wrap items-center shadow-xl justify-between px-2 py-3  mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to='/'
            >
              Home For Rent
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars></FaBars>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">



              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to='/'
                >
                  <span className="md:ml-96 lg:ml-2 ">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to='/all-services'
                >
                  <span className="md:ml-96 lg:ml-2 ">All Services</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to='/thank-you'
                >
                  <span className="md:ml-96 lg:ml-2 ">Thank you</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to='/contactMessage'
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="md:ml-96 lg:ml-2">Contact</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to='/blog'
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="md:ml-96 lg:ml-2">Blog</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to='/about-us'
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="md:ml-96 lg:ml-2">About Us</span>
                </Link>
              </li>

              {
                user?.uid ?



                  <>
                    <li className="nav-item">
                      <Link
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        to='/dashboard'
                      >
                        <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="md:ml-96 lg:ml-2">Dashboard</span>
                      </Link>
                    </li>

                    <li>
                      <button >
                        <p className='lg:mt-[-10px]  md:ml-96 lg:ml-2 sm:mt-2 flex'>
                          <div className="dropdown  lg:dropdown-end">
                            <label tabIndex={0} className="btn m-1"><FaUser></FaUser></label>
                            <ul tabIndex={0} className=" dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                              <div className=' mb-2'>

                                <li><Link> {user?.displayName}</Link></li>
                                <div className="avatar online placeholder">
                                  <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                    <img src={user.photoURL} alt="" />
                                  </div>
                                </div>
                              </div>
                              <li className='btn btn-primary'><button onClick={handleLogout}>LogOut</button></li>
                            </ul>

                          </div>
                          {/* <p className='-mt-1 ml-2'> {user?.displayName}</p> */}
                        </p>
                      </button>
                    </li>
                  </>


                  :

                  <>

                    <li className="nav-item">
                      <Link
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        to='/login'
                      >
                        <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="md:ml-96 lg:ml-2">Login</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        to='/register'
                      >
                        <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="md:ml-96 lg:ml-2">Register</span>
                      </Link>
                    </li>
                  </>

              }






            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav2;