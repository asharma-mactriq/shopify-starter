import React from 'react';


const Contact = ({ isOpen, onClose }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
      };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-30 ${isOpen ? '' : 'hidden'} flex items-center justify-center`}>
   
   <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 sm:px-24 mx-auto">
    <div className="lg:w-6/7 bg-white rounded-2xl border border-gray-300 mx-auto flex flex-wrap">
      <div className="w-full sm:px-6 lg:py-6 mb-6 lg:mb-0">
        <div className="flex">
        <h2 className="text-lg font-medium title-font text-black">Wait, are you sure?</h2>
        <div className="ml-auto justify-items-end flex justify-end">
          <button type="button" onClick={onClose} className="bg-[#dddddd] text-white justify-items-end flex justify-end px-2 py-2 rounded-full">X</button>
        </div>
        </div>
        <p className="text-sm">Products in huge demand might run <span className="text-[#f5ae43]">Out of Stock</span></p>
        <p className="text-sm">Can you let us know the reason(s)?</p>
  

        <form action="" className="mt-5 ">
          <div className="py-2 border-b text-sm">
            <input type="checkbox" id="type1" name="type1" value="I found a better price or product elsewhere"/>
            <label htmlFor="type1"> I found a better price or product elsewhere</label><br/>
          </div>

          <div className="py-2 border-b text-sm">
            <input type="checkbox" id="type2" name="type2" value="I want to add or modify items in my cart"/>
            <label htmlFor="type2"> I want to add or modify items in my cart</label><br/>
          </div>

          <div className="py-2 border-b text-sm">
            <input type="checkbox" id="type3" name="type3" value="I find pricing too high or unclear"/>
            <label htmlFor="type3"> I find pricing too high or unclear</label><br/>
          </div>

          <div className="py-2 border-b text-sm">
            <input type="checkbox" id="type4" name="type4" value="I am not sure about quality and return/exchange policy"/>
            <label htmlFor="type4"> I am not sure about quality and return/exchange policy</label><br/>
          </div>

          <div className="py-2 border-b text-sm">
            <input type="checkbox" id="type5" name="type5" value="I am facing issues in applying coupons"/>
            <label htmlFor="type5"> I am facing issues in applying coupons</label><br/>
          </div>

          <div className="py-2 border-b text-sm">
            <input type="checkbox" id="type6" name="type6" value="I am not sure about the delivery dates"/>
            <label htmlFor="type6"> I am not sure about the delivery dates</label><br/>
          </div>

          <div className="py-2 border-b text-sm">
            <input type="checkbox" id="type7" name="type7" value="Others"/>
            <label htmlFor="type7"> Others</label><br/>
          </div>
        </form>


        <div className="flex mt-5">
          {/* <span className="title-font font-medium text-2xl text-gray-900">$58.00</span> */}
          <a href="../"><button className="flex ml-auto text-[#df3c3b] bg-white text-sm font-bold border py-3 border-[#df3c3b] py-2 px-6 rounded">Skip and exit</button></a>
          <a href="../"><button className="rounded text-white bg-[#0e9343] text-sm py-3 font-bold inline-flex items-center justify-center px-4 ml-4">Continue Purchase</button></a>
        </div>
      </div>
      {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/> */}
    </div>
  </div>
</section>
      
  </div>
  );
};

export default Contact;