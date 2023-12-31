// import { useState, useEffect } from "react"; 
 
// export default function App() { 

//   const [btcData, setBtcData] = useState({}); 
//   useEffect(() => { 
//     fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
//       .then((response) => response.json()) 
//       .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
//       .catch((error) => console.log(error)); 
//   }, []); 
 
//   return ( 
//     <> 
//     <div>
//       <h1 className="mt-40">Current BTC/USD data</h1> 
//       <p>Code: {btcData.code}</p> 
//       <p>Symbol: {btcData.symbol}</p> 
//       <p>Rate: {btcData.rate}</p> 
//       <p>Description: {btcData.description}</p> 
//       <p>Rate Float: {btcData.rate_float}</p> 
//     </div>

   
//     </> 
//   ); 
// } 



import React, { useState } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';
import CoverLettImage from '../../assets/cl-group.png'
import CVImg from '../../assets/cv-group.png'
import ResumeImg from '../../assets/resume-group.png'



const ItemSwitcher = () => {
  const items = [
    {
      title: 'Resumes',
      subject: 'Pick from 8+ [Free] Resume Templates',
      content: 'Pick one of our free resume template, fill it out, and land that dream job! Create and download your professional resume in less than 5 minutes.',
      img: ResumeImg
    },
    {
      title: 'Cover Letters',
      subject: '16+ Convincing Cover Letter Templates [Pick & Download]',
      content: 'Looking to create a cover letter that stands out? Try one of our 12 cover letter templates (and land that job)!',
      img: CoverLettImage
    },
    {
      title: 'CVs',
      subject: 'Pick your CV template and get started',
      content: 'Our CV templates are designed with your success in mind. They are all free (with premium features), ATS-friendly, and easy-to-read!',
      img: CVImg
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFolded, setIsFolded] = useState(false);

  const handleButtonClick = () => {
    setIsFolded(!isFolded);
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
    setIsFolded(false);
  };

  return (
    <div className="lg:hidden  w-full h-full flex flex-col p-5 -top-20 ">
      <div
        onClick={handleButtonClick}
        className="z-20  w-80 h-auto flex space-x-24 bg-[#0AC5A8] text-white text-base font-bold py-3 px-10 rounded-full border border-red-400"
      >
        <button className="w-full whitespace-nowrap font-poppins text-start ">{items[currentIndex].title}</button> 
        <BiSolidDownArrow className="text-2xl  w-20" />
      </div>

      <AnimatePresence initial={false} wait>
        {isFolded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="z-0 absolute w-auto h-auto px-4 py-7 top-64 md:top-80 bg-white border rounded-b-3xl shadow-2xl flex flex-col justify-center space-y-3">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleItemClick(index)}
                  className="cursor-pointer w-[17.5rem] px-5 text-base font-bold text-gray-700 flex mx-auto mt-5 font-poppins"
                >
                  {item.title}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className=" w-full  flex flex-col md:flex-row mt-6 font-poppins"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className=''>
          <p className="  md:text-lg text-sm font-bold">{items[currentIndex].subject}</p>
          <p className=" md:text-base text-sm mt-3">{items[currentIndex].content}</p>
        </div>
        <div className=' hidden md:flex -mt-14'>
          <img src={items[currentIndex].img} alt='display-img' className='w-auto h-auto p-2' />

        </div>

      </motion.div>
    </div>
  );
};

export default ItemSwitcher;
