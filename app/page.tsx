// "use client";
import React , { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { getAllProducts } from "../query/get-products";
import {
  NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
} from "../links";

import shopifyFetch from "../utils/shopifyClient";
import fetchComboData from "../utils/shopifyClient";
import sim from "@/template/products";




export default async function Home() {
  let [collections, collectionImages, products, images, urlProduct, prices] = await shopifyFetch();
  let [comboProducts, comboImages, comboUrlProduct, comboPrices] = await fetchComboData();
  let similar = sim;  
  console.log("PRICES FETCH",prices);
  {prices.map((price, index) => (
    console.log("regular",price.regularPrice,price.compareAtPrice)
  ))}



  return (
    <React.Fragment>
      <section className="text-gray-600 body-font">
        <img className="h-auto max-w-full" src="./banner-1.png" alt="image1"/>
      </section>  



      <section className="bg-white body-font">
        <div className="container px-16 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="flex flex-col text-center w-full py-5 text-[#491b0e]">
              <h1 className="text-5xl font-medium font-serif title-font mb-8">Shop By Category</h1>
              <p>Explore our premium range of products</p>
            </div>
            {collections.map((collection, index) => (
            <div className="p-4 lg:w-1/4" key={index}>
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 sm:pt-40 sm:pb-96 overflow-hidden text-center flex relative">
              <img alt={collectionImages[index].altText} src={collectionImages[index].src} className="h-full w-full object-cover object-center block absolute inset-0"/>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-white mr-3  items-center leading-none pr-3 py-1 border-gray-200">
                  {collection}
                  </span>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-white text-gray-600 body-font px-5">
        <Link href="collections"><img className="h-auto rounded-3xl max-w-full" src="./banner-2.png"/></Link>
      </section>

      
      <div>
        <ul>
          <section className="bg-white text-gray-600 body-font">
            <div className="container mx-auto text-[#491b0e] px-5">
              <div className="flex flex-col text-center w-full py-12">
                <h1 className="text-4xl font-medium font-serif title-font mb-8">Premium Attar (Roll-on Perfume)</h1>
                <p>Explore our premium range of Non Alcoholic Attars</p>
              </div>
              <div className="flex flex-wrap -m-4 text-center py-10">
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
        </ul>
      </div>


      <section className="bg-white text-[#491b0e] body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="bg-[#fff0df] rounded-3xl flex flex-wrap w-full items-center">
          <img className="lg:w-2/4 md:w-1/2 object-cover object-center rounded-3xl md:mt-0 mt-12" src="./banner-3.png" alt="step"/>      
            <div className="lg:w-2/4 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex pb-12">
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-serif tracking-tight">Our Best Seller Shanaya</h1>
                  <p className="mb-8 leading-relaxed">"Shanaya" by Adil Qadri: A fusion of Arabic and French elegance. Immerse yourself in the rich allure of amber and oudh, delicately balanced with caramel notes. Elevate your senses with Shanaya, where East meets West in a perfect harmony of scent.</p>
                  <div className="flex justify-center">
                    <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none font-bold rounded text-lg">Indulge Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white text-gray-600 body-font">
      <div className="container mx-auto px-5 text-black">
        <div className="flex flex-col text-center w-full py-5">
          <h1 className="text-5xl font-medium font-serif title-font mb-8 tracking-tight">Combo Offer</h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center py-10">
        {comboProducts.map((product, index) => (
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full" key={product.id}>
            <div className="px-4 py-6">
              <img className="h-auto max-w-full" src={comboUrlProduct[index]} alt={comboImages[index].altText}/>
              <p className="leading-relaxed">{product.title}<br/>&nbsp;</p>
              <div className="flex justify-center md:flex py-2">
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <p className="ml-1 text-sm">(1,537)</p>
              </div>
              <p className="leading-relaxed font-bold">₹{comboPrices[index].regularPrice} <span className="line-through text-xs ml-1">₹2,999</span></p>
              <button className="bg-black text-white font-bold rounded-lg w-full p-3 mt-2">Add To Cart</button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>




    <section className="bg-[#f9ebe3] text-gray-600 body-font">
      <div className="container mx-auto text-black py-16">
        <div className="flex flex-col text-center w-full">
          <h1 className="text-5xl font-medium font-serif title-font tracking-tight">Why Trust Us?</h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center mt-10 px-32">

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full">
            <div className="bg-[#ffffff] rounded-xl px-4 py-6">
              <div className="w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./img1.png"/>
              </div>
              <p className="leading-relaxed">Premium</p>
              <p className="leading-relaxed">Quality</p>
            </div>
          </div>

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full ">
            <div className="bg-[#eedacf] rounded-xl px-4 py-6">
              <div className="w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./img2.png"/>
              </div>
              <p className="leading-relaxed">Cruelty</p>
              <p className="leading-relaxed">Free</p>
            </div>
          </div>

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full">
            <div className="bg-[#ffffff] rounded-xl px-4 py-6">
              <div className="w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./img3.png"/>
              </div>
              <p className="leading-relaxed">Long</p>
              <p className="leading-relaxed">Lasting</p>
            </div>
          </div>

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full">
            <div className="bg-[#eedacf] rounded-xl px-4 py-6">
              <div className="w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./img4.png"/>
              </div>
              <p className="leading-relaxed">Variety of</p>
              <p className="leading-relaxed">Fragrances</p>
            </div>
          </div>

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full">
            <div className="bg-[#ffffff] rounded-xl px-4 py-6">
              <div className="w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./img5.png"/>
              </div>
              <p className="leading-relaxed">Derma</p>
              <p className="leading-relaxed">Tested</p>
            </div>
          </div>

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full">
            <div className="bg-[#eedacf] rounded-xl px-4 py-6">
              <div className="w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./img6.png"/>
              </div>
              <p className="leading-relaxed">100%</p>
              <p className="leading-relaxed">Vegan</p>
            </div>
          </div>

        </div>
      </div>
    </section>




    <section className="bg-white py-12">
        <div className="bg-[#213d2f] mt-10 text-black py-10 px-10 body-font">
            <div className="bg-white container mx-auto flex px-10 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center" alt="hero" src="https://dummyimage.com/720x600"/>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 py-10 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black font-serif">Adil Qadri</h1>
                    <p className="mb-8 leading-relaxed">Mohamadadil Asif Malkani (Founder & CEO) is the Man behind "Adil Qadri,"an indigenous premium perfume business.</p>
                    <p className="mb-8 leading-relaxed">Adil Qadri's perfume collection is known for its excellent quality and high-end scents.</p>
                    <p className="mb-8 leading-relaxed">Adil Qadri has created a new variety of attars to fit the current lifestyle, keeping in mind the expectations of the times and its devoted consumers who exclusively use attars. These</p>
                    <p>perfumes come in a variety of smells suitable for both formal and casual events.</p>
                    <img src="#" className="h-14 w-52"/>
                    <h2 className="font-bold text-black">Adil Qadri</h2>
                    <h3 className="text-sm">Founder, CEO</h3>
                </div>
            </div>
        </div>
    </section>







    <section className="bg-[#f9ebe3] text-gray-600 body-font">
      <div className="container mx-auto text-black py-16">
        <div className="flex flex-col text-center w-full">
          <h1 className="text-5xl font-medium font-serif title-font tracking-tight mb-10">Media Coverage</h1>
          <p>We feel immensely elated to be featured in some of the top dailies</p>
        </div>
        <div className="flex flex-wrap -m-4 text-center mt-10 px-32">

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full border-r border-gray-500">
            <div className="bg-transparent rounded-xl px-4 py-6">
              <div className="w-32 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./media-1.png"/>
              </div>
            </div>
          </div>

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full border-r border-gray-500">
            <div className="bg-transparent rounded-xl px-4 py-6">
              <div className="w-24 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./media-2.png"/>
              </div>
            </div>
          </div>

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full border-r border-gray-500">
            <div className="bg-transparent rounded-xl px-4 py-6">
              <div className="w-24 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./media-3.png"/>
              </div>
            </div>
          </div>

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full border-r border-gray-500">
            <div className="bg-transparent rounded-xl px-4 py-6">
              <div className="w-32 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./media-4.png"/>
              </div>
            </div>
          </div>

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full border-r border-gray-500">
            <div className="bg-transparent rounded-xl px-4 py-6">
              <div className="w-24 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./media-5.png"/>
              </div>
            </div>
          </div>

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full border-r border-gray-500">
            <div className="bg-transparent rounded-xl px-4 py-6">
              <div className="w-24 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./media-6.png"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>






<section className="bg-white text-black body-font py-16 px-5">
  <div className="bg-[#fdeae3] rounded-3xl container sm:px-72 py-12 mx-auto">
    <div className="flex flex-col text-center w-full">
      <h1 className="text-5xl font-medium font-serif title-font tracking-tight mb-10">Customer Testimonials</h1>
    </div>
    <div className="bg-white rounded-xl px-24 py-5 w-full mx-auto text-center">
      <div className="">
        <img alt="testimonial" className="w-24 h-24 mb-4  object-cover object-center rounded-full inline-block border-3 border-gray-200 bg-gray-200" src="./testimonial_user.png"/><br/>
      </div>
      <p className="leading-relaxed text-lg mt-3 mb-5">It's totally amazing fragrance adil bro. I love this new tabish attar it's fragrance is like doing hypnotise. No more words to describe this. I strongly suggest this to all.</p>
      <FontAwesomeIcon icon={faStar} className="ml-1 text-[#FFB545]"/>
      <FontAwesomeIcon icon={faStar} className="ml-1 text-[#FFB545]"/>
      <FontAwesomeIcon icon={faStar} className="ml-1 text-[#FFB545]"/>
      <FontAwesomeIcon icon={faStar} className="ml-1 text-[#FFB545]"/>
      <FontAwesomeIcon icon={faStar} className="ml-1 text-[#FFB545]"/>    
      {/* <span className="text-2xl font-bold"> Adam Chen</span> */}
      <h2 className="font-medium title-font tracking-wider text-2xl mb-3">Shalima</h2>
    </div>
  </div>
</section>






    <section className="bg-[#213d2f] body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <div className="w-full">
                  <a className="text-white inline-flex">
                    <FontAwesomeIcon icon={faCube} className="h-5 w-5"/>
                  </a>
                <h2 className="title-font font-medium text-sm text-white mt-5">EASY RETURNS</h2>
                <p className="py-5 text-white">Return product within 7 days of purchase.</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
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
