import React, { useState } from "react";
import profileImg from "../../assets/profileImg.webp";
import "../Profile_Compo/profilePage.css";
const Profile_Compo = () => {
  const [photoshopeRangeVal, setPhotoshopRangeval] = useState(null);
  const [Illustrator, setIllustrator] = useState(null);
  const [premiere, setPremiere] = useState(null);
  const [effect, setEffect] = useState(null);
  return (
    <main className="">
      <div className="img">
        <img className="profileImg mx-auto" src={profileImg} />
        <h1 className="text-center text-2xl pt-2 font-bold">Goverthini, 24</h1>
        <p className="text-center text-lg font-semibold">Chennai,India</p>
      </div>

      <div className="Profile_Card border-2 border-slay-200 mt-12 px-24 pt-12 shadow-md ">
        <h1 className="text-2xl text-center font-extrabold text-green-700 tracking-wide">
          Current Company
        </h1>

        <h2 className="text-center text-xl font-bold tracking-wide pt-3">
          Company
        </h2>
        <h3 className="text-center text-lg font-medium">
          The Madras Branding Company
        </h3>

        <h2 className="text-center text-xl font-bold tracking-wide pt-3">
          Name
        </h2>
        <h3 className="text-center text-lg font-medium">Sivasundar N</h3>

        <h2 className="text-center text-xl font-bold tracking-wide pt-3">
          Aadhar Id
        </h2>
        <h3 className="text-center text-lg font-medium">5674 3958 1232</h3>

        <h2 className="text-center text-xl font-bold tracking-wide pt-3">
          Job Role
        </h2>
        <h3 className="text-center text-lg font-medium">Graphic Designer</h3>

        <h2 className="text-center text-xl font-bold tracking-wide pt-3">
          Date-Of-Joining
        </h2>
        <h3 className="text-center text-lg font-medium">01-01-2022</h3>

        <h2 className="text-center text-xl font-bold tracking-wide pt-3">
          Salary
        </h2>
        <h3 className="text-center text-lg font-medium">500,000 PA</h3>
      </div>
      <label
        class="block mb-5 text-sm font-medium text-gray-900 dark:text-white"
        for="file_input"
      >
        Upload file
      </label>
      <input
        class="file  block w-11/12  p-3   text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
      />
      <input
        type="text"
        value="http://reallygood.work"
        className="w-11/12 mt-4 py-3 px-4 border-2 border-slate-300 shadow-lg rounded-md "
      />
      <input
        type="text"
        value="775 488 8282"
        className="w-11/12 mt-4 py-3 px-4 border-2 border-slate-300 shadow-lg rounded-md  "
      />
      <h1 className="text-xl py-7">Your Skills</h1>



      {/* range input type */}
      <div className="main_flex_container space-y-5">
      <div className="flex gap-4">
        <div className="border-2 border-slate-300 px-8 text-center py-3">
          Photoshop
        </div>
        <input
          type="range"
          className="custom-range w-60 bg-green-700"
          min="1"
          max="100"
          onChange={(event) => setPhotoshopRangeval(event.target.value)}
        />
        <div className="percentage_div  w-12 bg-green-700 text-white py-3">{`${photoshopeRangeVal}%`}</div>
      </div>

      
      <div className="flex gap-4">
        <div className="border-2 border-slate-300 px-9 text-center py-3">
          Illustrator
        </div>
        <input
          type="range"
          className="custom-range w-60 bg-green-700"
          min="1"
          max="100"
          onChange={(event) => setIllustrator(event.target.value)}
        />
        <div className="percentage_div  w-12 bg-green-700 text-white py-3">{`${Illustrator}%`}</div>
      </div>

      <div className="flex gap-4">
        <div className="border-2 border-slate-300 px-6 text-center py-3">
          premiere pro
        </div>
        <input
          type="range"
          className="custom-range w-60 bg-green-700"
          min="1"
          max="100"
          onChange={(event) => setPremiere(event.target.value)}
        />
        <div className="percentage_div  w-12 bg-green-700 text-white py-3">{`${premiere}%`}</div>
      </div>

      <div className="flex gap-4 ">
        <div className="border-2 border-slate-300 px-8 text-center py-3">
          After Effect
        </div>
        <input
          type="range"
          className="custom-range w-60 bg-green-700"
          min="1"
          max="100"
          onChange={(event) => setEffect(event.target.value)}
        />
        <div className="percentage_div  w-12 bg-green-700 text-white py-3">{`${effect}%`}</div>
      </div>
      </div>
    </main>
  );
};

export default Profile_Compo;
