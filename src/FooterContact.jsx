import React from 'react';
import Contact from "./assets/Images/contact.png"

import { Mail, Phone, MapPin } from 'lucide-react'; 

function DiscussQuantum() {
 
  const contactData = [
    {
      title: "Phone",
      value: "(042) 35307569",
      icon: <Phone className="text-[#693B93]" size={24} />
    },
     {
      title: "Email Us",
      value: "contact@quantum-asset.tech",
      icon: <Mail className="text-[#693B93]" size={24} />
    },
    {
      title: "Visit Us",
      value: "NewYork.London.Singapor.Tokyo",
      icon: <MapPin className="text-[#693B93]" size={24} />
    }
  ];

  return (
    <div id="contact" className="md:mt-32 md:mb-20 my-20 md:px-20 px-[28px] w-full font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center md:items-start flex-col md:flex-row gap-12">
        
       
        <div className="max-w-[571px] text-start">
          <span className="border border-[#693B93] bg-[#F9F3FF] text-[#693B93] px-4 py-2 rounded-[20px] font-bold text-[12px] leading-[100%] inline-block">
            Get In Touch
          </span>
          
          <h1 className="font-bold text-[26px] sm:text-[38px] md:text-[38px] lg:text-[48px] leading-[1.1] mt-6">
            Let's Discuss Your 
            <span className="text-[#693B93]"> Quantum Future</span>
          </h1>

        
          <div className="hidden sm:block mt-10">
            <img className="mb-8 max-w-full h-auto" src={Contact} alt="tableimg" />
          </div>

        
          <div className="block sm:hidden text-start">
            <p className="font-light text-[14px] leading-[22px] text-[#0F0F0F] mt-5">
              We're at the forefront of financial technology, combining quantum
              computing breakthroughs with sophisticated financial modeling.
            </p>
            
          
            {contactData.map((element, index) => (
              <div key={index} className="flex gap-4 my-8 items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-[#F9F3FF] rounded-lg">
                  {element.icon}
                </div>
                <div>
                  <h1 className="font-bold text-[18px] text-[#693B93]">
                    {element.title}
                  </h1>
                  <h3 className="font-light text-[14px] text-[#0F0F0F]">
                    {element.value}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      
        <div className="w-full max-w-[533px] max-h-[500px] bg-[#F9F3FF] p-8 md:p-10 rounded-[1rem] border border-purple-50 shadow-md">
          <h3 className="text-2xl font-bold text-[#693B93] mb-1">Get Started Today</h3>
          <p className="text-black text-sm mb-2">
            Send us a message and we'll respond within 2 hours during business hours.
          </p>

          <form className="space-y-1">
            <input 
              type="text" 
              placeholder="Name*" 
              className=" w-full px-[15px] py-[17px] rounded-xl border border-slate-200 text-sm"
            />
            <input 
              type="email" 
              placeholder="Email Address*" 
              className="w-full px-[15px] py-[17px] rounded-xl border border-slate-200   text-sm"
            />
            <input 
              type="text" 
              placeholder="Subject*" 
              className="w-full px-[15px] py-[17px] rounded-xl border border-slate-200   text-sm"
            />
            <textarea 
              placeholder="Tell us about your message*" 
              rows="4"
              className="w-full px-5 py-4 rounded-xl border border-slate-200   text-sm"
            ></textarea>
            
            <button className="w-full bg-[#693B93] hover:bg-purple-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg mt-0">
              Send Message
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default DiscussQuantum;