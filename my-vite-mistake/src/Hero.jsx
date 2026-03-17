import React from "react";
import semicircle from "./assets/Images/Rectangle (1).png"
import dots from "./assets/Images/dots (1).png"
import vector from "./assets/Images/Vector (2).png"
export default function Hero() {
  return (
    <section className="w-full bg-white lg:py-16 overflow-y-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 gap-10">

        {/* LEFT SIDE */}
        <div className="pb-[0px] sm:w-[492px]  text-center pb-[0px] lg:text-left order-2 lg:order-1 pt-0 pb-0 mb-5">

          <p className="text-3xl  sm:text-4xl lg:text-[68px] font-bold leading-none ">
            The Future of{" "}
            <span className="text-[#693B93] block ">
              Financial
              <br className="hidden lg:block"/>
             {" "} Intelligence
            </span>
          </p>

          <p className="text-gray-600 sm:w-[450px] sm:h-[100px] sm:text-[18px]">
            Harness the revolutionary power of quantum computing to transform
            portfolio optimization, risk analysis, and financial modeling.
            Experience  &nbsp; unprecedented &nbsp; speed, accuracy, and insights in your
            investment decisions.
          </p>

          {/* BUTTONS */}
          <div className="flex  gap-2  mt-6 justify-center lg:justify-start">
            <button className="bg-[#693B93] font-bold w-[132px] h-[35px] text-white  text-[12px] sm:w-[166px] sm:h-[44px] font-bold text-[14px] sm:px-6 sm:py-3 rounded-[8px] font-semibold">
              Explore Solutions
            </button>

            <button className="border font-bold border-gray-400 w-[123px] h-[35px] text-[12px] sm:w-[166px] sm:h-[44px] font-bold sm:text-[14px] sm:px-6 sm:py-3 rounded-[8px] font-semibold">
              Schedule Demo
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[400px] order-1 lg:order-2">

         <img
  src={semicircle}
  alt="background shape"
  className="absolute right-3 mt-10 lg:mt-0 lg:top-0 w-[224.29px] h-[224.29px]  z-10 sm:w-[373px] sm:h-[373px] sm:z-10 md:bottom-0 md:right-25 lg:right-0"
/>
          {/* cards */}

          <div className="absolute w-[142px] h-[62px] top-15 left-21 md:left-68 sm:top-8 sm:left-26 sm:w-[180px] sm:h-[87px] bg-white shadow-lg rounded-[20px] p-1 sm:p-3 lg:left-63 z-20 ">
            <p className="text-[10px] sm:text-[12px] text-black font-bold ">Quantum Processing</p>
            <h3 className="text-[#693B93] text-[16px] font-bold  sm:text-[24px]">99.9%</h3>
            <p className="text-[10px] sm:text-xs text-gray-400">Accuracy Rate</p>
          </div>

          <div className="absolute top-31 right-20 w-[113px] h-[61px] sm:top-35 md:right-50 sm:right-28 sm:w-[180px] sm:h-[87px] bg-white shadow-lg rounded-[20px] p-1 sm:p-3 lg:right-30 z-20 ">
            <p className="text-[10px] sm:text-sm text-black font-bold">Performance</p>
            <h3 className="text-[#693B93] text-[16px] font-bold  sm:text-[25px]">1000x</h3>
            <p className="text-[10px] sm:text-xs text-gray-400">Faster Analysis</p>
          </div>

          <div className="absolute bottom-19 left-[2px] w-[138px] h-[61px] sm:bottom-37 sm:left-1 bg-white sm:w-[213px] sm:h-[87px] md:left-37 md:bottom-29 shadow-lg rounded-[20px] p-1 sm:p-3 lg:left-30 lg:bottom-38 z-20">
            <p className="text-[10px] sm:text-[12px] text-black font-bold ">Security</p>
            <h3 className="text-[#693B93] text-[16px] font-bold  sm:text-[25px] lg:text-[25px]">Bank-Grade</h3>
            <p className="text-[10px] sm:text-xs text-gray-400 ">Encryption</p>
          </div>

          <div className="absolute bottom-6 right-26 w-[113px] h-[61px] sm:bottom-12 sm:right-42 bg-white sm:w-[180px] sm:h-[87px] md:bottom-5 md:right-67 shadow-lg rounded-[20px] p-1 sm:p-3 lg:right-42 lg:bottom-14 z-20">
            <p className="text-[10px] sm:text-[12px] text-black font-bold">ROI Increase</p>
            <h3 className="text-[#693B93] text-[16px] font-bold sm:text-[25px]">+47%</h3>
            <p className="text-[10px] sm:text-xs text-gray-400">Average Boost</p>
          </div>
          <img
  src={dots}
  alt="background shape"
 className=" absolute top-50 left-14 w-[73.01px] h-[47.24] md:left-55 md:top-70  md:w-[120.78px] md:h-[78.15px]  lg:left-46 lg:top-67 lg:w-[120.78px] lg:h-[78.15px] "
/>
       <img
  src={vector}
  alt="background shape"
 className=" absolute right-64 top-17 w-[66.56px] h-[76.22px]  lg:w-[139.12px] lg:h-[126.1px] lg:right-102  lg:top-[40px]  md:w-[110.12px] md:h-[136.1px] md:right-125 md:top-12 sm:right-105 sm:top-[38px] "
/>
        </div>
      </div>
    </section>
  );
}