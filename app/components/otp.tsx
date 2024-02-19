import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { fa2 } from '@fortawesome/free-solid-svg-icons';
import { fa3 } from '@fortawesome/free-solid-svg-icons';


export function Otp() {
    return (
        <div>
        <div className="flex mb-14">
          <h2 className="flex-grow border-b border-[#0e9343] py-2 text-sm px-1 text-[#f6a73c]"><span className="rounded-full bg-white border-2 border-[#f6a73c] text-[#f6a73c] px-1"><FontAwesomeIcon icon={fa1} /></span> Mobile</h2>
          <h2 className="flex-grow border-b border-gray-300 py-2 text-sm px-1 text-[#c9c9cb]"><span className="rounded-full bg-[#ededed] border-2 border-[#ededed] text-[#c9c9cb] px-1"><FontAwesomeIcon icon={fa2} /></span> Address</h2>
          <h2 className="flex-grow border-b border-gray-300 py-2 text-sm px-1 text-[#c9c9cb]"><span className="rounded-full bg-[#ededed] border-2 border-[#ededed] text-[#c9c9cb] px-1"><FontAwesomeIcon icon={fa3} /></span> Payment</h2>
        </div>
        {/* <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p> */}
        
        <div className="items-center justify-center container px-32">
        <h2 className="text-gray-900 text-xl mb-2 title-font text-center">Verify Mobile Number</h2>
        <p className=" text-center">To Use Your Saved Address, Enter the OTP Sent to</p>
        <p className="text-[#f6a73c;] text-center mb-5">+91 - 1234567890</p>
        <div className="flex mb-2 text-center">
          <input type="text" id="otp" name="otp" className="w-full mr-3 bg-white rounded-lg border border-[#f6a73c] text-base outline-none text-black py-2 px-6 leading-8 transition-colors duration-200 ease-in-out"/>
          <input type="text" id="otp" name="otp" className="w-full mr-3 bg-white rounded-lg border border-[#f6a73c] text-base outline-none text-black py-2 px-6 leading-8 transition-colors duration-200 ease-in-out"/>
          <input type="text" id="otp" name="otp" className="w-full mr-3 bg-white rounded-lg border border-[#f6a73c] text-base outline-none text-black py-2 px-6 leading-8 transition-colors duration-200 ease-in-out"/>
          <input type="text" id="otp" name="otp" className="w-full bg-white rounded-lg border border-[#f6a73c] text-base outline-none text-black py-2 px-6 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="mb-10 text-xs text-center">
          {/* <input type="checkbox" id="notify" name="notify" value="notify"/> */}
          <label htmlFor="notify" className="text-lg text-[#f6a73c;] text-center"> Resend OTP </label>
        </div> 
        {/* <button className="text-white hover:bg-[#fbdcb1] bg-[#f6a73c] inline-flex w-full py-3 rounded-lg items-center justify-center text-center focus:outline-none">Continue <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5"/></button> */}
        {/* <p className="text-xs text-gray-500 mt-5 text-center">By proceeding, I accept that I have read and understood the Gokwik's Privacy Policy and T&C</p> */}
        </div>
        </div>
    )
}