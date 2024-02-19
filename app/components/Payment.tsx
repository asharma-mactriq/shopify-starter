import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { fa2 } from '@fortawesome/free-solid-svg-icons';
import { fa3 } from '@fortawesome/free-solid-svg-icons';
import { faGooglePay } from '@fortawesome/free-brands-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';





export function Payment() {
    return (
        <div>
        <div className="flex">
          <h2 className="flex-grow border-b border-gray-300 py-2 text-sm px-1 text-[#c9c9cb]"><span className="rounded-full bg-[#ededed] border-2 border-[#ededed] text-[#c9c9cb] px-1"><FontAwesomeIcon icon={fa1} /></span> Mobile</h2>
          <h2 className="flex-grow border-b border-gray-300 py-2 text-sm px-1 text-[#c9c9cb]"><span className="rounded-full bg-[#ededed] border-2 border-[#ededed] text-[#c9c9cb] px-1"><FontAwesomeIcon icon={fa2} /></span> Address</h2>
          <h2 className="flex-grow border-b border-[#0e9343] py-2 text-sm px-1 text-[#f6a73c]"><span className="rounded-full bg-white border-2 border-[#f6a73c] text-[#f6a73c] px-1"><FontAwesomeIcon icon={fa3} /></span> Payment</h2> 
        </div>
        {/* <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p> */}
        
        <div className="items-center justify-center container">
        <p className="text-sm py-2">Hey! welcome +91 1234567890</p>
        
        <div className="container p-3 bg-gray-100 rounded-lg">
          <h2 className="text-black font-bold py-1">Deliver To</h2>
          <h2>Harsh</h2>
          <p>Rander Road, Adajan, Surat, Gujarat, 395001</p>
        </div>

        <p className="mt-4 text-sm text-center">please select payment method to complete the order</p>
        <p className="mb-4 text-sm text-[#df3c3b] font-bold text-center">Free Shipping and Additional 5% Discounts on Payments</p>

      {/* <div className="overflow-auto"> */}
        <div className="flex flex-wrap -m-2 p-2 text-white">
          <div className="p-1 w-1/2  bg-white rounded-lg">
            <div className="container bg-[#16a34a] p-3 rounded-lg h-32">
              <h2 className="line-through">₹1499</h2>
              <div className="flex">
                <h2 className="mr-2">₹1424.05</h2>
                <p className="bg-[#5ee983] p-1 text-xs mr-2">Free Shipping + 5% off upto Rs 100</p>
                <FontAwesomeIcon icon={faGooglePay} className="w-10 h-10 border rounded-full bg-gray-200 text-black px-1 py-1"/>
              </div>
              <p>Pay via UPI</p>
            </div>
          </div>
          <div className="p-1 w-1/2  bg-white rounded-lg">
            <div className="container bg-[#f6a73c] p-3 rounded-lg h-32">
              <h2 className="line-through">&nbsp;</h2>
              <div className="flex">
                <h2 className="mr-2">₹1424.05</h2>
                <p className="bg-[#fbc27a] p-1 text-xs mr-2">Free Shipping + 5% off upto Rs 100</p>
                <FontAwesomeIcon icon={faCreditCard} className="w-8 h-8 border rounded-full bg-gray-200 text-black px-2 py-2"/>
              </div>
              <p>Pay via Card</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-2 p-2 text-white">
          <div className="p-1 w-1/2  bg-white rounded-lg">
            <div className="container bg-[#f6a73c] p-3 rounded-lg h-32">
              {/* <h2 className="line-through">₹1499</h2> */}
              <div className="flex">
                <h2 className="mr-2">₹1424.05</h2>
                <p className="bg-[#fbc27a] p-1 text-xs mr-2">Free Shipping + 5% off upto Rs 100</p>
                <FontAwesomeIcon icon={faPaypal} className="w-8 h-8 border rounded-full bg-gray-200 text-black px-3 py-2"/>
              </div>
              <p>Pay via Wallets</p>
            </div>
          </div>
          <div className="p-1 w-1/2  bg-white rounded-lg">
            <div className="container bg-[#f6a73c] p-3 rounded-lg h-32">
              {/* <h2 className="line-through">₹1499</h2> */}
              <div className="flex">
                <h2 className="mr-2">₹1548</h2>
                <p className="bg-[#fbc27a] p-1 text-xs mr-2 text-black">Rs 49 COD Free Added</p>
                {/* <p>&nbsp;</p> */}
                <FontAwesomeIcon icon={faMoneyBill} className="w-8 h-8 border rounded-full bg-gray-200 text-black px-2 py-2"/>
              </div>
              <p>Cash on Delivery</p>
            </div>
          </div>
        </div>
      {/* </div> */}
      
        {/* <button className="text-white hover:bg-[#fbdcb1] bg-[#f6a73c] inline-flex w-full py-3 rounded-lg items-center justify-center text-center focus:outline-none">Continue <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5"/></button> */}
        {/* <p className="text-xs text-gray-500 mt-5 text-center">By proceeding, I accept that I have read and understood the Gokwik's Privacy Policy and T&C</p> */}
        </div>
        </div>
    )
}