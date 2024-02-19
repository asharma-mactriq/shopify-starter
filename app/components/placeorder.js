// "use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { fa2 } from '@fortawesome/free-solid-svg-icons';
import { fa3 } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faRug } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Modal from '../components/types';



import { useMultistepForm } from "@/app/components/useMultistepForm";
import { Blank } from "@/app/components/blank";
import { Mobile } from "@/app/components/Mobile";
import { Otp } from "@/app/components/otp";
import { AddressForm } from "@/app/components/AddressForm";
import { Payment } from "@/app/components/Payment";



const Placeorder = ({ isOpen, onClose }) => {


  const { steps, currentStepIndex, step, isFirstStep, isLstStep, back, next } = useMultistepForm([<Blank/>, <Mobile/>, <Otp/>, <AddressForm/>, <Payment/>])



      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
      };


      const [isModalOpen, setIsModalOpen] = useState(false);
      const openModal = () => {
          setIsModalOpen(true);
      };
      const closeModal = () => {
          setIsModalOpen(false);
      };


  return (
    <div className={`fixed inset-0 bg-black bg-opacity-60 ${isOpen ? '' : 'hidden'} flex items-center justify-center`}>












   
   <section className="text-gray-600 body-font overflow-hidden">
   <div className="container px-5 py-24 sm:px-56 mx-auto">
    <div className="border bg-[#f9f9f9] rounded-xl lg:w-5/6 mx-auto flex flex-wrap">



      <div className="bg-white rounded-xl p-4 lg:w-2/3 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <div className="flex mb-5">
          <img src="../logo-4.png" className="w-24 h-7"/>
          <h2>&nbsp;</h2>
          <div className="justify-items-end flex justify-end ml-auto ">
            <h2 className="bg-[#e2f2da] text-sm title-font text-black rounded-lg px-1 justify-items-end"><FontAwesomeIcon icon={faTag} className="w-5 h-5 text-[#16a34a]"/> Extra<span className="font-bold"> Discount</span> Available at Payment Step</h2>
          </div>
        </div>

  <form>
  <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>{currentStepIndex + 1 } / {steps.length}</div>
  {step}
  <div style={{ marginTop: "1rem", display: "flex", gap: ".5rem", justifyContent: "flex-end", }}>
  {/* {!isFirstStep && <button type="button" onClick={back}>
    Back
  </button>} */}
  <div className="items-center justify-center container px-32">
  <button type="button" onClick={next} className="text-white hover:bg-[#fbdcb1] bg-[#f6a73c] inline-flex w-full py-3 rounded-lg items-center justify-center text-center focus:outline-none">
    {isLstStep ? "Finish" : "Continue"}
  <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5"/>
  </button>
  </div>
  </div>
  <p className="text-xs text-gray-500 mt-5 text-center">By proceeding, I accept that I have read and understood the Gokwik's Privacy Policy and T&C</p>
</form>       

      </div>





      <div className="lg:w-2/6 w-full lg:h-auto p-3 h-64">
        <div className="bg-white rounded-xl">
          {/* <h2>hello</h2> */}
          <div className="justify-items-end flex justify-end">
            <button type="button" onClick={openModal} className="bg-[#dddddd] text-white justify-items-end flex justify-end px-2 py-1 rounded-full">X</button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </div>

          <div className="flex justify-center py-2 top-0">
            <div className="w-full rounded-3xl bg-white">
                <input type="checkbox" id="input1" className="absolute peer opacity-0"/>
                <label htmlFor="input1" className="tracking-[1px] mx-[20px] h-[50px] flex items-center"><FontAwesomeIcon icon={faCartShopping} className="mr-3"/> Order Summary 
                <FontAwesomeIcon icon={faChevronDown} htmlFor="input1" className="ml-3 rotate-0 peer-checked:rotate-180 duration-200"/></label>
                {/* <div className="absolute top-[15px]  rotate-0 peer-checked:rotate-180 duration-200 pl-5"> */}
                
                {/* </div> */}
                <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                    <div className="container px-5 py-2 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-2 w-full">
                            <div className="bg-white p-2 rounded-lg h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="border border-gray-300 flex-shrink-0 rounded w-16 h-16 object-cover object-center sm:mb-0 mb-4" src=""/>
                                <div className="flex-grow sm:pl-3">
                                  <h2 className="title-font text-xs text-black">Assorted Luxury Attar Perfume Gift Set (6 × 5.5Ml)</h2>
                                  <p className="text-black text-xs">Price: ₹1499.00</p>
                                  <p className="text-black text-xs">Quantity: 1</p>
                                </div>
                            </div>
                            </div>
                            <div className="flex-grow sm:pl-4 mb-5">
                                <div className="flex mb-2">
                                  <p className="text-black text-xs">Subtotal</p>
                                  <p className="flex ml-auto ext-black text-xs mr-4">₹1499.00</p>
                                </div>
                                <div className="flex mb-3">
                                  <p className="text-black text-xs">Shipping</p>
                                  <p className="flex ml-auto text-black text-xs mr-4">To be calculated</p>
                                </div>
                                <div className="border-b border-gray-300 mb-3"></div>
                                <div className="flex">
                                  <p className="text-black font-bold text-xs">To Pay</p>
                                  <p className="flex ml-auto text-black font-bold text-xs mr-4">₹1499.00</p>
                                </div>
                              </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        </div>
            <div className="flex container bg-white rounded-xl p-3 mt-5">
                <FontAwesomeIcon icon={faRug} />
                <input type="text" id="code" name="coupon" placeholder="Enter coupon code" className="ml-3 w-full bg-white rounded-full border-dotted border border-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div> 
        </div> 




      {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/> */}
    </div>
  </div>
</section>

      
  </div>
  );
};

export default Placeorder;