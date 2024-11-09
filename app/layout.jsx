import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Services from "@/app/services/Services";
import Resume from "@/app/resume/Resume";
import Contact from "@/app/contact/Contact";
import Work from "@/app/work/Work";
import Home from "@/app/Home/Home";
import { GoogleTagManager } from '@next/third-parties/google'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100","200","300","400","500","600","700","800"],
  variable: '--font-jetbrainsMono'
 });

export const metadata = {
  title: "Rohan Sonawane | Portfolio",
  description: "Full Stack Software Developer | AI / ML | Docker, CI/CD, Jenkins | PHP, Python, JavaScript (React, Node, Next) | WordPress | UI/UX Designer | Blender, Unity Developer | API Integration Specialist | Testing",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-5727CZ8R" />
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          <Home />
          <Services />
          <Resume />
          <Work />
          <Contact />
        </PageTransition>
        </body>
    </html>
  );
}
