import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "./assets/Images/Logo Q 1.png";
import Mask from "./assets/Images/Mask group.png";
import US from "./assets/Images/united-states 1.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  
  const [selectedLang, setSelectedLang] = useState({
    name: "Germany",
    flag: Mask,
  });

  const languages = [
    { name: "English", flag: US },
    { name: "Germany", flag: Mask },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#EEEEEE] lg:shadow-[0_3px_10px_#0000001A]">
   
      <div className="max-w-7xl mx-auto h-[78px] px-4 md:px-6 lg:px-10 flex justify-between items-center">
        
        
        <div className="flex-shrink-0">
          <img 
            src={Logo} 
            alt="Company Logo" 
            className="w-[140px] md:w-[160px] lg:w-[202px] h-auto object-contain"
          />
        </div>


        <div className="hidden lg:flex items-center gap-2 xl:gap-6">
          <a href="#" className="px-2 text-[15px] xl:text-[16px] whitespace-nowrap hover:text-[#693B93] hover:font-bold transition-all">Home</a>
          <a href="#" className="px-2 text-[15px] xl:text-[16px] whitespace-nowrap hover:text-[#693B93] hover:font-bold transition-all">About Us</a>
          <a href="#" className="px-2 text-[15px] xl:text-[16px] whitespace-nowrap hover:text-[#693B93] hover:font-bold transition-all">Services</a>
          <a href="#" className="px-2 text-[15px] xl:text-[16px] whitespace-nowrap hover:text-[#693B93] hover:font-bold transition-all">Technology</a>
          <a href="#" className="px-2 text-[15px] xl:text-[16px] whitespace-nowrap hover:text-[#693B93] hover:font-bold transition-all">FAQs</a>
        </div>

        <div className="flex items-center gap-3 lg:gap-4">
          
    
          <button className="bg-[#693B93] hidden sm:block rounded-[8px] px-4 lg:px-6 py-2.5 text-white font-bold cursor-pointer text-[13px] lg:text-[14px] whitespace-nowrap hover:bg-[#5a3281] transition-colors">
            Contact Us
          </button>

         
          <div className="relative hidden sm:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="bg-[#F9F3FF] flex items-center justify-between rounded-[8px] w-[110px] lg:w-[135px] h-[40px] lg:h-[44px] font-bold text-black border border-[#693B93] cursor-pointer px-2 lg:px-3"
            >
              <img src={selectedLang.flag} alt="flag" className="w-5 h-auto flex-shrink-0" />
              <span className="text-[12px] lg:text-sm truncate mx-1">{selectedLang.name}</span>
              <IoIosArrowDown className="flex-shrink-0 text-xs" />
            </button>

            {langOpen && (
              <div className="absolute top-[50px] right-0 w-[135px] bg-white border border-[#693B93] rounded-[8px] shadow-xl p-1 z-[60]">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                    className="flex items-center gap-3 p-2 cursor-pointer hover:bg-purple-50 rounded text-sm transition-colors"
                  >
                    <img src={lang.flag} alt="flag" className="w-5" />
                    <span className="font-semibold text-black">{lang.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

         
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-3xl text-[#693B93] p-1 hover:bg-purple-50 rounded-md transition-colors"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>

    
      <div className={`${isOpen ? "flex" : "hidden"} lg:hidden flex-col bg-white border-t border-gray-100 py-4 shadow-lg animate-in fade-in slide-in-from-top-2`}>
        <a href="#" className="px-6 py-3 text-[16px] text-gray-800 hover:bg-purple-50 hover:text-[#693B93] font-medium border-b border-gray-50 transition-colors">Home</a>
        <a href="#" className="px-6 py-3 text-[16px] text-gray-800 hover:bg-purple-50 hover:text-[#693B93] font-medium border-b border-gray-50 transition-colors">About Us</a>
        <a href="#" className="px-6 py-3 text-[16px] text-gray-800 hover:bg-purple-50 hover:text-[#693B93] font-medium border-b border-gray-50 transition-colors">Services</a>
        <a href="#" className="px-6 py-3 text-[16px] text-gray-800 hover:bg-purple-50 hover:text-[#693B93] font-medium border-b border-gray-50 transition-colors">Technology</a>
        <a href="#" className="px-6 py-3 text-[16px] text-gray-800 hover:bg-purple-50 hover:text-[#693B93] font-medium border-b border-gray-50 transition-colors">FAQs</a>
        
     
        <div className="px-6 pt-4 sm:hidden">
            <button className="w-full bg-[#693B93] text-white py-3 rounded-lg font-bold shadow-md">
              Contact Us
            </button>
        </div>
      </div>
    </nav>
  );
}