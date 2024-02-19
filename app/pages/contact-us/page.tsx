// "use client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {

  return (
    <React.Fragment>
    <section className="bg-white">
    <div className='flex items-center justify-center sm:px-96 py-24'> 
        <div className="bg-white rounded w-full sm:px-48">
          <h2 className="text-4xl text-black font-bold mb-10 font-serif text-center">Contact Us</h2>
          <form>
            <div className="mb-2">
                <input type="text" id="name" name="name" placeholder="Name" className="mt-1 p-2 border rounded-md w-full" required />
            </div>
            <div className="mb-2">
                <input type="email" id="email" name="email" placeholder="E-mail" className="mt-1 p-2 border rounded-md w-full" required />
            </div>
            <div className="mb-2">
                <textarea id="message" name="message" placeholder="Message" className="mt-1 p-2 border rounded-md w-full" required></textarea>
            </div>
            <div className="flex justify-end">
            <button type="submit" className="bg-black w-full text-white px-3 py-3 rounded-lg font-bold mt-5">Submit</button>
            </div>
        </form>
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