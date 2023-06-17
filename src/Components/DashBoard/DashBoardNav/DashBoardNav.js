import React from 'react';
import { Link,  Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';
import useBuyers from '../../hooks/useBuyers';


const DashBoardNav = () => {

const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isBuyer] = useBuyers(user?.email)

    return (
        <div className=''>


            <div className="drawer">

                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className="navbar ">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost btn-circle" htmlFor="my-drawer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </label>

                            </div>
                        </div>
                        <div className="navbar-center">
                            <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
                        </div>
                        <div className="navbar-end">
                            <button className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                            <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                    <span className="badge badge-xs badge-primary indicator-item"></span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">


                        <li>
                            <Link to='/dashboard'>
                                Dashboard
                            </Link>
                        </li>




                        <div className="collapse ">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex justify-between w-[124%] hover:text-[#ff8084]">
                                <span>
                                    <i class="fa-solid fa-cart-shopping text-xs w-[20px]"></i>Manage Products
                                </span>{" "}
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                            <div className="collapse-content ">
                                <ul>

                                    <li className=" w-[120%] p-0 hover:text-[#ff8084] collapse">
                                        <Link to='/dashboard/addProducts'>
                                            Add A Products
                                        </Link>
                                    </li>

                                    <li className=" w-[120%] p-0 hover:text-[#ff8084] collapse">
                                        <Link to='/dashboard/allProducts'>
                                            All Products
                                        </Link>
                                    </li>
                                    <li className=" w-[120%] p-0 hover:text-[#ff8084] collapse">
                                        <Link to=''>
                                            All   Products Review
                                        </Link>
                                    </li>
                                    <li className=" w-[120%] p-0 hover:text-[#ff8084] collapse">
                                        <Link to=''>
                                            Manage   Products Review
                                        </Link>
                                    </li>



                                </ul>
                            </div>
                        </div>

{/* 
                       {
                        isAdmin &&  */}

                        <div className="collapse ">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title flex justify-between w-[124%] hover:text-[#ff8084]">
                            <span>
                                <i class="fa-solid fa-cart-shopping text-xs w-[20px]"></i> Users
                            </span>{" "}
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                        <div className="collapse-content ">
                            <ul>

                                <li className=" w-[120%] p-0 hover:text-[#ff8084] collapse">
                                    <Link to='/dashboard/all-users'>
                                        All Users
                                    </Link>
                                </li>

                                <li className=" w-[120%] p-0 hover:text-[#ff8084] collapse">
                                    <Link to='/dashboard/all-users/manage'>
                                        Manage  Users
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                       


                   {/* {
                    isBuyer &&  */}

                    <div className="collapse ">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-between w-[124%] hover:text-[#ff8084]">
                        <span>
                            <i class="fa-solid fa-cart-shopping text-xs w-[20px]"></i> Orders
                        </span>{" "}
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="collapse-content ">
                        <ul>

                            <li className=" w-[120%] p-0 hover:text-[#ff8084] collapse">
                                <Link to=''>
                                    All Orders
                                </Link>
                            </li>

                            <li className=" w-[120%] p-0 hover:text-[#ff8084] collapse">
                                <Link to=''>
                                    Manage  Orders
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                   {/* } */}

                        <div className="collapse ">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex justify-between w-[124%] hover:text-[#ff8084]">
                                <span>
                                    <i class="fa-solid fa-cart-shopping text-xs w-[20px]"></i> Manage Website
                                </span>{" "}
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                            <div className="collapse-content ">
                                <ul>

                                    <li className=" w-[120%] p-0 hover:text-[#ff8084] collapse">
                                        <Link to=''>
                                            All Website Review
                                        </Link>
                                    </li>
                                    <li className=" w-[120%] p-0 hover:text-[#ff8084] collapse">
                                        <Link to=''>
                                            Manage Website Review
                                        </Link>
                                    </li>

                                 

                                </ul>
                            </div>
                        </div>

                        <div className="collapse ">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flex justify-between w-[124%] hover:text-[#ff8084]">
                                <span>
                                    <i class="fa-solid fa-cart-shopping text-xs w-[20px]"></i> Payment
                                </span>{" "}
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                            <div className="collapse-content ">
                                <ul>

                                    <li className=" w-[120%] p-0 hover:text-[#ff8084] collapse">
                                        <Link to=''>
                                            Paid Products
                                        </Link>
                                    </li>

                                    <li className=" w-[120%] p-0 hover:text-[#ff8084] collapse">
                                        <Link to=''>
                                            Unpaid Products
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>




                     
                    </ul>

                </div>



            </div>

        </div>
    );
};

export default DashBoardNav;