// "use client";
import React, { useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';  
import shopifyFetch from "@/utils/shopifyClient";;
import sim from "@/template/products";
// import Modal2 from '../components/feedback';
// import Review from '@/app/components/review';
import WriteReview from "@/app/components/WriteReview";
import ViewFeedback from "@/app/components/ViewFeedback";



export default async function ProductPage() {
  let [collections, collectionImages, products, images, urlProduct, prices] = await shopifyFetch();

  let similar = sim;  
  console.log("PRICES FETCH",prices);
  {prices.map((price, index) => (
    console.log("regular",price.regularPrice,price.compareAtPrice)
  ))}



  // const [isModal2Open, setIsModal2Open] = useState(false);
  // const openModal2 = () => {
  //     setIsModal2Open(true);
  // };
  // const closeModal2 = () => {
  //     setIsModal2Open(false);
  // };



  // const [isReviewOpen, setIsReviewOpen] = useState(false);
  // const openReview = () => {
  //     setIsReviewOpen(true);
  // };
  // const closeReview = () => {
  //     setIsReviewOpen(false);
  // };



//   const [quantity, setQuantity] = useState(1); // Initial quantity is 1

//     const decreaseQuantity = () => {
//         if (quantity > 1) {
//             setQuantity(quantity - 1);
//         }
//     };

//     const increaseQuantity = () => {
//         setQuantity(quantity + 1);
//     };



  return (
    <React.Fragment>


      <header className="bg-white sticky top-0 body-font">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <div className="bg-white h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img alt="team" className="border border-gray-300 flex-shrink-0 w-16 h-16 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/400x400"/>
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font text-gray-900">Oudh Al Hashmi Luxury Attar Perfume</h2>
                <p className="leading-relaxed font-bold text-[#956827]">₹699
                  {/* {prices[index].compareAtPrice &&  */}
                    <span className="line-through text-xs ml-3 text-black">₹999</span>
                  {/* } */}
                </p>
              </div>
            </div>

          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
          </nav>
          <select name="country" id="country" className="mr-2 bg-white rounded-lg border border-gray-300 text-base outline-none text-black py-3 px-5 leading-8 transition-colors duration-200 ease-in-out">
              <option value="Afghanistan">12 ML - 1 Bottle</option>
              <option value="Åland Islands">5.5 ML - 1 Bottle</option>
              <option value="Albania">12 ML - 1 Bottle</option>
          </select>    
          <button className="mr-2 bg-[#d88d16] text-white font-bold rounded-lg p-3 px-10">Order Now</button>
          <button className="bg-black text-white font-bold rounded-lg p-3 px-10">Add To Cart</button>
        </div>
      </header>

     

     <section className="bg-white text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-6/7 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:mt-0">
                <h1 className="text-gray-900 text-4xl title-font font-bold mb-1">Assorted Luxury Attar Perfume Gift Set (6 × 5.5Ml)</h1>
                <h2 className="text-sm title-font text-gray-500 tracking-widest">Earn 148 POPcoins</h2>
                <p className="leading-relaxed text-lg text-[#956827] font-bold">₹1,499 <span className="line-through text-black font-normal text-xs ml-1">₹2,999</span></p>
                <div className="flex mb-4">
                    <div className="flex justify-center md:flex py-2">
                        <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                        <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                        <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                        <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                        <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                        <p className="ml-1 text-sm">(4.7/5 Rating | 1553 Customer Testimonials)</p>
                    </div>
                </div>
                <div className="flex border-gray-200 ">
                    <button className="bg-[#fff6a0] text-black text-sm rounded-full w-full py-1 mr-2">Non-Alcoholic</button>
                    <button className="bg-[#d7d9fe] text-black text-sm rounded-full w-full py-1 mr-2">Unisex</button>
                    <button className="bg-[#ffd8fb] text-black text-sm rounded-full w-full py-1 mr-2">Roll-On</button> 
                    <button className="bg-[#d2f7df] text-black text-sm rounded-full w-full py-1">Best For Gifting</button>  
                </div>


                <div className="container py-5 mx-auto text-black">
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                      <div className="bg-[#ede5c9] h-full hover:border-black hover:border-1 hover:border border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center p-2" src="https://dummyimage.com/720x400" alt="blog"/>
                        <div className="p-2">
                          <h2 className="text-sm title-font font-medium mb-1 text-center">5.5 ML - 1 Bottle</h2>
                          <div className="w-full bg-[#ece9de]">
                            <h1 className="title-font leading-relaxed text-lg text-[#956827] font-bold mb-1 text-center">₹399</h1>
                            <p className="line-through text-black font-normal text-xs text-center">₹599</p>
                          </div>  
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                      <div className="bg-[#ede5c9] h-full hover:border-black hover:border-1 hover:border border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center p-2" src="https://dummyimage.com/720x400" alt="blog"/>
                        <div className="p-2">
                          <h2 className="text-sm title-font font-medium mb-1 text-center">5.5 ML - 1 Bottle</h2>
                          <div className="w-full bg-[#ece9de]">
                            <h1 className="title-font leading-relaxed text-lg text-[#956827] font-bold mb-1 text-center">₹399</h1>
                            <p className="line-through text-black font-normal text-xs text-center">₹599</p>
                          </div>  
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                      <div className="bg-[#ede5c9] h-full hover:border-black hover:border-1 hover:border border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center p-2" src="https://dummyimage.com/720x400" alt="blog"/>
                        <div className="p-2">
                          <h2 className="text-sm title-font font-medium mb-1 text-center">5.5 ML - 1 Bottle</h2>
                          <div className="w-full bg-[#ece9de]">
                            <h1 className="title-font leading-relaxed text-lg text-[#956827] font-bold mb-1 text-center">₹399</h1>
                            <p className="line-through text-black font-normal text-xs text-center">₹599</p>
                          </div>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* <div className="w-32 mb-8">
                    <label htmlFor="" className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                    <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                        <button
                            className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400"
                            onClick={decreaseQuantity}>
                            <span className="m-auto text-2xl font-thin">-</span>
                        </button>
                        <input
                            type="number"
                            className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                            placeholder="1"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                        />
                        <button
                            className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400"
                            onClick={increaseQuantity}>
                            <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                    </div>
                </div> */}

                <div className="w-32">
                    <label htmlFor="quantity" className="w-full text-xl text-black dark:text-gray-400">Quantity:</label>
                    <div className="flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
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

                <p className="leading-relaxed text-black font-bold mt-5">Click & get upto 30% off using POPcoins</p>
                <div className="flex mt-6 items-center pb-5 border-gray-100 mb-2">
                    <button className="bg-black text-white text-lg font-bold rounded-lg w-full py-2 mr-2">ADD TO CART</button>  
                    <button className="bg-[#d88d16] text-white text-lg font-bold rounded-lg w-full py-2">ORDER NOW</button>  
                </div>
                <div className="bg-[#fbf9e6] py-2 px-2">
                    <h2 className="font-bold text-black ">₹75 off on All UPI Payments</h2>
                </div>
                <div className="bg-[#f6eddf] py-5 px-3 mt-5">
                    <div className="flex text-center">
                        <a className="flex-grow font-bold text-black border-r-2 border-[#d88d16] py-2 text-lg px-5">
                            <span><FontAwesomeIcon icon={faArrowRightArrowLeft} className="inline-flex text-black h-4 w-4 mr-2"/></span>Easy Returns</a>
                        <a className="flex-grow font-bold text-black border-r-2 border-[#d88d16] py-2 text-lg px-5">
                            <span><FontAwesomeIcon icon={faMoneyBill1Wave} className="inline-flex text-black h-4 w-4 mr-2"/></span>COD Available</a>
                        <a className="flex-grow font-bold text-black border-gray-300 py-2 text-lg px-5">
                            <span><FontAwesomeIcon icon={faTruck} className="inline-flex text-black h-4 w-4 mr-2"/></span>Delivery within 5-6 days</a>
                    </div>    
                </div>
                
            </div>
            </div>
        </div>
    </section>



    <section className="bg-white">
        <div className="px-10 py-10">
            <h1 className="text-5xl font-serif text-black font-medium mb-3">Description</h1>
            <li className="mb-3">6 Pcs Attar Gift Set Premium Quality Attar Perfume (5.5 Ml Each)</li>
            <li className="mb-3">Shanaya, Leader, White Oudh, Safwan, Oudh Al Hashmi, Lavish Musk</li>
            <li className="mb-3">100% Pure Premium Quality Non-Alcoholic Attar </li>
            <li className="mb-3">Create a real class which will make you distinct amongst many</li>
            <li className="mb-3">Made using premium-quality ingredients, this attar is absolutely safe for your skin</li>
            <li className="mb-3">Enchanting and soothing, this fragrance is sure to impress everyone around you</li>
            <li className="mb-3">The enticing fragrance of this attar is highly long-lasting, which is a vital feature to keep you on the go</li>
            <li className="mb-3">Wear this attar to have fine confidence all day long and fetch compliments for your choice of attar</li>
            <li>This attar will also be a wonderful gifting option for your loved ones.</li>
        </div>
    </section>





      <section className="bg-white text-gray-600 body-font">
        <img className="h-auto max-w-full px-8" src="./banner-4.png" alt="image1"/>
        <img className="h-auto max-w-full px-8" src="./banner-5.png" alt="image1"/>
        <img className="h-auto max-w-full px-8" src="./banner-6.png" alt="image1"/>
        <img className="h-auto max-w-full px-8" src="./banner-7.png" alt="image1"/>
        <img className="h-auto max-w-full px-8" src="./banner-8.png" alt="image1"/>
      </section>  





      <section className="bg-[#f5f4ec] text-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            {/* <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2> */}
            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">
              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-14 w-14"/> 4.7</h1>
            <p className="lg:w-2/3 mx-auto text-2xl mb-5">1,628 Reviews</p>
              <div className="flex justify-center md:flex py-2">
                  <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
                  <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
                  <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
                  <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
                  <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>

                  {/* <FontAwesomeIcon icon={faMinus} className="text-[#7b7b7b] h-10 w-20"/> */}
                  <p className="ml-1 text-sm">(1,394)</p>
              </div>
              <div className="flex justify-center md:flex py-2">
                  <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
                  <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
                  <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
                  <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5 text-[#f2b01e]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <p className="ml-1 text-sm">(124)</p>
              </div>
              <div className="flex justify-center md:flex py-2">
                  <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
                  <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
                  <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5 text-[#f2b01e]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5 text-[#f2b01e]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <p className="ml-1 text-sm">(26)</p>
              </div>
              <div className="flex justify-center md:flex py-2">
                  <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
                  <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5 text-[#f2b01e]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5 text-[#f2b01e]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5 text-[#f2b01e]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <p className="ml-1 text-sm">(10)</p>
              </div>
              <div className="flex justify-center md:flex py-2">
                  <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5 text-[#f2b01e]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5 text-[#f2b01e]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5 text-[#f2b01e]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5 text-[#f2b01e]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  {/* <FontAwesomeIcon icon={faStarSharp} className="text-[#f2b01e] h-5 w-5"/> */}
                  <p className="ml-1 text-sm">(74)</p>
              </div>

              <div className="flex justify-center">
                <WriteReview />
              {/* <button type="button" onClick={openReview} className="mr-2 mt-10 text-black bg-transparent border py-2 px-20 hover:bg-[#e8e8e8] px-4 focus:outline-none text-lg">Write a review</button>
              <Review isOpen={isReviewOpen} onClose={closeReview} /> */}
              {/* onClick={openReview} */}
              {/* <label htmlFor="input4" className="mt-10 text-black bg-transparent border py-2 hover:bg-[#e8e8e8] px-4 focus:outline-none text-lg"><FontAwesomeIcon icon={faSliders} className="w-5 h-5"/></label>               */}
              
              
                <input type="checkbox" id="input4" className="absolute peer opacity-0"/>
                <label htmlFor="input4" className="mt-10 text-black bg-transparent border py-2 hover:bg-[#e8e8e8] px-4 focus:outline-none text-lg"><FontAwesomeIcon icon={faSliders} className="w-5 h-5"/></label>
                <div className="max-h-0 overflow-hidden peer-checked:max-h-full mt-4">
                  <select className="py-2 px-5 border-0 mt-7">
                    <option className="font-bold border-0">--Sort By--</option>
                    <option className="py-2" value="Featured">Featured</option>   
                    <option className="py-2" value="Newest">Newest</option>   
                    <option className="py-2" value="Highest Ratings">Highest Ratings</option>   
                    <option className="py-2" value="Lowest Ratings">Lowest Ratings</option>   
                  </select>
                </div>

              </div> 


          </div> 
          <div className="flex flex-wrap">
              <div className="container sm:px-52 mx-auto">
                <div className="flex flex-wrap -m-4">

                  <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-white">
                    {/* onClick={openModal2} */}
                    {/* <Modal2 isOpen={isModal2Open} onClose={closeModal2} /> */}
                      {/* <img className="h-40 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="content"/>
                      <div className="p-2">
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Akshay J.</h2>
                        <h3 className="text-gray-400 text-xs font-medium title-font">2/15/2024</h3>
                          <div className="flex md:flex py-2">
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                          </div>
                          <p className="leading-relaxed text-sm">👍👍👌</p>
                      </div> */}
                      <ViewFeedback />
                    </div>
                  </div>

                  <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-white">
                      <img className="h-40 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="content"/>
                      <div className="p-2">
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Saniya M.</h2>
                        <h3 className="text-gray-400 text-xs font-medium title-font">2/15/2024</h3>
                          <div className="flex md:flex py-2">
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                          </div>
                          <p className="leading-relaxed text-sm">Just ossum</p>
                      </div>
                    </div>
                  </div>

                  <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-white">
                      <img className="h-40 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="content"/>
                      <div className="p-2">
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Gaha H.</h2>
                        <h3 className="text-gray-400 text-xs font-medium title-font">2/15/2024</h3>
                          <div className="flex md:flex py-2">
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                          </div>
                          <p className="leading-relaxed text-sm">Nice product 🍂</p>
                      </div>
                    </div>
                  </div>

                  <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-white">
                      <img className="h-40 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="content"/>
                      <div className="p-2">
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Imran S.</h2>
                        <h3 className="text-gray-400 text-xs font-medium title-font">2/15/2024</h3>
                          <div className="flex md:flex py-2">
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                          </div>
                          <p className="leading-relaxed text-sm">I saw it on Instagram and booked it but I didn't expect it to smell so beautiful and it smells so long. 
                          Actually till now I have been using Jannatul Firdosi attar but till now I have not cracked such attar like Adilakdri program.⭐⭐⭐⭐⭐</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
          </div>
          <button className="flex mx-auto mt-16 text-black bg-transparent border py-2 px-4 focus:outline-none text-xs">Show more reviews</button>
        </div>
      </section>








{/* <section className="text-gray-600 body-font relative"> */}
  {/* <div className="container px-5 py-24 mx-auto"> */}

{/*  
    <div className="lg:w-1/2 md:w-2/3 bg-white rounded-xl mx-auto">
      <button className="sm:mb-24 p-3"></button>
      <div className="flex flex-col w-full">
        <h1 className="font-bold sm:text-3xl text-center text-black">About you</h1>
        <div className="sm:mb-44 mt-5">
          <div className="sm:px-32 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="first_name" className="leading-7 text-black font-bold">First name</label>
                  <input type="text" id="first_name" name="first_name" className="w-full bg-white rounded-lg border border-gray-500 border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="last_name" className="leading-7 text-black font-bold">Last name</label>
                  <input type="text" id="last_name" name="last_name" className="w-full bg-white rounded-lg border border-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-black font-bold">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-white rounded-lg border border-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <p className="text-sm mt-5 text-center">By submitting, I acknowledge the Terms of Service and Privacy Policy and that my review will be publicly posted and shared online</p>
              </div>
            </div>        
          </div>
        </div>
      </div>
      <div className="flex p-3">
        <button className="p-3 bg-white text-black font-bold py-2 px-4 hover:bg-[#e2e2e2] rounded-lg"><FontAwesomeIcon icon={faArrowLeft} className="w-5 h-4 mr-2"/> Back</button>
        <button className="ml-auto p-3 bg-black text-white font-bold py-2 px-5 rounded-lg">Done</button>
      </div>
    </div> */}

  {/* </div> */}
{/* </section> */}








   
    <section className="bg-white text-gray-600 body-font">
    <div className="container mx-auto text-[#491b0e] px-5 py-12">
        <div className="flex flex-col text-center w-full mb-8">
        <h1 className="text-5xl font-medium font-serif title-font tracking-tight">Discover our premium range of Products</h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
        {products.map((product, index) => (
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full" key={product.id}>
            <div className="px-4 py-6">
                <img className="h-auto max-w-full" src={urlProduct[index]} alt={images[index].altText}/>
                <p className="leading-relaxed">{product.handle}</p>
                <div className="flex justify-center md:flex py-2">
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <p className="ml-1 text-sm">(9,451)</p>
                </div>
                <p className="leading-relaxed font-bold">₹{prices[index].regularPrice}  
                {/* {prices[index].compareAtPrice &&  */}
                    <span className="line-through text-xs ml-1">₹{prices[index].compareAtPrice}</span>
                {/* } */}
                </p>
                <button className="bg-black text-white font-bold rounded-lg w-full p-3 mt-2">Add To Cart</button>
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>





    <section className="bg-[#213d2f] body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"/> */}
              <div className="w-full">
                {/* <span className="inline-flex"> */}
                  <a className="text-white inline-flex">
                    <FontAwesomeIcon icon={faCube} className="h-5 w-5"/>
                  </a>
                {/* </span> */}
                <h2 className="title-font font-medium text-sm text-white mt-5">EASY RETURNS</h2>
                <p className="py-5 text-white">Return product within 7 days of purchase.</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201"/> */}
              <div className="w-full">
                <span className="inline-flex">
                  <a className="text-white inline-flex">
                    <FontAwesomeIcon icon={faPhone} className="h-5 w-5"/>
                  </a>
                </span>
                <h2 className="title-font font-medium text-sm text-gray-900 mt-5 text-white">CUSTOMER SERVICE</h2>
                <p className="py-5 text-white">We are available from Monday to Saturday to answer your questions.</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202"/> */}
              <div className="w-full">
                <span className="inline-flex">
                  <a className="text-white inline-flex">
                    <FontAwesomeIcon icon={faLock} className="h-5 w-5"/>
                  </a>
                </span>
                <h2 className="title-font font-medium text-sm text-gray-900 mt-5 text-white">SECURE PAYMENT</h2>
                <p className="py-5 text-white">Your payment information is processed securely.</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203"/> */}
              <div className="w-full">
                <span className="inline-flex">
                  <a className="text-white inline-flex">
                    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5"/>
                  </a>
                </span>
                <h2 className="title-font font-medium text-sm text-gray-900 mt-5 text-white">CONTACT US</h2>
                <p className="py-5 text-white">Need to contact us ? Just send us an e-mail at info@adilqadri.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    </React.Fragment>
  );
}