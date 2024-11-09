"use client";

import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs,FaWordpress,FaShopify,FaPython,FaPhp} from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si';


// about data

const about = {
  title: 'About me',
  description: "A Full Stack Developer and AI/ML enthusiast with 7+ years of experience. Currently pursuing an MS in Computer Science at CSUDH, I specialize in creating innovative tech solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rohan Sonawane"
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 562 350 4742"
    },
    {
      fieldName: "Experience",
      fieldValue: "8+ Years"
    },
    {
      fieldName: "Address",
      fieldValue: "Los Angeles, CA"
    },
    {
      fieldName: "Email",
      fieldValue: "rohansonawane28@gmail.com"
    },
  ]
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:"As a Full Stack Web Developer with over seven years of experience, I've specialized in crafting secure, high-quality web solutions that prioritize user experience and system performance. My expertise spans a wide range of technologies, including PHP, Python, JavaScript (React.js, Node.js), SQL, and more.", 
  items:[
    {
      company: "CSUDH",
      position: "AR/VR Developer",
      duration: "2023-Present"
    },
    {
      company: "Self-Employed",
      position: "Full Stack Web Developer",
      duration: "2020-2023"
    },
    {
      company: "Briefkase",
      position: "TechLead - Web Developer",
      duration: "2019-2020"
    },
    {
      company: "Briefkase",
      position: "Senior - Web Developer",
      duration: "2017-2019"
    },
    {
      company: "Briefkase",
      position: "Junior - Web Developer",
      duration: "2016-2017"
    },
  ]
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: "My Education",
  description:"I am currently pursuing a Master of Science in Computer Science at California State University, Dominguez Hills. With a solid foundation in software engineering and over seven years of industry experience, I specialize in AI, web development, and innovative tech solutions. My academic journey and hands-on experience enable me to stay at the forefront of emerging technologies.", 
  items:[
    {
      institution: "CSUDH",
      degree: "Masters in CS",
      duration: "2023-2025"
    },
    {
      institution: "PVPPCOE",
      degree: "Bachelors in IT",
      duration: "2012-2016"
    } 
  ]
}

const skills = {
  icon: '/assets/resume/cap.svg',
  title: "My skills",
  description:"Expert in Full Stack Development, AI, and Machine Learning, with proficiency in PHP, Python, JavaScript, and frameworks like Django. Skilled in cloud platforms (AWS) and digital marketing for comprehensive solutions.", 
  skilllist:[
    {
      icon:<FaPython />,
      name: "Python"
    },
    {
      icon:<FaPhp />,
      name: "PHP"
    },
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js"
    },
    {
      icon: <FaFigma />,
      name: "Figma"
    },
    {
      icon:<FaWordpress />,
      name: "WordPress"
    },
    {
      icon:<FaShopify />,
      name: "Shopify"
    },

    
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import {ScrollArea} from '@/components/ui/scroll-area';
import {motion} from 'framer-motion';

const Resume = () => {
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{ delay: 2.4, duration:0.4, ease: 'easeIn'}}}
    className=" flex items-center justify-center py-12" id="about-me">
      <div className="container mx-auto">
        <h2 className="h2 section-title text-center text-accent">About Me</h2>
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
            <div className="mb-8 xl:mb-0">
            
          </div>
          </TabsList>
          

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span>{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>

            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span>{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skilllist.map((skill, index)=>{
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>  
                          </Tooltip>
                        </TooltipProvider>
                        </li>
                    })}
                  </ul>

              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item,index)=>{
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
            </TabsContent>
          </div>
        </Tabs>
        
      </div>
    </motion.section>
  )
}

export default Resume;