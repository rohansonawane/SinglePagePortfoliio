import {Button} from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats ';
import Link from 'next/link';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">Hello I&lsquo;m <br /> <span className="text-accent">Rohan Sonawane</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">A passionate Full Stack Developer and current Master’s student in Computer Science at California State University, Dominguez Hills. </p>
            
            <div className="flex flex-col xl:flex-row items-center gap-8">
              
              <Link href="/assets/Rohan_Sooftware_Developer_Resume.pdf" target="_blank">
              <Button download variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats /> 
    </section>
  )
}

export default Home;
