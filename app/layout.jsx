import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100","200","300","400","500","600","700","800"],
  variable: '--font-jetbrainsMono'
 });

export const metadata = {
  title: "Rohan Sonawane | Portfolio",
  description: "Full Stack Software Developer | AI / ML | Docker, CI/CD, Jenkins | PHP, Python, JavaScript (React, Node, Next) | WordPress | UI/UX Designer | Blender, Unity Developer | API Integration Specialist | Testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        </body>
    </html>
  );
}
