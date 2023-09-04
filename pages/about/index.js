import React, { useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAutodesk,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiMicrosoftoffice,
  SiMicrosoftword,
  SiMicrosoftexcel,
  SiFiverr,
  SiAdobepremierepro,
  SiAdobecreativecloud,
  SiAndroidstudio,
  SiVisualstudiocode,
  SiFlutter,
  SiDart,
  SiEngadget,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'MEP Engineering',
        icons: [<SiAutodesk />, 
        <SiMicrosoftoffice />, 
        <SiMicrosoftword />, 
        <SiMicrosoftexcel />,
        <SiAdobecreativecloud />,
        <SiFiverr />,
        <SiAdobepremierepro />



      ],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaWordpress />,
        ],
      },
      {
        title: 'App Development',
        icons: [<SiFlutter />, <SiDart />, <SiVisualstudiocode />, <SiAndroidstudio />],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobeillustrator />, <SiAdobephotoshop />],
      },
    ],
  },
 
  {
    title: 'experience',
    info: [
      {
        title: 'MEP Engineer - Al Haramain General Con Co. ',
        stage: '2019- Until now',
      },
      {
        title: 'Electric and diesel engines - NAFFCO Egypt Factory',
        stage: '2017',
      },
      {
        title: 'Injection machine - AL-Wasail industrial Co.',
        stage: '2012',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Bachelor in Mechanical Engineering - BENHA UNIVERSITY',
        stage: '2019',
      },
      {
        title: 'Project Managements Diploma - American University Cairo',
        stage: '2018',
      },
      //{title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',stage: '2006',},
    ],
  },
  {
    title: 'Activities',
    info: [
      {
        title: 'MEMBER IN:',
        stage: 'SMES student activity in Benha University.',
      },
      {
        title: 'INTERESTED:',
        stage: 'I care about technology and development. All computer sciences Reading, Traveling and Surfing the Internet. Find configure and communicate with friends and news.',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// farmer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';


const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return ( 
  <div className='h-full bg-primary/30 py-32 text-center
  xl:text-left'>
    <Circles />
    {/* avatar img */}
    <motion.div 
    variants={fadeIn('right', 0.2)} 
    initial='hidden' 
    animate='show' 
    exit='hidden'
    className='hidden xl:flex flex-auto w-full  h-[737px] animate-pulse
      absolute bottom-0 -left-[370px]'
    >
    <Avatar />
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center
    xl:flex-row gap-x-6'>
     {/* text */}
      <div className='flex-1 flex flex-col justify-center'>
       <motion.h2 
       variants={fadeIn('right', 0.2)} 
       initial='hidden' 
       animate='show' 
       exit='hidden'
        className='h2'>
       And you were given only.. <span className='text-accent'>A little knowledge..</span>  </motion.h2>
       <motion.p
       variants={fadeIn('right', 0.2)} 
       initial='hidden' 
       animate='show' 
       exit='hidden'
       className='max-w-[500px] max-auto xl:mx-0 mb-6 xl:mb-12 px-2 lx:px-0'>
       8 years ago, I started learning and then freelancing as a developer, designer, 
       and video editor. After I finished studying, 
       I started working in the field of MEP. 
       I've worked remotely for agencies, advised startups, 
       and collaborated on digital products for business and consumer use.
        </motion.p>
        {/* counters */}
        <motion.div 
        variants={fadeIn('right', 0.6)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'
        className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0
        mb-8'>
          <div className='flex flex-1 xl:gap-x-6'>
            {/* experience */}
            <div className='relative flex-1 after:w-[1px] after:h-full 
            after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={8} duration={5} /> + 
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4]
              max-w-[100px]'>Years of experience
              </div>
            </div>
            {/* clients */}
            <div className='relative flex-1 after:w-[1px] after:h-full 
            after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={89} duration={5} /> + 
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4]
              max-w-[100px]'>Satisfied clients
              </div>
            </div>
            {/* projects */}
            <div className='relative flex-1 after:w-[1px] after:h-full 
            after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={250} duration={5} /> + 
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4]
              max-w-[100px]'>Finished projects
              </div>
            </div>
            {/* awards */}
            <div className='relative flex-1'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={6} duration={5} /> + 
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4]
              max-w-[100px]'>Winning awards
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* info */}
      <motion.div 
      variants={fadeIn('left', 0.4)} 
      initial='hidden' 
      animate='show' 
      exit='hidden'
      className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div 
              key={itemIndex}
                  className={`${
                    index === itemIndex &&
                     ' text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white  after:absolute after:-bottom-1 after:left-0`}
                    onClick={()=> setIndex(itemIndex)}
                    >
                    {item.title}
              </div>
            );
          })}
        </div>
        <div className='py-2 xl-py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center
        xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex}
              className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2
              items-center text-white/60'>
               {/* title */}
               <div className='font-light mb-2 md:mb-0'>{item.title}</div>
               <div className='hidden md:flex'>-</div>
               <div>{item.stage}</div>
               <div className='flex gap-x-4'>
               {/* icons */}
               {item.icons?.map((icon, itemIndex) => {
                 return <div className='text-2xl text-white'>{icon}</div>;
                })}
              </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </div>
  );
};

export default About;
