

export function Review4() {

 
    return (
        <div>
            <div className="flex flex-col text-center w-full sm:px-40">
                <h1 className="font-bold sm:text-3xl text-black">Tell us more!</h1>
                <div className="p-3 sm:mb-44 mt-5">
                <textarea id="message" name="message" className="w-full bg-white bg-opacity-50 rounded-xl border border-gray-300 focus:bg-white h-52 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
            </div>
        </div>
    )
}

