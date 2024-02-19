// "use client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function AboutUs() {

  return (
    <React.Fragment>


    <section className="bg-white text-gray-600 body-font">
        <div className="container sm:px-28 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            {/* <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"> */}
            {/* <img src="../banner-1.png"></img> */}
            {/* </div> */}
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 p-3 md:mt-0">
            <h2 className="text-gray-900 text-2xl mb-5 font-medium title-font text-center">Place a Refund/Exchange Request</h2>
            <div className="mb-8">
                <label htmlFor="name" className="leading-7 text-gray-600">Email / Phone</label>
                <input type="text" id="name" name="name" placeholder="9876543210/john@gmail.com" className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                <p className="text-xs">Enter Email/Phone used for placing the order with us</p>
            </div>
            <button className="text-white bg-black border-0 py-3 px-6 focus:outline-none shadow-md font-bold text-lg">PROCEED <FontAwesomeIcon icon={faArrowRight} /></button>
                <div className=" bg-white md:mt-0">
                    <button className="text-[#dd435d99] bg-[#dd435d33] px-1 py-1 text-sm mt-7 font-medium">Note :</button>
                    <p className="text-sm text-black mt-2">The products must be returned in the original condition they were received in along with any bills, tags, labels etc. Replace Order cannot be Returned or Exchanged..</p>
                    <p className="text-xs text-center mt-8">By proceeding, you accept our Terms & Conditions</p>
                    <p className="text-xs text-center mt-10">Need Help?</p>
                </div>
            </div>
        </div>
    </section>


    </React.Fragment>
  );
}