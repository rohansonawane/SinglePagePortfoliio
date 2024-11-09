"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
   {
      name: "home",
      path: "/",
   },
   {
      name: "services",
      path: "#services",
   },
   {
      name: "about",
      path: "#about-me",
   },
   {
      name: "projects",
      path: "#projects",
   },
   {
      name: "contact",
      path: "#contact",
   }
];

const Nav = () => {
   const pathname = usePathname();

   const handleScroll = (e, path) => {
      // Only handle hash links
      if (path.startsWith("#")) {
         e.preventDefault();
         const element = document.querySelector(path);
         if (element) {
            element.scrollIntoView({ 
               behavior: "smooth",
               block: "start"
            });
         }
      }
   };

   return (
      <nav className="flex gap-8">
         {links.map((link, index) => {
            const isActive = link.path === pathname || 
                           (pathname === "/" && link.path === "/") ||
                           (pathname !== "/" && link.path.startsWith("#") && pathname + link.path === pathname + link.path);
            
            return (
               <Link
                  href={link.path}
                  key={index}
                  className={`${isActive ? "text-accent border-b-2 border-accent" : ""} 
                     capitalize font-medium hover:text-accent transition-all`}
                  onClick={(e) => handleScroll(e, link.path)}
               >
                  {link.name}
               </Link>
            );
         })}
      </nav>
   );
};

export default Nav;