import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useMultistepForm } from "@/app/components/useMultistepForm";
import { Blank } from "@/app/components/blank";
import { Review1 } from "@/app/components/review1";
import { Review2 } from "@/app/components/review2";
import { Review3 } from "@/app/components/review3";
import { Review4 } from "@/app/components/review4";
import { Review5 } from "@/app/components/review5";


const Review = ({ isOpen, onClose }) => {

  const { steps, currentStepIndex, step, isFirstStep, isLstStep, back, next } = useMultistepForm([<Blank/>, <Review1/>, <Review2/>, <Review3/>, <Review4/>, <Review5/>])


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
      };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-60 ${isOpen ? '' : 'hidden'} flex items-center justify-center`}>



    
  <div className="lg:w-1/2 md:w-2/3 bg-white rounded-xl mx-auto">
      <div className="text-left">
        <button className="mb-24 p-3" onClick={onClose} >X</button>
      </div>
      <div className="flex flex-col text-center w-full">



<form>
  <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>{currentStepIndex + 1 } / {steps.length}</div>
  {step}
  {/* <div style={{ marginTop: "1rem", display: "flex", gap: ".5rem", justifyContent: "flex-end", }}>
  {!isFirstStep && <button type="button" onClick={back}>
    Back
  </button>}
  <button type="button" onClick={next}>
    {isLstStep ? "Finish" : "Next"} 
  </button>
  </div> */}
  <div className="flex p-3">
  {!isFirstStep && <button type="button" className="p-3 bg-white text-black font-bold py-2 px-4 hover:bg-[#e2e2e2] rounded-lg" onClick={back}><FontAwesomeIcon icon={faArrowLeft} className="w-5 h-4 mr-2"/> Back</button>}
    <button type="button" className="ml-auto p-3 bg-black text-white font-bold py-2 px-5 rounded-lg" onClick={next}>{isLstStep ? "Done" : "Next"}</button>
  </div>
</form>
 

    </div>
  </div>
      
  </div>
  );
};

export default Review;