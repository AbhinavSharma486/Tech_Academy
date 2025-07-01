import React, { useState } from 'react'
import { RiFileList2Fill, RiFileUserFill, RiGraduationCapLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { GoBook } from "react-icons/go";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import comp from '../../../assets/LandingPageImage/HeroImages/comp.png';
import { PiCityLight } from "react-icons/pi";
import CustomDropdown from './CustomDropdown';

function ApplyUpcomingBatches() {
  const [open, setOpen] = useState(false);
  

  const states = [
  { name: "Andhra Pradesh", cities: ["Anantapur", "Guntur", "Kadapa", "Kakinada", "Kurnool", "Nellore", "Rajahmundry", "Tirupati", "Vijayawada", "Visakhapatnam"] },
  { name: "Arunachal Pradesh", cities: ["Bhalukpong", "Bomdila", "Daporijo", "Dirang", "Itanagar", "Pasighat", "Tawang", "Ziro"] },
  { name: "Assam", cities: ["Bongaigaon", "Dibrugarh", "Guwahati", "Jorhat", "Nagaon", "North Lakhimpur", "Silchar", "Tezpur", "Tinsukia"] },
  { name: "Bihar", cities: ["Arrah", "Begusarai", "Bhagalpur", "Bihar sharif", "Darbhanga", "Gaya", "Muzaffarpur", "Patna", "Purnia"] },
  { name: "Chhattisgarh", cities: ["Ambikapur", "Bilaspur", "Dhamtari", "Durg‑Bhilainagar", "Jagdalpur", "Korba", "Raigarh", "Raipur", "Rajnandgaon"] },
  { name: "Goa", cities: ["Bicholim", "Curchorem", "Mapusa", "Margao", "Panaji", "Ponda", "Sanquelim", "Vasco-da-Gama"] },
  { name: "Gujarat", cities: ["Ahmedabad", "Bhavnagar", "Gandhidham", "Gandhinagar", "Jamnagar", "Junagadh", "Rajkot", "Surat", "Vadodara"] },
  { name: "Haryana", cities: ["Ambala", "Faridabad", "Gurgaon", "Hisar", "Karnal", "Panipat", "Rohtak", "Sonipat", "Yamunanagar"] },
  { name: "Himachal Pradesh", cities: ["Bilaspur", "Chamba", "Dharamshala", "Hamirpur", "Kullu", "Manali", "Mandi", "Shimla", "Solan"] },
  { name: "Jharkhand", cities: ["Bokaro Steel City", "Deoghar", "Dhanbad", "Giridih", "Hazaribagh", "Jamshedpur", "Medininagar", "Ramgarh", "Ranchi"] },
  { name: "Karnataka", cities: ["Ballari", "Belgaum", "Bengaluru", "Davangere", "Hubli‑Dharwad", "Kalaburagi", "Mangalore", "Mysore", "Tumkur"] },
  { name: "Kerala", cities: ["Alleppey", "Kannur", "Kochi", "Kollam", "Kozhikode", "Malappuram", "Palakkad", "Thiruvananthapuram", "Thrissur"] },
  { name: "Madhya Pradesh", cities: ["Bhopal", "Dewas", "Gwalior", "Indore", "Jabalpur", "Ratlam", "Sagar", "Satna", "Ujjain"] },
  { name: "Maharashtra", cities: ["Aurangabad", "Kolhapur", "Mumbai", "Nagpur", "Nashik", "Pimpri-Chinchwad", "Pune", "Solapur", "Thane"] },
  { name: "Manipur", cities: ["Bishnupur", "Chandel", "Churachandpur", "Imphal", "Jiribam", "Senapati", "Tamenglong", "Thoubal", "Ukhrul"] },
  { name: "Meghalaya", cities: ["Baghmara", "Cherrapunji", "Jowai", "Mawlai", "Nongthymmai", "Shillong", "Tura"] },
  { name: "Mizoram", cities: ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"] },
  { name: "Nagaland", cities: ["Dimapur", "Kiphire", "Kohima", "Mokokchung", "Phek", "Tuensang", "Wokha", "Zunheboto"] },
  { name: "Odisha", cities: ["Balasore", "Baripada", "Bhadrak", "Bhubaneswar", "Brahmapur", "Cuttack", "Puri", "Rourkela", "Sambalpur"] },
  { name: "Punjab", cities: ["Amritsar", "Bathinda", "Chandigarh", "Hoshiarpur", "Jalandhar", "Ludhiana", "Mohali", "Pathankot", "Patiala"] },
  { name: "Rajasthan", cities: ["Ajmer", "Alwar", "Bhilwara", "Bikaner", "Jaipur", "Jodhpur", "Kota", "Sikar", "Udaipur"] },
  { name: "Sikkim", cities: ["Gangtok", "Gyalshing", "Jorethang", "Mangan", "Namchi", "Pelling", "Ravangla", "Singtam"] },
  { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Erode", "Madurai", "Salem", "Thanjavur", "Tirunelveli", "Trichy", "Vellore"] },
  { name: "Telangana", cities: ["Adilabad", "Hyderabad", "Karimnagar", "Khammam", "Mahbubnagar", "Nalgonda", "Nizamabad", "Ramagundam", "Warangal"] },
  { name: "Tripura", cities: ["Agartala", "Amarpur", "Ambassa", "Belonia", "Dharmanagar", "Kailashahar", "Kumarghat", "Udaipur"] },
  { name: "Uttar Pradesh", cities: ["Agra", "Aligarh", "Amethi", "Amroha", "Ayodhya", "Azamgarh", "Bahraich", "Ballia", "Banda", "Barabanki", "Bareilly", "Bijnor", "Bulandshahr", "Chandauli", "Deoria", "Etawah", "Farrukhabad", "Firozabad", "Ghaziabad", "Gonda", "Gorakhpur", "Hapur", "Hardoi", "Jaunpur", "Jhansi", "Kaushambi", "Kanpur", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Mainpuri", "Mathura", "Meerut", "Moradabad", "Muzaffarnagar", "Noida", "Pilibhit", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Shahjahanpur", "Sitapur", "Sultanpur", "Unnao"] },
  { name: "Uttarakhand", cities: ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Devprayag", "Doiwala", "Gopeshwar", "Haldwani", "Haridwar", "Kashipur", "Kotdwar", "Mussoorie", "Nainital", "New Tehri", "Pithoragarh", "Ramnagar", "Rishikesh", "Roorkee", "Srinagar Garhwal", "Tanakpur", "Tehri", "Uttarkashi", "Vikasnagar"] },
  { name: "West Bengal", cities: ["Asansol", "Bardhaman", "Darjeeling", "Durgapur", "Howrah", "Kolkata", "Malda", "Murshidabad", "Siliguri"] },
];

  function isOpenRequestCallback() {
    setOpen(!open);
    console.log(!open);
  }

  const countryNumberCode = ["+91","+592","+509","+672","+82","+84","+86","+90","+92","+93","+94",
  "+95","+98","+211","+212","+213","+216","+218","+220","+221",
  "+222","+223","+224","+225","+226","+227","+228","+229","+230",
  "+231","+232","+233","+234","+235","+236","+237","+238","+239",
  "+240","+241","+242","+243","+244","+245","+246","+248","+249",
  "+250","+251","+252","+253","+254","+255","+256","+257","+258",
  "+260","+261","+262","+263","+264","+265","+266","+267","+268",
  "+269","+290",]; 
  const degree = ["BTech./BE","BCA","MCA","BA","BCom","BBA"];
  const graduationYear = ["Before 2020","2021","2022","2023","2024","2025","2026","2027","After 2028"];
  const jobStatus = ["Working Professional","Student","Working Professional"];


  const [selectedStateIndex, setSelectedStateIndex] = useState("");
  const [selectedCityIndex, setSelectedCityIndex] = useState("");

  const cities = selectedStateIndex !== "" ? states[selectedStateIndex].cities : [];

  
  return (
    <>
      <div className="p-5 md:p-10 bg-gray-50 w-full h-fit space-y-6">
       <div className="text-center">
        <h5 className="inline-block text-3xl sm:text-4xl font-bold border-b-4 border-blue-200 pb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
            Apply
          </span>{" "}
          for Upcoming Batches
        </h5>
      </div>
        <div className="flex justify-center items-center space-x-2 md:flex-row flex-col w-full">
          {/* Info Cards */}
          <div className="space-y-5 w-11/12">
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 md:flex-nowrap">
              {/* Card 1 */}
              <div className=" w-full sm:w-[48%] lg:w-[32%] p-5 bg-gradient-to-b from-white to-blue-100 rounded-xl border-2 border-gray-200 hover:shadow-md duration-300">
                <div className="flex justify-between items-center">
                  <div className="p-4 bg-blue-100 rounded-3xl">
                    <RiFileList2Fill className='w-16 h-16  md:w-6 md:h-6 lg:w-12 lg:h-12 xl:w-16 xl:h-16   text-blue-400' />
                  </div>
                  <p className='text-9xl lg:text-8xl xl:text-9xl  font-bold text-blue-200 md:text-6xl'>1</p>
                </div>
                <p className=' text-2xl md:text-sm lg:text-xl  xl:text-2xl font-semibold'>Request Callback</p>
                <p className='text-sm md:text-xs lg:text-sm font-light'>Kickstart your learning journey by requesting callback today.</p>
              </div>

              {/* Card 2 */}
              <div className="w-full sm:w-[48%] lg:w-[32%] p-5 bg-gradient-to-b from-white to-orange-100 rounded-xl border-2 border-gray-200 hover:shadow-md duration-300">
                <div className="flex justify-between items-center">
                  <div className="p-4 bg-orange-100 rounded-3xl">
                    <RiFileUserFill className='w-16 h-16  md:w-6 md:h-6 lg:w-12 lg:h-12 xl:w-16 xl:h-16   text-orange-400' />
                  </div>
                  <p className='text-9xl lg:text-8xl xl:text-9xl  font-bold text-orange-200 md:text-6xl'>2</p>
                </div>
                <p className=' text-2xl md:text-sm lg:text-xl  xl:text-2xl font-semibold'>Get on a Call</p>
                <p className='text-sm md:text-xs lg:text-sm font-light'>Chat with us to learn more about your options.</p>
              </div>

              {/* Card 3 */}
              <div className="w-full sm:w-[48%] lg:w-[32%] p-5 bg-gradient-to-b from-white to-green-100 rounded-xl border-2 border-gray-200 hover:shadow-md duration-300">
                <div className="flex justify-between items-center">
                  <div className="p-4 bg-green-100 rounded-3xl">
                    <BsFillCheckCircleFill className='w-16 h-16  md:w-6 md:h-6 lg:w-12 lg:h-12 xl:w-16 xl:h-16   text-green-400' />
                  </div>
                  <p className='text-9xl lg:text-8xl xl:text-9xl  font-bold text-green-200 md:text-6xl'>3</p>
                </div>
                <p className=' text-2xl md:text-sm lg:text-xl  xl:text-2xl font-semibold'>Book your seat</p>
                <p className='text-sm md:text-xs lg:text-sm font-light'>Secure your spot and embark on your learning adventure!</p>
              </div>
            </div>

            <button onClick={isOpenRequestCallback} className='cursor-pointer w-full bg-blue-100 rounded-lg p-3 text-xl   active:scale-95 active:shadow-inner transition-transform duration-100'>
              <div className="cursor-pointer flex justify-center items-center space-x-3 text-blue-950">
                <FiPhoneCall />
                <p>Request a Callback</p>
              </div>
            </button>
          </div>

          {/* Divider for desktop */}
          <div className="hidden h-fit text-center md:flex flex-col justify-center items-center px-4">
            <div className="w-1 opacity-30 h-24 lg:h-32  bg-gray-500 mb-2"></div>
            <p>OR</p>
            <div className="w-1 opacity-30 h-24 lg:h-32  bg-gray-500 mt-2"></div>
          </div>

          {/* Divider for mobile */}
          <div className="flex justify-center items-center space-x-2 w-full md:hidden px-6 my-6">
            <div className="h-1 w-1/2 bg-gray-600 opacity-30"></div>
            <p>OR</p>
            <div className="h-1 w-1/2 bg-gray-600 opacity-30"></div>
          </div>

          {/* Image and button */}
          <div className="md:w-1/4 h-full">
            <img src={comp} alt="computer" />
            <button className='w-full mt-4'>
              <div className="bg-blue-500 p-3 hover:bg-blue-600 duration-300 text-white rounded-xl">View all courses</div>
            </button>
          </div>
        </div>
      </div>

      {/* Request Callback Modal */}
      {
        open && (
          <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
            <div className="w-11/12 md:w-2/3 lg:1/2 bg-white rounded-lg shadow-lg px-3 py-4 sm:px-5 sm:py-5">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xl sm:text-2xl font-semibold">TEN</p>
                <RxCross1 onClick={() => setOpen(false)} className="cursor-pointer" size={24} />
              </div>

              <div className="text-center mb-4">
                <p className='text-2xl font-semibold sm:text-3xl'>Request a Callback</p>
                <p className='text-sm'>Our team will get in touch with you asap.</p>
              </div>

              <form className='space-y-3'>

                {/* Name */}
                <div className="flex items-center gap-2 px-3 py-3 bg-white border border-gray-300 rounded-lg">
                  <CiUser className="text-gray-500 text-xl" />
                  <input type="text" placeholder="Enter name" className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-600" />
                </div>

                {/* WhatsApp number */}
                <div className="flex space-x-0 sm:space-x-2">
                      <div className="flex items-center gap-1 sm:gap-2 pr-0 pl-2 py-3 sm:px-3 sm:py-3 bg-white rounded-lg shadow-sm border border-gray-300 w-28 sm:w-1/4 lg:w-2/12">
                        <FaWhatsapp className="text-gray-500 text-xl " />
                        <select
                            className="w-full bg-transparent outline-none text-sm text-gray-700"
                          >
                            <option value="" disabled selected hidden>+91</option>
                            {countryNumberCode.map((item, index) => (
                              <option key={index} value={index}>{item}</option>
                            ))}
                        </select>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-3 bg-white rounded-lg shadow-sm border border-gray-300  w-full">
                        {/* <FaWhatsapp className="text-gray-500 text-xl" /> */}
                        <input
                          type="text"
                          placeholder="Enter whatsapp number"
                          className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-600 "
                        />
                      </div>
                </div>

                {/* State Selection */}
                <div className="">
                
                <CustomDropdown

                  icon ={IoLocationOutline}
                  options={states}
                  selected={selectedStateIndex}
                  setSelected={(i) => {
                    setSelectedStateIndex(i);
                    setSelectedCityIndex("");
                  }}
                  placeholder="Select your state"
                />
              </div>
              <div className="">
                {selectedStateIndex !== "" && (
                  <CustomDropdown
                  icon ={PiCityLight}
                    options={cities}
                    selected={selectedCityIndex}
                    setSelected={setSelectedCityIndex}
                    placeholder="Select your city"
                  />
                )}
                </div>


                {/* Degree */}
                <div className="flex items-center gap-2 px-3 py-3 bg-white border border-gray-300 rounded-lg">
                  <GoBook className="text-gray-500 text-xl" />
                  <select
                    className="w-full bg-transparent outline-none text-sm text-gray-700"
                  >
                    <option value="" disabled selected hidden>Select Degree</option>
                    {degree.map((item, index) => (
                      <option key={index} value={index}>{item}</option>
                    ))}
                  </select>
                </div>

                {/* Graduation Year */}
                <div className="flex items-center gap-2 px-3 py-3 bg-white border border-gray-300 rounded-lg">
                  <RiGraduationCapLine className="text-gray-500 text-xl" />
                  <select
                    className="w-full bg-transparent outline-none text-sm text-gray-700"
                  >
                    <option value="" disabled selected hidden>Select Graduation Year</option>
                    {graduationYear.map((item, index) => (
                      <option key={index} value={index}>{item}</option>
                    ))}
                  </select>
                </div>

                {/* Job Status */}
                <div className="flex items-center gap-2 px-3 py-3 bg-white border border-gray-300 rounded-lg">
                  <PiShoppingBagOpenLight className="text-gray-500 text-xl" />
                  <select
                    className="w-full bg-transparent outline-none text-sm text-gray-700"
                  >
                    <option value="" disabled selected hidden>Select Job Status</option>
                    {jobStatus.map((item, index) => (
                      <option key={index} value={index}>{item}</option>
                    ))}
                  </select>
                </div>

                <button type='submit' className='cursor-pointer w-full bg-blue-500 rounded-lg p-3 text-xl hover:shadow-md text-white'>
                  Request a Callback
                </button>
              </form>
            </div>
          </div>
        )
      }
    </>
  );
}

export default ApplyUpcomingBatches;
