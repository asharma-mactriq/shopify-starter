

export function Review5() {

 
    return (
        <div>
                  <div className="flex flex-col w-full">
                    <h1 className="font-bold sm:text-3xl text-center text-black">About you</h1>
                    <div className="sm:mb-44 mt-5">
                    <div className="sm:px-32 mx-auto">
                        <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                            <label htmlFor="first_name" className="leading-7 text-black font-bold">First name</label>
                            <input type="text" id="first_name" name="first_name" className="w-full bg-white rounded-lg border border-gray-500 border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                            <label htmlFor="last_name" className="leading-7 text-black font-bold">Last name</label>
                            <input type="text" id="last_name" name="last_name" className="w-full bg-white rounded-lg border border-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                            <label htmlFor="email" className="leading-7 text-black font-bold">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded-lg border border-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <p className="text-sm mt-5 text-center">By submitting, I acknowledge the Terms of Service and Privacy Policy and that my review will be publicly posted and shared online</p>
                        </div>
                        </div>        
                    </div>
                    </div>
                </div>
        </div>
    )
}

