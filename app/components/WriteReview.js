"use client";
import React, { useState } from 'react';
import Review from '@/app/components/review';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';  

export default  function WriteReview() {

    const [isReviewOpen, setIsReviewOpen] = useState(false);
    const openReview = () => {
        setIsReviewOpen(true);
    };
    const closeReview = () => {
        setIsReviewOpen(false);
    }; 


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
      };

  return (
    
    <div className="flex justify-center">
    <button type="button" onClick={openReview} className="sm:ml-36 mr-2 mt-10 text-black bg-transparent border py-2 px-20 hover:bg-[#e8e8e8] px-4 focus:outline-none text-lg">Write a review</button>
    <Review isOpen={isReviewOpen} onClose={closeReview} />
    {/* <label htmlFor="input4" className="mt-10 text-black bg-transparent border py-2 hover:bg-[#e8e8e8] px-4 focus:outline-none text-lg"><FontAwesomeIcon icon={faSliders} className="w-5 h-5"/></label>               */}
    </div>

  );
}