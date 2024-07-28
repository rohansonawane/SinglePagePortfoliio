import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaLinktree} from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const socials = [
  {icon: <FaGithub />, path: "https://github.com/rohansonawane"},
  {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/rohanbsonawane/"},
  {icon: <SiLinktree />, path: "https://linktr.ee/rsonawane"}
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>{socials.map((item, index)=>{
      return (
      <Link key={index} href={item.path} className={iconStyles} target="_blank">
        {item.icon}
        </Link>
        );
    })}</div>
  )
}

export default Social