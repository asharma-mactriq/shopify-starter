// "use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// import {
//   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
//   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
// } from "../links";

import shopifyFetch from "@/utils/shopifyClient";;
import sim from "@/template/products";



export default async function ProductPage() {
  let [collections, collectionImages, products, images, urlProduct, prices] = await shopifyFetch();

  let similar = sim;  
  console.log("PRICES FETCH",prices);
  {prices.map((price, index) => (
    console.log("regular",price.regularPrice,price.compareAtPrice)
  ))}



//   const [quantity, setQuantity] = useState(1); // Initial quantity is 1

//     const decreaseQuantity = () => {
//         if (quantity > 1) {
//             setQuantity(quantity - 1);
//         }
//     };

//     const increaseQuantity = () => {
//         setQuantity(quantity + 1);
//     };




  return (
    <React.Fragment>
     


<section className="bg-white text-gray-600 body-font">
  <div className="container px-5 sm:px-24 mx-auto flex flex-wrap items-center">
      <div className="flex flex-col text-center w-full py-16">
        <h1 className="text-5xl title-font text-gray-900 tracking-tight font-serif">Cart</h1>
      </div>
      <div className="lg:w-3/5 md:w-1/2 lg:pr-0 pr-0">
    

<table className="table-auto text-black w-full">
  <thead>
    <tr className="text-xs font-medium border-b">
      <th className="text-left py-3">PRODUCT</th>
      <th className="text-right py-3">QUANTITY</th>
      <th className="text-right py-3">TOTAL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>

        <div className="mt-8">
          <div className="bg-[#f6f6f6] p-2 rounded-lg h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" className="border border-gray-300 flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4" src="../"/>
            <div className="flex-grow sm:pl-8">
              <h2 className="title-font text-gray-900">Assorted Luxury Attar Perfume Gift Set (6 × 5.5Ml)</h2>
              <p className="leading-relaxed font-bold text-black">₹1,499</p>
            </div>
          </div>
        </div>

      </td>
      <td className="item-right text-right">
      <div className="w-24 ml-auto">
          <div className="flex flex-row h-8 mt-4 bg-transparent rounded-lg">
              <button
                  className="w-8 h-full text-gray-600 bg-white rounded-l border-l border-t border-b outline-none cursor-pointer dark:text-gray-400 dark:bg-gray-900">
                  <span className="m-auto text-2xl font-thin">-</span>
              </button>
              <input type="number"
                  className="flex items-center w-full font-semibold text-center border-t border-b text-gray-700 placeholder-gray-700 bg-white outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                  placeholder="1"/>
              <button
                  className="w-8 h-full text-gray-600 bg-white rounded-r border-r border-t border-b outline-none cursor-pointer dark:text-gray-400 dark:bg-gray-900">
                  <span className="m-auto text-2xl font-thin">+</span>
              </button>
          </div>
      </div>
      </td>
      <td className="text-right text-[#956827] font-bold">₹1,499<br/>
      <p className="text-right line-through text-sm text-black font-medium">₹2,999</p>
      </td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      {/* <td className="text-right line-through text-sm">₹2,999</td> */}
    </tr>
    <tr>
      {/* <td>Shining Star</td> */}
      {/* <td>Earth, Wind, and Fire</td> */}
      {/* <td>1975</td> */}
    </tr>
  </tbody>
</table>








    
    
        <div className="flex justify-center py-3">
            <div className=" w-full border bg-white py-8">
              
            <input type="checkbox" id="input3" className="absolute peer opacity-0"/>
              <div className="flex">
                <label htmlFor="input3" className="text-sm font-medium text-black flex items-center px-8">ESTIMATE SHIPPING </label>
                <FontAwesomeIcon icon={faChevronDown} className="ml-auto flex px-8"/>
              </div>

                <div className="max-h-0 overflow-hidden peer-checked:max-h-full px-8">

                <div className="flex flex-wrap -m-2 mt-5 ">
                    <div className="p-2 w-1/3">
                        <div className="">
                            <label htmlFor="country" className="leading-7 text-black">Country</label><br/>
                            <select name="country" id="country" className="w-full bg-white rounded border border-gray-300 text-base outline-none focus:border-black focus:ring-2 focus:ring-black text-black py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Åland Islands">Åland Islands</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">Bouvet Island</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote D'ivoire">Cote D'ivoire</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern Territories">French Southern Territories</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guernsey">Guernsey</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-bissau">Guinea-bissau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                <option value="Korea, Republic of">Korea, Republic of</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macao">Macao</option>
                                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                <option value="Moldova, Republic of">Moldova, Republic of</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montenegro">Montenegro</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn">Pitcairn</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russian Federation">Russian Federation</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint Helena">Saint Helena</option>
                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                <option value="Saint Lucia">Saint Lucia</option>
                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                <option value="Taiwan">Taiwan</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Timor-leste">Timor-leste</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Viet Nam">Viet Nam</option>
                                <option value="Virgin Islands, British">Virgin Islands, British</option>
                                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                <option value="Western Sahara">Western Sahara</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                            </select>


                        </div>
                    </div>
                    <div className="p-2 w-1/3">
                        <div className="relative">
                            <label htmlFor="province" className="leading-7 text-black">Province</label>
                            <input name="province" id="province" className="w-full bg-white rounded border border-gray-300 text-base outline-none focus:border-black focus:ring-2 focus:ring-black text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>                        
                        </div>
                    </div>
                    <div className="p-2 w-1/3">
                        <div className="relative">
                            <label htmlFor="zip_codr" className="leading-7 text-black">Zip code</label>
                            <input type="text" id="zip_codr" name="zip_codr" className="w-full bg-white rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                    </div>
                </div>
                <div className="w-full py-4">
                    <button className="mx-auto text-white bg-black font-bold py-3 px-8 rounded-lg text-lg">Estimate</button>
                </div>
                </div>
            </div>
        </div>
   
    </div>
    
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <p>Click & get upto 30% off using POPcoins</p>
        <div className="flex mt-5">
            <h2 className="text-gray-900 text-lg font-bold title-font mb-5 font-serif">Total</h2>
            <p className="font-serif ml-auto font-bold">₹1,499</p>
        </div>
        <p>Shipping & taxes calculated at checkout</p>
        <div className="flex justify-center py-3">
            <div className=" w-full rounded-3xl bg-[#F4F4F4]">
                <input type="checkbox" id="input4" className="absolute peer opacity-0"/>
                <label htmlFor="input4" className="tracking-[1px] flex items-center underline">Add order note</label>
                <div className="max-h-0 overflow-hidden peer-checked:max-h-full mt-4">
                    <textarea placeholder="How can we help you?" className="w-full bg-transparent border border-gray-300 rounded-xl p-2"></textarea>
                </div>
            </div>
        </div>
      <button className="text-black font-serif font-bold bg-[#f6a73c] border-0 py-3 px-8 rounded text-lg">Place order</button>
    </div>

  </div>
</section>



   
    <section className="bg-white text-gray-600 body-font">
    <div className="container mx-auto text-[#491b0e] px-5 py-12">
        <div className="flex flex-col text-center w-full mb-8">
        <h1 className="text-3xl font-medium font-serif title-font tracking-tight">You may also like</h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
        {products.map((product, index) => (
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full" key={product.id}>
            <div className="px-4 py-6">
                <img className="h-auto max-w-full" src={urlProduct[index]} alt={images[index].altText}/>
                <button className="bg-white hover:bg-gray-300 border border-black text-black font-bold rounded-lg w-full p-3 mt-2">Add To Cart</button>
                <p className="leading-relaxed">{product.handle}</p>
                <div className="flex justify-center md:flex py-2">
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <p className="ml-1 text-sm">(9,451)</p>
                </div>
                <p className="leading-relaxed font-bold">₹{prices[index].regularPrice}  
                {/* {prices[index].compareAtPrice &&  */}
                    <span className="line-through text-xs ml-1">₹{prices[index].compareAtPrice}</span>
                {/* } */}
                </p>
                
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>





    <section className="bg-[#213d2f] body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"/> */}
              <div className="w-full">
                {/* <span className="inline-flex"> */}
                  <a className="text-white inline-flex">
                    <FontAwesomeIcon icon={faCube} className="h-5 w-5"/>
                  </a>
                {/* </span> */}
                <h2 className="title-font font-medium text-sm text-white mt-5">EASY RETURNS</h2>
                <p className="py-5 text-white">Return product within 7 days of purchase.</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201"/> */}
              <div className="w-full">
                <span className="inline-flex">
                  <a className="text-white inline-flex">
                    <FontAwesomeIcon icon={faPhone} className="h-5 w-5"/>
                  </a>
                </span>
                <h2 className="title-font font-medium text-sm text-gray-900 mt-5 text-white">CUSTOMER SERVICE</h2>
                <p className="py-5 text-white">We are available from Monday to Saturday to answer your questions.</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202"/> */}
              <div className="w-full">
                <span className="inline-flex">
                  <a className="text-white inline-flex">
                    <FontAwesomeIcon icon={faLock} className="h-5 w-5"/>
                  </a>
                </span>
                <h2 className="title-font font-medium text-sm text-gray-900 mt-5 text-white">SECURE PAYMENT</h2>
                <p className="py-5 text-white">Your payment information is processed securely.</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203"/> */}
              <div className="w-full">
                <span className="inline-flex">
                  <a className="text-white inline-flex">
                    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5"/>
                  </a>
                </span>
                <h2 className="title-font font-medium text-sm text-gray-900 mt-5 text-white">CONTACT US</h2>
                <p className="py-5 text-white">Need to contact us ? Just send us an e-mail at info@adilqadri.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    </React.Fragment>
  );
}