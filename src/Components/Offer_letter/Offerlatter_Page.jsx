import React from "react";
import image from "../.././assets/images.png";
import '../Offer_letter/offerLetter.css'
const Offerlatter_Compo = () => {
  return (
    <div className="mainContainer ">
      <div className="md:flex px-24  bg-slate-100 ">
        <div className="offerLetterInfo">
          <h1 className="text-4xl mb-4 mt-5">Offer Letter</h1>

          <h1 className="font-bold md:text-xl text-green-700 ">Company</h1>
          <p className="md:text-lg font-semibold mb-3">
            The Madras Branding Company
          </p>

          <h1 className="font-bold md:text-xl text-green-700">Name</h1>
          <p className="md:text-lg font-semibold mb-3">Sivasundar N</p>

          <h1 className="font-bold md:text-xl text-green-700">Aadhar Id</h1>
          <p className="md:text-lg font-semibold mb-3">5655 3212 8948</p>

          <h1 className="font-bold md:text-xl text-green-700">Job Role</h1>
          <p className="md:text-lg font-semibold mb-3">Graphics Designer</p>

          <h1 className="font-bold md:text-xl text-green-700">
            Date Of Joining
          </h1>
          <p className="md:text-lg font-semibold mb-3">17-09-2000</p>

          <h1 className="font-bold md:text-xl text-green-700">Salary</h1>
          <p className="md:text-lg font-semibold">500,000 PA</p>

          <button className="flex gap-2 bg-green-700 text-gray-100 py-3 px-20  mt-12 rounded-md text-sm items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Verify & Accept
          </button>
        </div>
        <div className="offerLetter_img py-6">
          <img src={image} width="500px" />
        </div>
      </div>
      {/* Pagination Code */}
      {/* <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                    <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                    </div>
                    <div className="sm:flex hidden">
                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">1</p>
                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">2</p>
                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">3</p>
                        <p className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">4</p>
                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">5</p>
                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">6</p>
                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">7</p>
                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">8</p>
                    </div>
                    <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                        <p className="text-sm font-medium leading-none mr-3">Next</p>
                        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div> */}

      <footer className=" md:flex justify-evenly items-center py-3    ">
        <ul className="flex gap-6">
          <li>About</li>
          <li>Career</li>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Term</li>
          <li>Help</li>
          <li>Feedback</li>
        </ul>
        <p>Copyright © clearhire</p>
      </footer>
    </div>
  );
};

export default Offerlatter_Compo;
