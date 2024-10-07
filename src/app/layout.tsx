// src/app/layout.tsx
"use client"; // Ensures this is a client component

import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google"; // Import Inter font
import Design from "../components/Design";
import NavBar from "../components/NavBar";
import HeroSection from "@/components/HeroSection";
import Show from "@/components/show";
import FeatureSection from "@/components/FeatureSection";
import Offer from "@/components/offer";
import Workflow from "@/components/workflow";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/footer";
import { motion } from 'framer-motion';
import Link from "next/link";
import { usePathname } from 'next/navigation';

import Customers1 from "@/components/customers";
// Load Inter font
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname(); // Get the current pathname
    return (
        <html dir="rtl" suppressHydrationWarning>
            <head>
            <title>ENSEGYPT FOR BUSINESS SERVICES</title>
        <meta name="description" content="Think Bug Build Huge" />
        <meta name="keywords" content="Hosting, Webhosting, WebDesign" />
        <meta name="author" content="ENSEGYPT" />
             <link href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400&display=swap" rel="stylesheet" /></head>
            <body
                className={cn(
                    "min-h-screen background bg-no-repeat bg-center bg-cover bg-fixed text-foreground  max-w-full overflow-x-hidden bg-banner-bg",
                    inter.className // Use Inter font class
                )}
            >
                <div className="w-full h-screen "> <NavBar />
                   
                 
                {pathname !== '/Web' &&  pathname !== '/Software' &&  pathname !== '/GamesDev' &&  pathname !== '/Communication' &&   pathname !== '/Advertisement' && pathname !== '/Contact' &&(
                    <>
                        <HeroSection />
                        <Show />
                        <FeatureSection/>
                        <Workflow />
                    </>
                )}

                {/* Render child pages here */}
                <div className="max-w-[1024px] mx-auto pt-10 px-6">
                    {children}
                </div>
                 
                    
                    
                    
                    <div className="max-w-[1024px] mx-auto mt-9">
                    <h1 className="font-kufi text-3xl text-[#2f2f2f] sm:text-4xl lg:text-4xl text-center tracking-wide">
                    عروض خاصة
                        <span className="rounded font-kufi  bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
                        {" "}
                        لفترة محدودة
                        </span>
                    </h1>
                    <Pricing /></div>
                    <div className="max-w-[1024px] mx-auto pt-16">
                    <h1 className="font-kufi text-3xl text-[#2f2f2f] sm:text-4xl lg:text-4xl text-center tracking-wide">
                    تعليقات 
                        <span className="rounded font-kufi  bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
                        {" "}
                        عملاؤنا
                        </span>
                    </h1>
                    <Customers1 /></div>
                    <div className="max-w-[1024px] mx-auto pt-16">
                    <h1 className="font-kufi text-3xl text-[#2f2f2f] sm:text-4xl lg:text-4xl text-center tracking-wide">
                    تعليقات 
                        <span className="rounded font-kufi  bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
                        {" "}
                        عملاؤنا
                        </span>
                    </h1>
                    <Testimonials /></div>
                    <div className="max-w-[1024px] mx-auto ">
                    <Footer /></div>
               
                    
               
                </div>
            </body>
            <script
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/66fafc83e5982d6c7bb6c5b0/1i926koqa';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />
        </html>
    );
}