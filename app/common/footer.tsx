"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { faMessages } from '@fortawesome/free-solid-svg-icons';
import Modal from '../components/Chat';

export default function Footer()
{


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return(
        <React.Fragment>
        <footer className="bg-[#282828] text-gray-600 body-font ">
        <div className="container px-5 py-16 mx-auto text-white">
            <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium tracking-widest text-sm mb-5">QUICK LINKS</h2>
                <nav className="list-none">
                <li className="mb-3">
                    <a href="../pages/track-order" className="hover:text-gray-300">Track Order</a>
                </li>
                <li className="mb-3">
                    <a href="../pages/refunds-cancellations" className="hover:text-gray-300">Refunds & Cancellations Policy</a>
                </li>
                <li className="mb-3">
                    <a href="../pages/about-us" className="hover:text-gray-300">About Us</a>
                </li>
                <li className="mb-3">
                    <a href="../pages/terms-of-service" className="hover:text-gray-300">Terms of Service</a>
                </li>
                <li className="mb-3">
                    <a href="../pages/contact-us" className="hover:text-gray-300">Contact Us</a>
                </li>
                <li className="mb-3">
                    <a href="../pages/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
                </li>
                <li>
                    <a href="../pages/return-order" className="hover:text-gray-300">Return Your Order</a>
                </li>
                </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium tracking-widest text-sm mb-3">CONTACT</h2>
                <nav className="list-none">
                <li className="mb-3">
                    <a className="hover:text-gray-300" href="tel:+91 8885978692">+91 8885978692</a>
                </li>
                <li>
                    <a className="hover:text-gray-300">Mon-Sat 10 Am To 7 Pm</a>
                </li>
                </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium tracking-widest text-sm mb-3">FOLLOW US</h2>
                <nav className="list-none">
                <li>
                <div className="md:flex gap-5">
                    <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebookF} className="text-white h-4 w-4"/></a>
                    <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faXTwitter} className="text-white h-4 w-4"/></a>
                    <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="text-white h-4 w-4"/></a>
                </div>
                </li>
                </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium tracking-widest text-sm mb-3">NEWSLETTER</h2>
                <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                    <input type="text" id="footer-field" name="footer-field" placeholder="Your Email" className="bg-transparent w-full rounded border border-white focus:bg-transparent focus:ring-2 focus:ring-white-200 focus:border-white-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-transparent border-0 py-2 px-6 focus:outline-none rounded">
                <FontAwesomeIcon icon={faArrowRight} className="text-white h-5 w-5"/>
                </button>
                </div>
            </div>
            </div>
        </div>


        <div className="bg-[#282828]">
            <div className="container mx-auto sm:px-8 flex flex-wrap flex-col sm:flex-row">
            <h2 className="text-white">© Adilqadri - Developed by D2Cbox</h2>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
                <div className="bg-transparent top-btn justify-items-end flex justify-end">
                    <FontAwesomeIcon icon={faComment} onClick={openModal} className="text-[#3690eb] h-10 w-10"/>
                    <Modal isOpen={isModalOpen} onClose={closeModal} />
                    {/* <FontAwesomeIcon icon={faMessages} className="text-[#3690eb] h-10 w-10"/> */}
                </div>    
            </span>
            </div>
        </div>
        </footer>



        <div className="sticky bottom-0">  
            <div className="bg-[#191919]">
            <div className="container flex flex-wrap w-full mx-auto items-center">
                <div className="w-full justify-items-center p-2">
                    <p className="text-white text-xl text-center font-bold">Adil Qadri Rewards | 
                        <a href="#" className="text-white ml-1 font-medium" target="_blank">Get Upto 30% Off Using POPcoins <FontAwesomeIcon icon={faArrowRight} className="text-white h-5 w-5"/></a>
                    </p>
                </div>
            </div>
            </div>  
        </div>
        </React.Fragment>
    );
}    