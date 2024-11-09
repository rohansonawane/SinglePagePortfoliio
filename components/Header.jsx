"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";

const Header = () => {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 50) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Cleanup function
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <header 
         className={`
            w-full text-white
            transition-all duration-300 
            ${isScrolled 
               ? "fixed top-0 left-0 z-50 py-4 bg-black/90 backdrop-blur-sm shadow-lg" 
               : "relative py-8 xl:py-12"
            }
         `}
      >
         <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
               <h1 className={`
                  text-4xl font-semibold
                  transition-all duration-300
                  ${isScrolled ? "scale-90" : "scale-100"}
               `}>
                  Rohan<span className="text-accent">.</span>  
               </h1>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-8">
               <Nav />
               <Link href="/contact">
                  <Button>Hire me</Button>
               </Link>
            </div>
            
            {/* Mobile Nav */}
            <div className="xl:hidden mob-nav">
               <MobileNav />
            </div>
         </div>
      </header>
   );
};

export default Header;