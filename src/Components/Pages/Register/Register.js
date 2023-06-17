import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import img from '../Login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';

const Register = () => {


    const { createUser, providerLogin, updateUser } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    // const [createdUserEmail, setCreatedUserEmail] = useState('')


    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const role = form.role.value
        const photo = form.photo.value

        const users = { name, email, role, photo }
        console.log(name, email, password, photo);

        fetch('http://localhost:5001/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)

        })
            .then(Response => Response.json())
            .then(data => {
                //   setCreatedUserEmail(email)
                console.log(data)
                if (data.acknowledged) {

                    toast.success('Register Sucessfully')

                }
            })
            .catch(error => console.error(error))
        form.reset('')
        createUser(email, password)
            .then(result => {
                const user = result.user

                console.log(user)
                handleUpdateProfile(name, photo)
                //   
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleUpdateProfile = (name, photo) => {
        // , 
        const profile = {
            displayName: name,
            photoURL: photo

        }


        updateUser(profile)
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }
    const handleGoogleSignIn = () => {
        return providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user);
                toast.success('Successfully Register!');

            })
            .catch(error => console.error(error))
    }





    return (



        <div className='mt-10'>
            <div className='grid justify-center '>
                <img
                    className=''
                    src=''
                    alt="" />
                <h2 className='text-center text-3xl text-orange-600 font-bold'>
                    Welcome
                    <br />

                    <span className='ml-2' style={{ color: 'green', fontWeight: 'bold' }}>

                        <Typewriter

                            words={['To Our Website']}
                            loop={''}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />
                    </span>

                </h2>
                <h4 className='text-center mt-2'>Please Registration From Here</h4>
            </div>
            <div className="hero my-20 w-full">
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lag:flex-row ">
                    <div className="text-center  lg:text-left">
                        <img className='w-3/4' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5 ">
                        <h1 className="text-3xl font-bold text-center">Registration From Here!</h1>
                        <form onSubmit={handleRegister} >
                            <div className='card-body'>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="First Name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Role</span>
                                    </label>

                                    <select name="role" id="" className="input input-bordered">
                                        <option >Buyer</option>
                                        <option >Seller</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
                                </div>
                                {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name='Last Name' placeholder="Last Name" className="input input-bordered" required />
                        </div> */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input

                                        type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />


                                </div>

                                <div className='flex justify-between'>
                                    <label className="label">
                                        <input type="checkbox" name="" id="" className='mr-2' />
                                        <Link href="#" className="label-text-alt link link-hover">Remember Me</Link>

                                    </label>
                                    <label className="label">
                                        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input

                                        type="submit" className="btn btn-primary" value="Register" />
                                </div>
                            </div>
                        </form>

                        <div className='card-body'>
                            <div
                                class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p class="text-center font-semibold mx-4 mb-0">Or</p>
                            </div>
                            <div className='flex justify-center'>
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="mr-1 btn btn-circle bg-red-700 border-none text-white">< FaGoogle></FaGoogle></button>
                                <button className="mr-1 btn btn-circle bg-sky-500 border-none text-white">< FaTwitter></FaTwitter></button>
                                <button className="mr-1 btn btn-circle bg-blue-900 border-none text-white">< FaFacebook></FaFacebook></button>
                                <button className="mr-1 btn btn-circle bg-sky-800 border-none text-white">< FaLinkedin></FaLinkedin></button>
                            </div>
                            <label className="label">
                                <p className='text-center mt-5'>Already Have An Account - <Link className='text-orange-600 font-bold' to='/login'>Login</Link> </p>
                            </label>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;