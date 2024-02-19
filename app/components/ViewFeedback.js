"use client";
import React, { useState } from 'react';
import Feedback from '@/app/components/feedback';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';






export default function ViewFeedback() {

  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const openFeedback = () => {
      setIsFeedbackOpen(true);
  };
  const closeFeedback = () => {
      setIsFeedbackOpen(false);
  };



    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
      };

  return (
     

        <div className="bg-white" onClick={openFeedback}>
        {/* onClick={openFeedback} */}
        <Feedback isOpen={isFeedbackOpen} onClose={closeFeedback} />
            <img className="h-40 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="content"/>
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
            </div>
        </div>


  );
}