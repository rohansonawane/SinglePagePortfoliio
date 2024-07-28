"use client";

import {motion} from 'framer-motion';
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Description } from '@radix-ui/react-dialog';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num:'01',
    category:'Full Stack',
    title:'Interactive Hate Map',
    description: "An interactive hate map that tracks incidents of gender-based, castes, ethnic, and communal violence in India.",
    stack:[
      {name: "HTML5"},
      {name:"CSS3"},
      {name:"JS"},
      {name:"PHP"},
      {name:"Mapbox API"},
      {name:"Rest API"},
    ],
    image: '/assets/work/thumb1.png',
    live: "https://cjp.org.in/hate-map",
    github:"",
  },
  {
    num:'02',
    category:'frontend',
    title:'VR Algorand Explorer',
    description: 'This project combines virtual reality (VR) technology with Algorand Explorer functionality and a Pera Wallet user interface',
    stack:[
      {name: "HTML5"},
      {name:"CSS3"},
      {name:"JS"},
      {name:"Aframe.js"},
      {name:"Algorand API"},
    ],
    image: '/assets/work/thumb2.png',
    live: "https://www.youtube.com/watch?v=PmEW1usHfR8",
    github:"https://github.com/rohansonawane/arvr-crypto",
  },
  {
    num:'03',
    category:'Full Stack',
    title:'Comment Remover',
    description: 'Comment Remover is an online web application designed to streamline code cleanup by removing comments from files of various types, including PHP, JavaScript, HTML, and more. This utility helps in enhancing code readability and maintainability, making it easier to manage and understand.',
    stack:[
      {name: "JS"},
      {name:"PHP"},
      {name:"HTML5"},
      {name:"CSS3"},
      {name:"C"},
    ],
    image: '/assets/work/thumb3.png',
    live: "#",
    github:"https://github.com/rohansonawane/comment-remover",
  },

];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section 
    initial={{opacity: 0}} 
    animate={{
      opacity:1,
    transition:{delay:2.4, duration:0.4, ease:"easeIn"
    }}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] h-[50%]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                      </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
                <div className="flex items-center gap-4"> 
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              <WorkSliderBtns containerStyles="front flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 x-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
              {projects.map((project, index)=>{
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div>
                    <Image src={project.image} fill className="object-cover" alt={project.title}/>
                  </div>
                  </div>
                </SwiperSlide>
              })}
              
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;