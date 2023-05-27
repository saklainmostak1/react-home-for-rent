import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram, } from 'react-icons/fa';


const Footer = () => {
   return (
      <div>
         <footer

            className="footer p-10 bg-neutral text-neutral-content">
            <div>
               <span className="footer-title">Services</span>
               <Link to='' className="link link-hover">Design</Link>
               <Link to='' className="link link-hover">Marketing</Link>
               <Link to='' className="link link-hover">Branding</Link>
               <Link to='' className="link link-hover">Advertisement</Link>
            </div>
            <div>
               <span className="footer-title">Company</span>
               <Link to='' className="link link-hover">About us</Link>
               <Link to='' className="link link-hover">Contact</Link>
               <Link to='' className="link link-hover">Jobs</Link>
               <Link to='' className="link link-hover">Press kit</Link>
            </div>
            <div>
               <span className="footer-title">Legal</span>
               <Link to='' className="link link-hover">Terms of use</Link>
               <Link to='' className="link link-hover">Privacy policy</Link>
               <Link to='' className="link link-hover">Cookie policy</Link>
            </div>
            <div className=' '>
               <span className="footer-title">Follow Us On</span>
               <div className='flex gap-3'>
                  <FaFacebook></FaFacebook>
                  <FaInstagram></FaInstagram>
                  <FaLinkedin></FaLinkedin>
                  <FaTwitter></FaTwitter>
                  <FaWhatsapp></FaWhatsapp>
               </div>
            </div>
         </footer>
         <div className='text-center text-[#15396D] font-bold'>
            <p>P.O. Box 5090, Tyler, Texas 75712</p>
            <p>©2023 Service - All Rights Reserved.</p>
         </div>
      </div>
   );
};

export default Footer;