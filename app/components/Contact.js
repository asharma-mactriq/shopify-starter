import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Contact = ({ isOpen, onClose }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
      };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-60 ${isOpen ? '' : 'hidden'} flex items-center justify-center`}>
   
   <section className="text-gray-600 body-font">
   
    <div className="container px-5 py-24 sm:px-80 mx-auto flex-wrap items-center">
    <div className="justify-items-end flex justify-end">
    <button type="button" onClick={onClose} className="bg-transparent text-white justify-items-end flex justify-end px-3 py-2 rounded-lg hover:bg-white hover:text-black">X</button>
    </div>
    <div className="bg-gradient-to-b from-[#543109] via-[#9c5b11] to-[#a86212] p-4 container rounded-xl flex flex-wrap items-center">
  
      <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">

          <div className="flex flex-wrap -m-4 text-center object-center item-center">
              <div className="md:w-1/3 object-center item-center">
              <p>&nbsp;</p>
              </div>
              <div className="md:w-1/3 object-center item-center">
              <img className="item-center inline-flex object-center h-18 w-16 mr-8" src="../logo-2.png"/>
              <img className="item-center inline-flex object-center h-5 w-16" src="../logo-3.png"/>
              </div>
              <div className="md:w-1/3 object-center item-center">
              <p>&nbsp;</p>
              </div>
          </div>

        {/* <img className="md:w-1/2 h-10 w-10" src="./logo-2.png"/><span><img className="md:w-1/2 h-10 w-10" src="./logo-3.png"/></span> */}
        <h1 className="title-font font-bold text-xl text-white text-center py-12">Login now to access best offers!</h1>
        {/* <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p> */}
      
        <div className="flex flex-wrap -m-4 text-center">
        <div className="p-3 md:w-1/3 sm:w-1/2 w-full items-center">
          <div className="bg-[#8d520f] border border-gray-200 px-4 py-6 rounded-2xl">
            <a className="text-white inline-flex">
              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
            </a>
            <h2 className="title-font font-bold text-sm text-white text-center">Experience Free Forever</h2>
            <p className="leading-relaxed text-xs text-center text-white mt-2">Experience KwikPass without any subscription fees</p>
          </div>
        </div>

        <div className="p-3 md:w-1/3 sm:w-1/2 w-full items-center">
          <div className="bg-[#8d520f] border border-gray-200 px-4 py-6 rounded-2xl">
            <a className="text-white inline-flex">
              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
            </a>
            <h2 className="title-font font-bold text-sm text-white text-center">Experience Free Forever</h2>
            <p className="leading-relaxed text-xs text-center text-white mt-2">Experience KwikPass without any subscription fees</p>
          </div>
        </div>

        <div className="p-3 md:w-1/3 sm:w-1/2 w-full items-center">
          <div className="bg-[#8d520f] border border-gray-200 px-4 py-6 rounded-2xl">
            <a className="text-white inline-flex">
              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-5 w-5"/>
            </a>
            <h2 className="title-font font-bold text-sm text-white text-center">Experience Free Forever</h2>
            <p className="leading-relaxed text-xs text-center text-white mt-2">Experience KwikPass without any subscription fees</p>
          </div>
        </div>
      </div>
      </div>

      <div className="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-5 py-10 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      
        <h2 className="text-gray-900 text-xl font-bold title-font text-center">Login / Signup</h2>
        <div className="relative mb-4 text-center">
          <label htmlFor="full-name" className="leading-7 text-xs text-gray-600 text-center">Enter Mobile Number</label>
          <input type="text" id="phone" name="phone" placeholder="Enter Mobile Number" className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4 text-xs">
          <input type="checkbox" id="notify" name="notify" value="notify"/>
          <label htmlFor="notify"> Notify me for any updates & offers</label>
        </div> 

        <div className="grid grid-cols-3 items-center text-gray-400 mb-3">
            <hr className="border-gray-400"/>
            <p className="text-center">or</p>
            <hr className="border-gray-400"/>
        </div>

        <button className="border-[#25d366] border text-black bg-white inline-flex py-2 px-5 rounded-lg items-center focus:outline-none">
          <svg className="h-7 w-7 text-[#25d366] transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path className="" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="title-font font-medium">Whatsapp Login</span>
          </span>
        </button>
        <p className="text-xs text-gray-500 mt-5 text-center">I accept that I have read & understood Gokwik's Privacy Policy and T&Cs.</p>
        <p className="text-xs text-gray-500 mt-5 text-center">Trouble logging in?</p>
      </div>

      </div>
    </div>
   </section>
      
  </div>
  );
};

export default Contact;