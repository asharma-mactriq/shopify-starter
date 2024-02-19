import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Feedback = ({ isOpen, onClose }) => {

    const handleSubmit = (e) => {
        e.preventDefault(); 
        // Handle form submission logic here
      };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-60 ${isOpen ? '' : 'hidden'} flex items-center justify-center`}>
   
   <div className="lg:w-1/2 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-r rounded-2xl" src="https://dummyimage.com/400x400"/>
      <div className="bg-white rounded-l rounded-2xl lg:w-1/2 w-full p-6 lg:py-6 mt-6 lg:mt-0">
        <div className="flex">
          <h2 className="text-lg title-font text-black">Akshay J.</h2>
          <button onClick={onClose} className="ml-auto">X</button>
        </div>
        <div className="flex ">
          <div className="flex md:flex mt-2">
              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
              <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
          </div>
          <h2 className="ml-auto text-gray-400 text-sm mt-2">2/15/2024</h2> 
        </div>
        <div className="text-left">
        <p className="leading-relaxed py-2">👍👍👌</p>
        <h2 className="text-sm text-gray-400">Long Lasting</h2>
        <h2 className="text-sm">5 to 10 Hours</h2>
        </div>
      </div>
    </div>
      
  </div>
  );
};

export default Feedback;