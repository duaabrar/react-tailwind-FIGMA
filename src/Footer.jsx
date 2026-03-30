import React from 'react'
import Logo from "./assets/Images/Logo Q 1.png";
function Footer() {
  return (
     <div className="md:px-20  px-7  pt-12.5 lg:pt-30 pb-8.25 sm:pb-6  bg-[#F9F3FF]">
      <div className="flex lg:justify-between lg:gap-3.75 pb-13 lg:pb-36.25  items-center sm:items-start  flex-col text-center sm:text-start sm:flex-wrap sm:flex-row  ">
        <div className="lg:max-w-108">
          <img
            className=" w-63.75 h-15 mx-auto sm:mx-0 hover:cursor-pointer"
            src={Logo}
            alt="quantum Logo"
          />
          <p className="text-[#0F0F0F] font-light text-[16px] leading-[1.4] mt-6  text-center sm:text-start">
            Pioneering the future of finance through quantum computing
            innovation. Transforming how institutions optimize portfolios,
            manage risk, and execute trades.
          </p>
        </div>

    <div className="mr-0 sm:mr-30 lg:mr-0">
      <h1 class=" font-bold text-[20px] leading-[1.3] text-[#693B93] mt-10 lg:mt-0">
        Quick Links
      </h1>
      <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start ">
        <p class="text-[#0F0F0F] font-light text-[18px] leading-[1.2] text-start mt-10 hover:cursor-pointer hover:font-bold">
          Home
        </p>

        <p class="text-[#0F0F0F] font-light text-[18px] leading-[1.2]  text-start mt-4.5 hover:cursor-pointer hover:font-bold">
          About Us
        </p>
        <p class="text-[#0F0F0F] font-light text-[18px] leading-[1.2] text-start mt-4.5 hover:cursor-pointer hover:font-bold">
          Services
        </p>
        <p class="text-[#0F0F0F] font-light text-[18px] leading-[1.2]  text-start mt-4.5 hover:cursor-pointer hover:font-bold">
          Technology
        </p>
      </div>
    </div>
    <div>
      <h1 class=" font-bold text-[20px] leading-[1.3] text-[#693B93] mt-10 lg:mt-0 ">
        Support
      </h1>
      <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start ">
        <p class="text-[#0F0F0F] font-light text-[18px] leading-[1.2]  text-start mt-10 hover:cursor-pointer hover:font-bold">
          FAQs
        </p>

        <p class="text-[#0F0F0F] font-light text-[18px] leading-[1.2]  text-start mt-4.5 hover:cursor-pointer hover:font-bold">
          Contact Us
        </p>
        <p class="text-[#0F0F0F] font-light text-[18px] leading-[1.2]  text-start mt-4.5 hover:cursor-pointer hover:font-bold">
          Privacy Policy
        </p>
        <p class="text-[#0F0F0F] font-light text-[18px] leading-[1.2]  text-start mt-4.5 hover:cursor-pointer hover:font-bold lg:w-[170px]">
          Terms & Conditions
        </p>
      </div>
    </div>
  </div>
  <hr class="  opacity-10 pb-7.25 sm:pb-6.25" />
  <div className="flex sm:justify-between sm:gap-3 flex-col  lg:flex-row lg:px-2.5 ">
    <div>
      <p class=" font-light text-[12px] sm:text-[18px] items-start  text-center  mx-auto w-57.75 sm:w-full">
        Copyright © 2025 Quantum Asset Technologies
      </p>
    </div>
    <div>
   <div className='flex items-center justify-center flex-col lg:flex-row'>
    <p className='text-[#0F0F0F] sm:text-[18px] text-[12px]  font-light'>All Rights Reserved <span className="hidden lg:inline">|</span></p>
    <div className='flex items-center'>
        <p className='font-bold sm:text-[18px] text-[12px] text-[#693B93] underline ml-1'> Terms and Conditions <span className='text-[#0F0F0F] ml-1 inline'> | </span></p>
        <p className='font-bold sm:text-[18px] text-[12px] text-[#693B93] underline ml-1.25'> Privacy Policy</p>
    </div>
   </div>
    </div>
  </div>
</div>
  )
}

export default Footer
