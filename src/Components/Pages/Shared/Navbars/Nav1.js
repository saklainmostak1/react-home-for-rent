import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram, } from 'react-icons/fa';
import { HiPhone } from "react-icons/hi2";
import { IoIosAlarm, IoIosGlobe, IoIosArrowDown } from "react-icons/io";
const Nav1 = () => {
    return (
        <div className='container mx-auto  mt-4 mb-4 text-[#15396D] font-bold'>
            <div className='hidden lg:block'>

                <div className='flex justify-between'>
                    <div className='flex justify-between gap-3'>
                        <FaFacebook></FaFacebook>
                        <FaInstagram></FaInstagram>
                        <FaLinkedin></FaLinkedin>
                        <FaTwitter></FaTwitter>
                        <FaWhatsapp></FaWhatsapp>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <HiPhone></HiPhone>
                        <p className='mt-[-5px]'>01884770707</p>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <IoIosAlarm></IoIosAlarm>
                        <p className='mt-[-5px]'>Monday - Friday (8AM - 6PM CST)</p>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <IoIosGlobe></IoIosGlobe>
                        <p className='mt-[-5px]'>English  </p>
                        <IoIosArrowDown></IoIosArrowDown>
                    </div>

                </div>
            </div>
            <div className='block lg:hidden '>
                <div className='flex  gap-2 mb-4 justify-center'>
                    <HiPhone></HiPhone>
                    <p className='mt-[-5px]'>01884770707</p>
                </div>
                <div className='flex  gap-2 justify-center'>
                    <IoIosAlarm></IoIosAlarm>
                    <p className='mt-[-5px]'>Monday - Friday (8AM - 6PM CST)</p>
                </div>
            </div>
           
        </div>
    );
};

export default Nav1;