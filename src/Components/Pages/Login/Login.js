import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../Components/Pages/Login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    
    const { loginWithEmailPAss } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password);
        loginWithEmailPAss(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, {replace: true})
                toast.success('Successfully Login!');


            })
            .catch(error => {
                console.error(error)
            })
    }



    return (
        <div>

            <div className='mt-10'>
                <div className='grid justify-center '>
                    <img
                        className=''
                        src=''
                        alt="" />
                    <h2 className='text-center text-3xl text-orange-600 font-bold'>
                        Welcome <br />
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
                    <h4 className='text-center mt-2'>Login to your account please</h4>
                </div>
                <div className="hero my-20 w-full">
                    <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lag:flex-row ">
                        <div className="text-center  lg:text-left">
                            <img className='w-3/4' src={logo} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5 ">
                            <h1 className="text-3xl font-bold text-center">Login From Here!</h1>
                            <form className="card-body" onSubmit={handleLogin}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />



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
                                    <input type="submit" className="btn btn-primary" value="login" />
                                </div>
                            </form>
                            <div className='card-body'>
                                <div
                                    class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p class="text-center font-semibold mx-4 mb-0">Or</p>
                                </div>
                                <div className='flex justify-center'>
                                    <button className="mr-1 btn btn-circle bg-red-700 border-none text-white">< FaGoogle></FaGoogle></button>
                                    <button className="mr-1 btn btn-circle bg-sky-500 border-none text-white">< FaTwitter></FaTwitter></button>
                                    <button className="mr-1 btn btn-circle bg-blue-900 border-none text-white">< FaFacebook></FaFacebook></button>
                                    <button className="mr-1 btn btn-circle bg-sky-800 border-none text-white">< FaLinkedin></FaLinkedin></button>
                                </div>
                                <label className="label">
                                    <p className='text-center mt-5'>New To Here - <Link to='/register' className='text-orange-600 font-bold'>Sign Up</Link> </p>
                                </label>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;