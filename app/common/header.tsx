"use client"
import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import Modal from '../components/Contact';
import Modal1 from '../components/placeorder';
import style from '../components/Cart.module.css';
import styles from '../components/Sidebar.module.css';
import stylee from '../components/Searchbar.module.css';

export default function Header()
{

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleSidebarToggle = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };


    const [isCartOpen, setIsCartOpen] = useState(false);
    const handleCartToggle = () => {
      setIsCartOpen(!isCartOpen);
    };


    const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
    const handleSearchbarToggle = () => {
      setIsSearchbarOpen(!isSearchbarOpen);
    };


    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };


    const [isModal1Open, setIsModal1Open] = useState(false);
    const openModal1 = () => {
        setIsModal1Open(true);
    };
    const closeModal1 = () => {
        setIsModal1Open(false);
    };


    return (
    <React.Fragment>
    <header className="sticky top-0 bg-white text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        



{/* ////////////////////Sidebar-start/////////////////// */}

        <div className="container mx-auto">
            <span
                style={{ fontSize: '25px', cursor: 'pointer' }}
                onClick={handleSidebarToggle}
            >
                &#9776; {isSidebarOpen ? '' : ''}
            </span>

            <div className={styles.sidenav} style={{ width: isSidebarOpen ? '380px' : '0' }}>
                <a href="#" className={styles.closebtn} onClick={handleSidebarToggle}>
                &times;
                </a> 
                <div className='p-8'>
                <a href="#" className='border-b'>Attar</a>
                <a href="#" className='border-b'>Perfume Spray</a>
                <a href="#" className='border-b'>Body Spray</a>
                <a href="#" className='border-b'>Bakhoor</a>
                <a href="#" className='border-b'>Incense Sticks</a>
                <a href="#" className='border-b'>New Arrival</a>
                <a href="#" className='border-b'>Diffuser Oil</a>
                <a href="../pages/track-order" className='border-b'>Track Order</a>
                <a href="../pages/return-order">Return Your Order</a>
                </div>
                <div className='bottom-0 sticky border px-8 mt-12'>
                    <a href="#"><FontAwesomeIcon onClick={openModal} icon={faUser} className='text-black h-5 w-5'/> <span onClick={openModal} className='text-lg'>Log in</span></a>
                    <Modal isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </div>
        </div>

{/* ////////////////////Sidebar-end/////////////////// */}

        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        <img className="h-6 w-25" src="../Logo.png" alt="image1"/>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSearchbarToggle} className='text-black h-5 w-5 mr-5'/>
        <FontAwesomeIcon icon={faUser} onClick={openModal} className='text-black h-5 w-5 mr-5'/>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        <FontAwesomeIcon icon={faCartShopping} onClick={handleCartToggle} className='text-black h-5 w-5'/>
        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </button> */}
        </div>
    </div>







