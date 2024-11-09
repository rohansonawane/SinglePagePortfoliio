"use client"

import CountUp from "react-countup";

const stats = [
   {
      num: 8,
      text: "Years of Experience",
   },
   {
      num: 60,
      text: "Projects Completed",
   },
   {
      num: 8,
      text: "Technologies Mastered",
   },
   {
      num: 50,
      text: "Leet Code",
   },
]

const Stats  = () => {
  return (
      <div className="container">
         <div className="mx-auto pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
               {stats.map((item,index) => {
                  return (
                     <div className="flex-1 flex gap-4 items-center justify-center xl-justify-start" key={index}>
                        <CountUp
                        end={item.num}
                        duration={5}
                        delay={2}
                        className="text-4xl xl:text-6xl font-extrabold"
                        />
                        <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
  )
}

export default Stats 