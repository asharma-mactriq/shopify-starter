// "use client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function TrackOrder() {

  return (
    <React.Fragment>
    

<section className="bg-[#ededed] text-gray-600 body-font">
  <div className="container px-5 py-8 sm:px-52 mx-auto">
    <div className="bg-white container p-10 rounded-2xl mx-auto sm:mb-72">
      <div className="flex flex-wrap -m-2"> 
        <h1 className="title-font mb-4 font-bold text-gray-600"><span><FontAwesomeIcon icon={faMapLocationDot} className="w-10 h-10 mr-3"/></span>Track status of your shipment</h1>
        <div className="p-2 w-full pt-8 mt-5 border-t border-gray-200 text-center">
        <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
            <div className="flex lg:flex-row md:flex-col mb-8">
                <p className="text-black font-medium text-sm">Search By:</p>
                <div className="inline-flex font-medium text-sm text-black ml-3">
                    <input type="radio" id="orderid" name="type" value="Order ID"/>
                    <label htmlFor="orderid">Order ID</label><br/>
                </div>
                <div className="inline-flex font-medium text-sm text-black ml-10">
                    <input type="radio" id="awb" name="type" value="AWB"/>
                    <label htmlFor="awb">AWB</label><br/>
                </div>
            </div>
          <input type="text" id="hero-field" name="hero-field" placeholder="Enter Order ID to search" className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-sky-200 focus:bg-transparent focus:border-sky-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-col py-5">
        <button className="inline-flex text-white bg-[#6e51ec] border-0 py-3 font-medium sm:px-24 focus:outline-none hover:bg-[#7851dd] rounded text-lg">Submit</button>
      </div>
        </div>
      </div>
    </div>
  </div>
</section>




    </React.Fragment>
  );
}