{/* ////////////////////Cart-start/////////////////// */}

    <div className="container mx-auto bg-black bg-opacity-50">
        <span style={{ fontSize: '25px', cursor: 'pointer' }} onClick={handleCartToggle}>
            {/* &#9776; {isCartOpen ? '' : ''} */}
        </span>

        <div className={style.sidenav} style={{ width: isCartOpen ? '490px' : '0' }}>
            <div className={style.closebtn} >
            <div className="w-full top-0 bg-sky-500 p-5 flex items-center justify-between bg-white text-black px-8">
                <FontAwesomeIcon icon={faCartShopping} className="text-black h-5 w-5" />
                <div className="flex-grow flex flex-col pl-4">
                    <span className="title-font text-xl font-medium font-serif">Item</span>
                </div>
                <button type="button" onClick={handleCartToggle} className="text-black font-bold text-xl">X</button>
            </div>
            </div>

            <div className="container px-5 py-2 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-8">
                    <div className="bg-[#f6f6f6] p-3 rounded-xl h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="border border-gray-300 flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4" src=""/>
                        <div className="flex-grow sm:pl-8">

                        <div className="flex">
                            <span className="title-font text-sm text-gray-900">Assorted Luxury Attar Perfume Gift Set (6 × 5.5Ml)</span>
                            <button className="flex ml-auto text-black border-0 focus:outline-none rounded">X</button>
                        </div>
                       
                        <div className="flex">
                            <span className="title-font text-sm text-gray-900">Earn 148</span>
                            <button className="flex ml-auto border-0 focus:outline-none rounded leading-relaxed font-bold text-[#956827]">₹1,499</button>
                        </div>

                        <div className="flex">
                        <div className="w-20">
                            <div className="flex flex-row w-full h-8 bg-transparent rounded-2xl">
                                <button
                                    className="w-20 h-full text-gray-600 bg-white rounded-l border-l border-t border-b outline-none cursor-pointer dark:text-gray-400 dark:bg-gray-900">
                                    <span className="m-auto text-2xl font-thin">-</span>
                                </button>
                                <input type="number"
                                    className="flex items-center w-full font-semibold text-center border-t border-b text-gray-700 placeholder-gray-700 bg-white outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                    placeholder="1"/>
                                <button
                                    className="w-20 h-full text-gray-600 bg-white rounded-r border-r border-t border-b outline-none cursor-pointer dark:text-gray-400 dark:bg-gray-900">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>
                            <button className="flex ml-auto text-black border-0 focus:outline-none rounded line-through text-xs">₹2,999</button>
                        </div>
                        
                        </div>
                    </div>
                    </div>
                </div>
                </div> 

            <div className="bottom-0 fixed sm:mb-10">
            <div className="px-8 w-full">
                <div className="w-full sm:pr-56 rounded-lg bg-[#fbf9e6] py-3 px-2">
                    <h2 className="font-bold text-black text-sm">₹75 off on All UPI Payments</h2>
                </div>
            </div>
            <div className="w-full flex items-center flex-wrap px-8">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 font-medium ">₹1,499
              <p className="text-sm">(Tax inclusive)</p>
              </a>
              <span className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm">
              <button onClick={openModal1} className="flex ml-auto rounded py-3 px-8 bg-[#f6a429] text-black font-medium text-lg">PLACE ORDER</button>
              <Modal1 isOpen={isModal1Open} onClose={closeModal1} />
              </span>
            </div>
            </div>

        </div>
    </div>

{/* ////////////////////Cart-end/////////////////// */}




{/* ////////////////////Searchbar-start/////////////////// */}


    <div className="container mx-auto bg-black bg-opacity-50">
        <span style={{ fontSize: '25px', cursor: 'pointer' }} onClick={handleSearchbarToggle}>
            {/* &#9776; {isCartOpen ? '' : ''} */}
        </span>

        <div className={stylee.sidenav} style={{ width: isSearchbarOpen ? '490px' : '0' }}>
            <div className={stylee.closebtn} >
            <div className="border-b border w-full top-0 bg-sky-500 p-5 flex items-center justify-between bg-white text-black px-8">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black h-5 w-5" />
                <div className="flex-grow flex flex-col pl-4">
                    <input className="title-font border-black border-2 rounded mr-16 text-lg"/>
                </div>
                <button type="button" onClick={handleSearchbarToggle} className="text-black font-bold text-xl">X</button>
            </div>
            </div>

            <div className="container px-5 py-2 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-8 w-full">
                    <div className="bg-[#f6f6f6] p-2 rounded-lg h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="border border-gray-300 flex-shrink-0 rounded w-24 h-24 object-cover object-center sm:mb-0 mb-4" src=""/>
                        <div className="flex-grow sm:pl-8">
                        <h2 className="title-font text-gray-900 font-medium">Shanaya Luxury Attar Perfume</h2>
                        <p className="leading-relaxed font-bold text-[#956827]">₹399
                            <span className="line-through text-xs ml-1 text-black">₹599</span>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 

            {/* <div className="bottom-0 p-2 fixed sm:mb-12"> */}
                <div className="relative w-full px-8">
                    <button className="flex w-full ml-auto rounded py-3 px-8 bg-black text-white justify-center text-center font-medium text-lg">View all results</button>
                </div>
            {/* </div> */}

        </div>
    </div>


{/* ////////////////////Searchbar-end/////////////////// */}


    {/* <div className="container mx-auto">
      <button
        className="fixed top-0 left-0 z-50 px-4 py-2 text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleSidebarToggle}>
        {isSidebarOpen ? 'X' : <FontAwesomeIcon icon={faUser}/>}
      </button>
      <Sidebar isOpen={isSidebarOpen} className="fixed top-0 left-0 z-40 h-screen w-64 bg-gray-800 shadow-md transition-all" />
    </div> */}


    </header>
    </React.Fragment>
    );
}

