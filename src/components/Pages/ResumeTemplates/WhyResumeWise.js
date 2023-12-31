import React from 'react';
import Icon1 from '../../assets/icon1.PNG';
import Icon2 from '../../assets/icon2.PNG';
import Icon3 from '../../assets/icon3.PNG';
import Icon4 from '../../assets/icon4.PNG';

const WhyResumeWise = () => {
  const whyData = [
    {
      id: '1',
      title: 'Free AND Premium',
      text: ' We offer both free and premium resume templates, so whatever your budget might be, you can still take advantage of our resume builder.',
      img: Icon1
      ,
    },
    {
      id: '2',
      title: 'Creative & Professional Resume Templates',
      text: ' Whether you’re a creative advertiser looking for an outside-the-box creative resume template, or a banker seeking a more professional resume template, we’ve got a template for you!',
      img: Icon2
      ,
    },
    {
      id: '3',
      title: 'NO Hidden Fees',
      text: ' If you’ve tried other resume builders, you’ve probably experienced this: You spend hours creating a resume, and when you click “download,” you get hit with a paywall asking you to subscribe.',
      img: Icon3
      ,
    },
    {
      id: '4',
      title: 'ATS-Friendly',
      text: ' All Novorésumé resume templates are built with the most popular Applicant Tracking Systems (ATS) in mind. What this means for YOU is that whichever job you apply for, the CV filtering software they use will be able to read your resume (and NOT automatically discard it).',
      img: Icon4
      ,
    },
  ];

  return (
    <>
      <div>
        <div className='flex w-full h-full mx-auto flex-col justify-center p-1 rounded-lg md:-mt-20  -mt-12 mb-20'>
          <p className='text-center md:text-4xl text-2xl font-bold font-poppins text-slate-700 mb-3 px-14'>Why Resumewise?</p>
          <div className='w-16 h-[5px] bg-[#0AC5A8] flex mx-auto mb-5 rounded-md '></div>
          <ul className="grid lg:grid-cols-2 lg:p-32 gap-16 lg:-mt-24 ">
            {whyData.map((item, i) => (
              <li 
              key={item.id}
              className=''
              >
                <div className=' w-full md:h-40 flex md:flex-row flex-col md:p-3 '>
                    <img src={item.img} className=' md:w-40 w-24 h-40  flex  mx-auto ' />
                    <div className=' font-poppins p-10 -mt-10 md:-mt-4 text-slate-800'>
                        <p className='md:text-xl text-lg font-semibold mb-4'>{item.title}</p>
                        <p className='md:text-base text-sm text-gray-500 '>{item.text}</p>
                    </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default WhyResumeWise;
