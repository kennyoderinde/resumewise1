import React, { useState } from "react";
import Resumes from './Resumes'
import Cvs from './Cvs';
import CoverLetters from './CoverLetters';

import { motion, AnimatePresence } from "framer-motion";


import Modal from './Modal'


const SwitchPage = () => {
  const [selectedOption, setSelectedOption] = useState("Resumes");
  
  // mobile view modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOptionDetails, setSelectedOptionDetails] = useState(null);



  const settingsOptions = [
    { 
        id: 1, 
        name: "Resumes", 
        status: "Student/Intermediate", 
        button: (
            <div className=''></div>
          ),
    },
    { 
        id: 2, 
        name: "CVs", 
        status : "Senior", 
        button: (
            <div className=''></div>
          ),
    },
    { 
        id: 3, 
        name: "Cover Letters", 
        status : "All levels of experience", 
        button: (
            <div className=''></div>
          ),
    },


  ];

  // desktop view
  const handleOptionClick = (option) => {
    const selectedOptionDetails = settingsOptions.find((item) => item.name === option);
    setSelectedOption(option);
    setSelectedOptionDetails(selectedOptionDetails);
    setIsModalOpen(true)
  };

  // mobile option click
  const handleMobileOptionClick = (option) => {
    handleOptionClick(option);
    setIsModalOpen(true);
  };

  
  const renderSettingsOptions = () => {
    return settingsOptions.map((option) => (
      <li key={option.id}>

        <button
          id='option-style'
          onClick={() => handleOptionClick(option.name)}
          className={` font-poppins flex flex-col  justify-start sm:w-48 sm:h-16 -mt-5 sm:space-y-1 ${
            selectedOption === option.name
            
              ? "font-quicksand sm:text-[#0AC5A8] text-white text-base "
              : "text-gray-800 font-quicksand text-base hover:text-[#0AC5A8] "
          }`}
        >

          <span className=" w-40 h-10 bg-[#0AC5A8] sm:border-none  text-start sm:bg-transparent text-base font-poppins font-bold whitespace-nowrap">{option.name}</span>
            {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)} className="sm:hidden">
            {/* Render the modal content here */}
            {selectedOptionDetails && (
              <>
                <h2>Details for {selectedOptionDetails.name}</h2>
                {/* Add more details here as needed */}
              </>
            )}
          </Modal>
        )}




          <span className=" hidden md:block text-sm font-normal font-poppins">{option.status}</span>

          <a href="#_" className={` w-12 relative hidden sm:inline-flex items-center justify-center px-3 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white rounded-lg hover:bg-[#0AC5A8] group ${
            selectedOption === option.name ? "bg-[#0AC5A8] border-2 border-[#0AC5A8] " : "bg-gray-200 border-2 border-gray-400"
          }`}>
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out hover:bg-[#0AC5A8] rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 opacity-30 bg-gradient-to-b from-transparent via-transparent to-none border-2"></span>
            <span className="relative border-4 border-white w-6 rounded-full">{option.button}</span>
          </a>

        </button>

      </li>
    ));
  };
  

  const renderSelectedOption = () => {
    switch (selectedOption) {
      case "Resumes":     //from the settingsOption data
        return <Resumes />;
      case "CVs":
        return <Cvs />;
        case "Cover Letters":
        return <CoverLetters />;
      default:
        return < Resumes/>;
    }
  };

  
// 
  return (
    <>

    <div className=' lg:flex hidden lg:z-20 bg-none sm:p-4 w-full lg:w-5/12 mt-10 ml-4 z-20 '> 
      <div className="">
        <div className=" sm:mt-0 -mt-4 ">
            <div className="">
              
              <ul className=" hidden relative lg:flex lg:flex-row flex-col md:-top-3  ">{renderSettingsOptions()}</ul>
          </div>
          <main>
              <AnimatePresence mode ='wait'>
                <motion.div
                  key={selectedOption}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="hidden lg:flex lg:-mt-10">{renderSelectedOption()}</div>
                </motion.div>
              </AnimatePresence>
            </main>
        </div>
      </div>
    </div>
    
    </>
  );

};




export default SwitchPage;
