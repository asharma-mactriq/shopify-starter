import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export function Review1() {

 
    return (
        <div>
        <h1 className="sm:text-2xl text-lg title-font mb-4 text-gray-900">How would you rate this item?</h1>
        <div className="flex justify-center md:flex py-2 mt-5">
            <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-10 w-10 mr-2"/>
            <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-10 w-10 mr-2"/>
            <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-10 w-10 mr-2"/>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-10 w-10 mr-2 text-[#f2b01e]" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-10 w-10 text-[#f2b01e]" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
        </div>
        <div className="flex sm:px-64 text-black text-sm mb-44"> 
          <p>Dislike it</p>
          <p className="ml-auto">Love it!</p>
        </div>
        </div>
    )
}

