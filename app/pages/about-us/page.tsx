"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';



// import Review from '@/app/components/review';
// import Modal2 from '@/app/components/feedback';


export default function AboutUs() {


  

// const { steps, currentStepIndex, step, isFirstStep, isLstStep, back, next } = useMultistepForm([<Blank/>, <Review1/>, <Review2/>, <Review3/>, <Review4/>, <Review5/>])
  // const [isReviewOpen, setIsReviewOpen] = useState(false);
  // const openReview = () => {
  //     setIsReviewOpen(true);
  // };
  // const closeReview = () => {
  //     setIsReviewOpen(false);
  // };

  // const [isModal2Open, setIsModal2Open] = useState(false);
  // const openModal2 = () => {
  //     setIsModal2Open(true);
  // };
  // const closeModal2 = () => {
  //     setIsModal2Open(false);
  // };


  return (
    <React.Fragment>
      <section className="bg-white text-gray-600 body-font">
        <img className="h-auto max-w-full" src="../Group_1_2.png" alt="image1"/>
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


        <section className="bg-white text-gray-600 body-font">
            <div className="container py-8 mx-auto flex flex-wrap">
                <div className="px-5 mx-auto">
                <div className="flex flex-wrap w-full py-20 relative mb-4">
                    <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" src="../bg-1.png"/>
                    <div className="text-center z-10 w-full sm:px-72">
                        <h2 className="text-4xl text-white font-medium title-font mb-2 font-serif">Vision</h2>
                        <p className="leading-relaxed text-[#eedacf]">Our vision is to become a globally recognized perfume brand, known for our exceptional quality and captivating scents. We strive to create a positive impact by enhancing people's confidence and elevating their personal experiences through the power of fragrance.</p>
                        <h2 className="text-4xl text-white font-medium title-font mb-2 font-serif mt-5">Mission</h2>
                        <p className="leading-relaxed text-[#eedacf]">Our mission is to continuously innovate and provide our customers with an extensive range of fragrances that evoke emotions and leave a lasting impression.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>


      <section className="bg-white text-gray-600 body-font">
      <div className="container mx-auto text-black">
        <div className="flex flex-col text-center w-full">
          <h1 className="text-5xl font-medium font-serif title-font tracking-tight">Why Trust Us</h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center mt-10 px-32">
  
          <div className="p-3 md:w-1/6 sm:w-1/2 w-full mb-16">
            <div className="bg-[#eaedde] rounded-xl py-6">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center text-gray-400 mb-8 mt-5">
                <img className="h-auto max-w-full" src="../img1.png"/>
              </div>
              <p className="leading-relaxed">Premium</p>
              {/* onClick={openReview} */}
              {/* <Review isOpen={isReviewOpen} onClose={closeReview} /> */}
              <p className="leading-relaxed">Quality</p>
              {/* onClick={openModal2} */}
              {/* <Modal2 isOpen={isModal2Open} onClose={closeModal2} /> */}
            </div>
          </div>
 
          <div className="p-3 md:w-1/6 sm:w-1/2 w-full mb-16">
            <div className="bg-[#eedacf] rounded-xl py-6">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center text-gray-400 mb-8 mt-5">
                <img className="h-auto max-w-full" src="../img2.png"/>
              </div>
              <p className="leading-relaxed">Cruelty</p>
              <p className="leading-relaxed">Free</p>
            </div>
          </div>

          <div className="p-3 md:w-1/6 sm:w-1/2 w-full mb-16">
            <div className="bg-[#eaedde] rounded-xl py-6">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center text-gray-400 mb-8 mt-5">
                <img className="h-auto max-w-full" src="../img3.png"/>
              </div>
              <p className="leading-relaxed">Long</p>
              <p className="leading-relaxed">Lasting</p>
            </div>
          </div>

          <div className="p-3 md:w-1/6 sm:w-1/2 w-full mb-16">
            <div className="bg-[#eedacf] rounded-xl py-6">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center text-gray-400 mb-8 mt-5">
                <img className="h-auto max-w-full" src="../img4.png"/>
              </div>
              <p className="leading-relaxed">Variety of</p>
              <p className="leading-relaxed">Fragrances</p>
            </div>
          </div>

          <div className="p-3 md:w-1/6 sm:w-1/2 w-full mb-16">
            <div className="bg-[#eaedde] rounded-xl py-6">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center text-gray-400 mb-8 mt-5">
                <img className="h-auto max-w-full" src="../img5.png"/>
              </div>
              <p className="leading-relaxed">Derma</p>
              <p className="leading-relaxed">Tested</p>
            </div>
          </div>

          <div className="p-3 md:w-1/6 sm:w-1/2 w-full mb-16">
            <div className="bg-[#eedacf] rounded-xl py-6">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center text-gray-400 mb-8 mt-5">
                <img className="h-auto max-w-full" src="../img6.png"/>
              </div>
              <p className="leading-relaxed">100%</p>
              <p className="leading-relaxed">Vegan</p>
            </div>
          </div>

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