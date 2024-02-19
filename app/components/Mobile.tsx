import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { fa2 } from '@fortawesome/free-solid-svg-icons';
import { fa3 } from '@fortawesome/free-solid-svg-icons';
import { useMultistepForm } from "@/app/components/useMultistepForm";
// import { Mobile } from "@/app/components/Mobile";
import { Otp } from "@/app/components/otp";
import { AddressForm } from "@/app/components/AddressForm";
import { Payment } from "@/app/components/Payment";

export function Mobile() {


    const { steps, currentStepIndex, step, isFirstStep, isLstStep, back, next } = useMultistepForm([<Otp/>, <AddressForm/>, <Payment/>])


    
    return (
        <div>
        <div className="flex mb-14">
          <h2 className="flex-grow border-b border-[#0e9343] py-2 text-sm px-1 text-[#f6a73c]"><span className="rounded-full bg-white border-2 border-[#f6a73c] text-[#f6a73c] px-1"><FontAwesomeIcon icon={fa1} /></span> Mobile</h2>
          <h2 className="flex-grow border-b border-gray-300 py-2 text-sm px-1 text-[#c9c9cb]"><span className="rounded-full bg-[#ededed] border-2 border-[#ededed] text-[#c9c9cb] px-1"><FontAwesomeIcon icon={fa2} /></span> Address</h2>
          <h2 className="flex-grow border-b border-gray-300 py-2 text-sm px-1 text-[#c9c9cb]"><span className="rounded-full bg-[#ededed] border-2 border-[#ededed] text-[#c9c9cb] px-1"><FontAwesomeIcon icon={fa3} /></span> Payment</h2>
        </div>
        <div className="items-center justify-center container px-32">
          <h2 className="text-gray-900 text-xl mb-7 title-font text-center">Enter Mobile Number</h2>
          <div className="mb-2 text-center">
            <input type="number" id="phone" name="phone" placeholder="+91 | Enter Number" className="w-full bg-white rounded-lg border border-[#f6a73c] text-base outline-none text-black py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div className="mb-16 text-xs">
            <input type="checkbox" id="notify" name="notify" value="notify"/>
            <label htmlFor="notify"> Notify me for orders, updates & offers </label>
          </div> 
          {/* <button onClick={next} className="text-white hover:bg-[#fbdcb1] bg-[#f6a73c] inline-flex w-full py-3 rounded-lg items-center justify-center text-center focus:outline-none">Continue <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5"/></button> */}
          {/* <p className="text-xs text-gray-500 mt-5 text-center">By proceeding, I accept that I have read and understood the Gokwik's Privacy Policy and T&C</p> */}
        </div>
        </div>
    )
}


