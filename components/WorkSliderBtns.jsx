"use client"

import {useSwiper} from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles}) => {
  const swiper = useSwiper();

   return (
    <div className="{containerStyle}">
      <button className={btnStyles}><PiCaretLeftBold className={iconsStyles} onClick={()=>swiper.slidePrev()}/>
         <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles}><PiCaretRightBold className={iconsStyles} onClick={()=>swiper.slideNext()}/>
         <PiCaretLeftBold className={iconsStyles} />
      </button>
    </div>
  )
}

export default WorkSliderBtns