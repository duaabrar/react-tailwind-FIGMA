import React from 'react';
import group from "./assets/Images/Group 57.png"; 

const QuantumCTABanner = () => {
  return (
   
    <div className="w-full relative overflow-hidden bg-gradient-to-r from-[#693B93] to-[#A46CD7] min-h-[383px] flex items-center justify-center">
      
     
      <img
        className="absolute w-full h-full object-cover pointer-events-none" 
        src={group} 
        style={{ mixBlendMode: 'normal', opacity: '1' }} 
        alt="lines-pattern"
      />

     
      <div className="relative z-10 px-[28px] md:px-20 w-full flex flex-col items-center text-center py-16 sm:py-20">
        
       
        <span className="inline-block px-4 py-2 mb-6 text-[12px] font-bold tracking-[0.1em] uppercase bg-white backdrop-blur-md rounded-full border border-white/30 text-[#693B93]">
          Ready to Transform?
        </span>

        
        <h1 className="font-bold text-[28px] sm:text-[38px] md:text-[48px] leading-[1.1] tracking-tight text-white max-w-[900px]">
        
          Step Into the <br className="block sm:hidden" /> 
          <span className="text-[#0F0F0F]">Quantum Future</span>
        </h1>

       
       <p className="font-light text-[14px] sm:text-[18px]  text-white/90 mt-5 max-w-[882px] mx-auto">
  Join leading financial institutions already leveraging quantum computing for superior performance, 
  unprecedented insights, and competitive advantage in today's markets.
</p>

     
        <div className="mt-8">
          <button className="bg-white text-black px-8 py-3.5 rounded-[8px] font-bold text-[14px] hover:bg-purple-50 transition-all shadow-lg active:scale-95">
            Book Consultation
          </button>
        </div>

      </div>
    </div>
  );
};

export default QuantumCTABanner;