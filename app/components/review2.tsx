import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

export function Review2() {

 
    return (
        <div>
            <div className="flex flex-col text-center w-full sm:mb-32 sm:px-40">
                <h1 className="font-bold sm:text-3xl text-black">Show it off</h1>
                <p>We'd love to see it in action!</p>
                <div className="p-3 border border-gray-400 rounded-xl sm:mb-12 mt-5">
                <h1 className="sm:text-xl text-lg title-font mb-4 text-gray-900 font-bold">Get Rs. 100 off your next purchase!</h1>
                <button className="bg-black text-white font-bold text-lg w-full py-2 rounded-lg mb-2"><FontAwesomeIcon icon={faImage} className="w-5 h-5 mr-1"/> Add photos</button>
                <button className="bg-black text-white font-bold text-lg w-full py-2 rounded-lg"><FontAwesomeIcon icon={faCirclePlay} className="w-5 h-5 mr-1"/> Add video</button>
                </div>
            </div>
        </div>
    )
}

