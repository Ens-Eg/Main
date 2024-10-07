"use client"; // Ensure this is a client component

import { useEffect, useState } from "react";
import { navItems } from '@/constants';
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen((prev) => !prev);
  };

  return (
    <nav className="sticky max-w-[1024px] mx-auto top-0 z-90 py-3 backdrop-blur-lg lg:border-b border-[#949494] items-center">
      <div className="container items-center px-4 mx-auto relative text-sm">
        <div className="flex justify-center items-center">
          <div className="flex-1 flex justify-start lg:justify-start">
            <img src="logo.png" height={200} width={200} alt="Logo" />
          </div>
          <ul className="font-kufi hidden lg:flex ml-14">
            {navItems.map((item, index) => (
              <li className='font-kufi px-2 text-xs text-[#230b98] hover:text-[#3316c5]' key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-2 items-center">
        
            <a href="Contact" className="font-kufi bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md">الاتصال بنا</a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end ">
            <button className="pr-1 w-[30px] h-[30px]  bg-gradient-to-r from-purple-500 to-purple-800 rounded-md size-6" onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed bg-gradient-to-r from-purple-500 to-purple-800 rounded-lg w-[400px] ml-10  mt-20 right-0 z-20 w-full p-12 flex flex-col mx-auto items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li className="font-kufi px-2 text-xs hover:text-gray-300 py-4 mx-auto" key={index} >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
             
              <a href="Contact" className="font-kufi bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md">الاتصال بنا</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;