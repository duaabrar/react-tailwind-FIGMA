import React from "react";
import Btn from "./Btn.jsx";
import semicircle from "./assets/Images/Rectangle (1).png"
import dots from "./assets/Images/dots (1).png"
import vector from "./assets/Images/Vector (2).png"
import Quantum from "./Quantum.jsx";
function Hero() {
  return (
    <section className="lg:h-162.25 w-full lg:px-22.5 md:px-10  lg:pt-37.5 lg:pb-25.75 pt-20 pb-10 md:pt-25 md:pb-13 px-6.5 flex md:justify-between justify-center flex-wrap-reverse gap-13.75  sm:flex-nowrap sm:gap-5">
      <div className="flex flex-col lg:gap-5 lg:w-123">
        <p className="font-bold lg:text-[68px] md:text-[38px] text-[26px] text-center sm:text-left text-[#0F0F0F] leading-none md:mb-2.5 lg:mb-1.5 mb-4">
          The Future of <span className="lg:text-[68px] text-[#693B93] block ">
             Financial Intelligence
          </span>
        </p>
        <p className="font-light lg:text-[18px] text-[12px] md:text-[16px] text-center sm:text-left text-[#0F0F0F] lg:leading-[1.3]  lg:w-123 sm:w-70 md:w-93 md:mb-2 lg:mb-1 mb-4">
          Harness the revolutionary power of quantum computing to transform
          portfolio optimization, risk analysis, and financial modeling.
          Experience unprecedented speed, accuracy, and insights in your
          investment decisions.
        </p>
        <div className="flex md:gap-2.25 justify-center sm:justify-normal gap-1">
          <Btn
            text="Explore Solutions"
            btnStyle=" lg:w-41.5 lg:h-11 md:w-35 md:h-9.5 w-33 h-8.75 rounded-lg bg-[#693B93] font-bold lg:text-[14px] text-[12px] text-white cursor-pointer"
          />
          <Btn
            text="Schedule Demo"
            btnStyle=" lg:w-41.5 lg:h-11 w-33 h-8.75 md:w-35 md:h-9.5 rounded-lg border border-[#0F0F0F] font-bold lg:text-[14px] text-[12px] text-[#0F0F0F] cursor-pointer"
          />
        </div>
      </div>

      <div className="relative flex md:mt-4 sm:mt-8 md:gap-7.5 gap-4.5">
        <div className="md:mt-11 mt-6.5">
          <Quantum
            boxHead="Quantum Processing"
            boxCenter="99.9%"
            boxSmall="Accuracy Rate"
            boxStyle="lg:w-[180px] md:w-[150px] w-[138px] absolute lg:left-26 left-15 lg:top-10 top-5 lg:px-4.5 px-4 lg:py-4 py-3.75 rounded-2xl shadow-[-10px_20px_60px_#693B931A] bg-[#FFFFFF] lg:h-[87px] h-[62px] md:h-[68px] flex flex-col justify-center md:gap-1 gap-0.5"
          />
          <img src={vector} className="lg:w-27.5 lg:h-31.5   w-16.5 h-19" />
          <Quantum
            boxHead="Security"
            boxCenter="Bank-Grade"
            boxSmall="Encryption"
            boxStyle="lg:w-[213px] w-[138px] md:w-[150px] absolute lg:bottom-31.5 lg:-left-3  lg:px-4.5 px-4 lg:py-4 py-3.75 rounded-2xl shadow-[-10px_20px_60px_#693B931A] bg-[#FFFFFF] lg:h-[87px] h-[61px] flex flex-col justify-center gap-1"
          />
          <Quantum
            boxHead="Performance"
            boxCenter="1000x"
            boxSmall="Faster Analysis"
            boxStyle="lg:w-[180px] w-[113px] md:w-[130px] absolute lg:bottom-37 bottom-19 md:bottom-28 lg:left-60 md:left-40 left-37 lg:px-4.5 lg:py-4 py-3.75 px-4 rounded-2xl shadow-[-10px_20px_60px_#693B931A] bg-[#FFFFFF] lg:h-[87px] h-[61px] md:h-[68px] flex flex-col justify-center gap-1"
          />
          <img
            src={dots}
            className="lg:w-30 lg:h-19.5 w-18.25 h-12 md:w-22 md:h-15 absolute lg:bottom-8 lg:left-14 bottom-5 left-8.5   -z-1"
          />
          <Quantum
            boxHead="ROI Increase"
            boxCenter="+47%"
            boxSmall="Average Boost"
            boxStyle="lg:w-[180px] w-[113px] md:w-[130px] absolute lg:bottom-8 bottom-0 md:bottom-4 lg:left-42 left-28  lg:px-4.5 px-4 lg:py-4 py-3.75 rounded-2xl shadow-[-10px_20px_60px_#693B931A] bg-[#FFFFFF] lg:h-[87px] h-[61px] md:h-[68px] flex flex-col justify-center gap-1"
          />
        </div>
        <div>
          <img src={semicircle} className="lg:w-92.75 lg:h-92.75 md:w-68 md:h-68 w-56 h-56" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
