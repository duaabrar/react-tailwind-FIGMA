import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "./assets/Images/Logo Q 1.png";
import Mask from "./assets/Images/Mask group.png";
import US from "./assets/Images/united-states 1.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // selected language
  const [selectedLang, setSelectedLang] = useState({
    name: "Germany",
    flag: Mask,
  });

  // languages array
  const languages = [
    { name: "English", flag: US },
    { name: "Germany", flag: Mask },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="h-[78px] border-b border-b-[#EEEEEE] lg:shadow-[0_3px_10px_#0000001A] items-center flex justify-around">
        
        {/*Logo*/}
        <div>
          <img src={Logo} alt="Company Logo" className=" w-[128px] h-[30px] md:w-[202px] h-[48px] "/>
        </div>

        {/*Buttons Desktop*/}
        <div className="hidden md:block">
          <a href="" className="px-2 md:px-3 lg:px-4 text-[13px] md:text-[14px] lg:text-[16px] whitespace-nowrap hover:text-[#693B93] hover:font-bold">Home</a>
<a href="" className="px-2 md:px-3 lg:px-4 text-[13px] md:text-[14px] lg:text-[16px] whitespace-nowrap hover:text-[#693B93] hover:font-bold">About Us</a>
<a href="" className="px-2 md:px-3 lg:px-4 text-[13px] md:text-[14px] lg:text-[16px] whitespace-nowrap hover:text-[#693B93] hover:font-bold">Services</a>
<a href="" className="px-2 md:px-3 lg:px-4 text-[13px] md:text-[14px] lg:text-[16px] whitespace-nowrap hover:text-[#693B93] hover:font-bold">Technology</a>
<a href="" className="px-2 md:px-3 lg:px-4 text-[13px] md:text-[14px] lg:text-[16px] whitespace-nowrap hover:text-[#693B93] hover:font-bold">FAQs</a>
        </div>

        <div className="flex flex-row gap-4 text-white">
          
          <button className="bg-[#693B93] hidden sm:block rounded-[8px] w-[120px] h-[44px] font-bold cursor-pointer">
            Contact Us
          </button>

          {/* Language Dropdown */}
          <div className="relative hidden sm:block">

            <button
              onClick={() => setLangOpen(!langOpen)}
              className="bg-[#F9F3FF] flex items-center justify-center rounded-[8px] w-[135px] h-[44px] font-bold text-black border border-[#693B93] cursor-pointer pl-3 pr-3"
            >
              <img src={selectedLang.flag} alt="flag" className="flex-shrink-0 mr-2" />
              <div>{selectedLang.name}</div>
              <IoIosArrowDown className="flex-shrink-0 ml-2 mt-1" />
            </button>

            {/* Dropdown */}
            {langOpen && (
              <div className="absolute top-[50px] left-0 w-[135px] bg-[#F9F3FF] border border-[#693B93] rounded-[8px] shadow-md p-2">

                {languages.map((lang, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                    className="flex items-center gap-3 p-2 cursor-pointer hover:bg-purple-100 rounded"
                  >
                    <img src={lang.flag} alt="flag" />
                    <div className="font-bold text-black">{lang.name}</div>
                  </div>
                ))}

              </div>
            )}

          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden px-4 text-3xl"
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {/*Buttons Mobile*/}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden bg-gray-100 space-y-2 pb-3`}>
<a href="" className="px-2 md:px-3 lg:px-4 text-[13px] md:text-[14px] lg:text-[16px] whitespace-nowrap hover:text-[#693B93] hover:font-bold">Home</a>
<a href="" className="px-2 md:px-3 lg:px-4 text-[13px] md:text-[14px] lg:text-[16px] whitespace-nowrap hover:text-[#693B93] hover:font-bold">About Us</a>
<a href="" className="px-2 md:px-3 lg:px-4 text-[13px] md:text-[14px] lg:text-[16px] whitespace-nowrap hover:text-[#693B93] hover:font-bold">Services</a>
<a href="" className="px-2 md:px-3 lg:px-4 text-[13px] md:text-[14px] lg:text-[16px] whitespace-nowrap hover:text-[#693B93] hover:font-bold">Technology</a>
<a href="" className="px-2 md:px-3 lg:px-4 text-[13px] md:text-[14px] lg:text-[16px] whitespace-nowrap hover:text-[#693B93] hover:font-bold">FAQs</a>
      </div>
    </nav>
  );
}