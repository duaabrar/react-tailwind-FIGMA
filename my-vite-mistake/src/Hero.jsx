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
        <div className="relative w-full max-w-[536px] h-[371px] sm:h-[380px] lg:h-[400px] order-1 lg:order-2">

         <img
  src={semicircle}
  alt="background shape"
  className="absolute right-10 mt-29 lg:mt-0 lg:top-0 w-[224.29px] h-[224.29px]  z-10 sm:w-[373px] sm:h-[373px] sm:z-10 md:bottom-0"
/>
          {/* cards */}

          <div className="absolute w-[142px] h-[62px] top-33 left-15 md:left-25 sm:top-8 sm:left-28 sm:w-[180px] sm:h-[87px] bg-white shadow-lg rounded-[20px] p-1 sm:p-3 lg:left-24 z-20 ">
            <p className="text-[10px] sm:text-[12px] text-black font-bold ">Quantum Processing</p>
            <h3 className="text-[#693B93] text-[16px] font-bold  sm:text-[24px]">99.9%</h3>
            <p className="text-[10px] sm:text-xs text-gray-400">Accuracy Rate</p>
          </div>

          <div className="absolute top-50 right-22 w-[113px] h-[61px] sm:top-35 sm:right-28 sm:w-[180px] sm:h-[87px] bg-white shadow-lg rounded-[20px] p-1 sm:p-3 lg:right-38 z-20 ">
            <p className="text-[10px] sm:text-sm text-black font-bold">Performance</p>
            <h3 className="text-[#693B93] text-[16px] font-bold  sm:text-[25px]">1000x</h3>
            <p className="text-[10px] sm:text-xs text-gray-400">Faster Analysis</p>
          </div>

          <div className="absolute bottom-26 left-[-1px] w-[138px] h-[61px] sm:bottom-37 sm:left-1 bg-white sm:w-[213px] sm:h-[87px] shadow-lg rounded-[20px] p-1 sm:p-3 lg:left-[-30px] z-20">
            <p className="text-[10px] sm:text-[12px] text-black font-bold ">Security</p>
            <h3 className="text-[#693B93] text-[16px] font-bold  sm:text-[25px] lg:text-[25px]">Bank-Grade</h3>
            <p className="text-[10px] sm:text-xs text-gray-400 ">Encryption</p>
          </div>

          <div className="absolute bottom-10 right-32 w-[113px] h-[61px] sm:bottom-12 sm:right-42 bg-white sm:w-[180px] sm:h-[87px] shadow-lg rounded-[20px] p-1 sm:p-3 lg:right-55 z-20">
            <p className="text-[10px] sm:text-[12px] text-black font-bold">ROI Increase</p>
            <h3 className="text-[#693B93] text-[16px] font-bold sm:text-[25px]">+47%</h3>
            <p className="text-[10px] sm:text-xs text-gray-400">Average Boost</p>
          </div>
          <img
  src={dots}
  alt="background shape"
 className=" absolute top-69 left-8 w-[73.01px] h-[47.24] lg:left-10 lg:w-[120.78px] lg:h-[78.15px] "
/>
       <img
  src={vector}
  alt="background shape"
 className=" absolute right-70 top-34 w-[66.56px] h-[76.22px] lg:w-[110.12px] lg:h-[126.1px] lg:right-110  lg:top-[48px]  md:w-[110.12px] md:h-[126.1px] md:right-107 md:top-[38px] sm:right-105 sm:top-[38px] "
/>
        </div>
      </div>
    </section>
  );
}