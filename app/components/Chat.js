import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const Chat = ({ isOpen, onClose }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
      };

  return (
    <div className={`fixed inset-0 ${isOpen ? '' : 'hidden'} rounded-xl  bottom-0 justify-items-end flex justify-end sm:mt-32 sm:mb-12`}>
    <div className="bg-white border-[#5bb974] border rounded-xl shadow-md w-96 h-full">

        <div className="bg-[#5bb974] w-full rounded-b-0 rounded-t-xl top-0 p-4">
        <a className="flex w-full mx-auto inline-flex items-center">
          <img alt="blog" src="https://dummyimage.com/103x103" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-white">Adilqadri Perfume Expert</span>
            <span className="text-black text-xs tracking-widest mt-0.5">Working for smooth experience</span>
          </span>
          <div className="inline-flex justify-items-end flex justify-end">
          <button type="button" onClick={onClose} className="text-white font-bold text-xl">X</button>
          </div>
        </a>
        </div>

        <div className="flex-grow">
        {/* ... chat message area (if applicable) ... */}
        </div>

      <div className="bottom-0 p-4 fixed sm:mb-12">
      <form>
        <div className="relative mt-1 w-full">
            <input type="text" id="password" className="bg-[#f7fcf8] w-full pl-3 pr-40 py-3 border-2 border-[#5bb974] rounded-lg hover:border-gray-300 focus:outline-none focus:border-[#5bb974] transition-colors" placeholder="Ask me anything"/>
            <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"><FontAwesomeIcon icon={faPaperPlane} classNam="text-[#e6f5ea] h-5 w-5"/></button>
        </div>
      </form>
      </div>

    </div>
  </div>
  );
};

export default Chat;