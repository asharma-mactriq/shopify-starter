import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { fa2 } from '@fortawesome/free-solid-svg-icons';
import { fa3 } from '@fortawesome/free-solid-svg-icons';



export function AddressForm() {
    return (
        <div>
        <div className="flex">
          <h2 className="flex-grow border-b border-gray-300 py-2 text-sm px-1 text-[#c9c9cb]"><span className="rounded-full bg-[#ededed] border-2 border-[#ededed] text-[#c9c9cb] px-1"><FontAwesomeIcon icon={fa1} /></span> Mobile</h2>
          <h2 className="flex-grow border-b border-[#0e9343] py-2 text-sm px-1 text-[#f6a73c]"><span className="rounded-full bg-white border-2 border-[#f6a73c] text-[#f6a73c] px-1"><FontAwesomeIcon icon={fa2} /></span> Address</h2>
          <h2 className="flex-grow border-b border-gray-300 py-2 text-sm px-1 text-[#c9c9cb]"><span className="rounded-full bg-[#ededed] border-2 border-[#ededed] text-[#c9c9cb] px-1"><FontAwesomeIcon icon={fa3} /></span> Payment</h2>
        </div>
        {/* <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p> */}
        
        <div className="items-center justify-center container">
        <div className="flex py-3 border-b">
          <h2 className="text-gray-900 title-font font-medium">Edit Address</h2>
          <p className="text-xs ml-auto">*Mandatory Fields</p>
        </div>
        <h2 className="text-[#f6a73c] py-2">+91 - 1234567890</h2>

      {/* <div className="overflow-auto"> */}
        <div className="relative mb-4">
            <input type="text" id="floating_filled1" className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 peer" placeholder=" " />
            <label htmlFor="floating_filled1" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Pincode *</label>
        </div>

        <div className="flex flex-wrap -m-2 mb-4">
          <div className="p-2 w-1/2 relative">
              <input type="text" id="floating_filled2" className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 peer" placeholder=" " />
              <label htmlFor="floating_filled2" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">City *</label>
          </div>
          <div className="p-2 w-1/2 relative">
              <input type="text" id="floating_filled2" className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 peer" placeholder=" " />
              <label htmlFor="floating_filled2" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">State *</label>
          </div>
        </div>

        <div className="relative mb-4">
            <input type="text" id="floating_filled1" className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 peer" placeholder=" " />
            <label htmlFor="floating_filled1" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Full Name *</label>
        </div>

        <div className="relative mb-4">
            <input type="text" id="floating_filled1" className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 peer" placeholder=" " />
            <label htmlFor="floating_filled1" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email Address *</label>
        </div>

        <div className="flex mb-4">
          <p className="mr-3">Address Type</p>
            <div className="px-4 border rounded py-1 mr-2">
              <input type="radio" id="home" name="address_type" value="Home"/>
              <label htmlFor="home" className="text-[#f6a73c]">Home</label>
            </div>
            <div className="px-4 border rounded py-1">
              <input type="radio" id="work" name="address_type" value="Work"/>
              <label htmlFor="work" className="text-[#f6a73c]">Work</label>
            </div>
        </div>

        <div className="flex mb-4">
          <p className="mr-2">Shipping method</p>
          <input type="radio" id="home" name="address_type" value="Home"/>
          <label htmlFor="home" className="text-[#f6a73c]">Shipping @ ₹0</label>
        </div>
      {/* </div> */}
      
        {/* <button className="text-white hover:bg-[#fbdcb1] bg-[#f6a73c] inline-flex w-full py-3 rounded-lg items-center justify-center text-center focus:outline-none">Continue <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5"/></button> */}
        {/* <p className="text-xs text-gray-500 mt-5 text-center">By proceeding, I accept that I have read and understood the Gokwik's Privacy Policy and T&C</p> */}
        </div>
        </div>
    )
}