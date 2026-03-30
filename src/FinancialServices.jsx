import React from 'react';
import { TrendingUp, BarChart3, Cpu, CheckCircle2 } from 'lucide-react';

const servicesData = [
  {
    title: "Portfolio Optimization",
    icon: TrendingUp,
    subtitle: "Quantum algorithms analyze millions of scenarios simultaneously to find optimal portfolio allocations with unprecedented precision and speed.",
    features: [
      { text: "Real-time portfolio rebalancing" },
      { text: "Risk-adjusted return optimization" },
      { text: "Multi-asset class support" },
      { text: "ESG integration capabilities" }
    ]
  },
  {
    title: "Advanced Risk Analytics",
    icon: BarChart3,
    subtitle: "Advanced quantum models predict and quantify risks with unprecedented accuracy, helping you make informed decisions in volatile markets.",
    features: [
      { text: "Value-at-Risk (VaR) calculations" },
      { text: "Monte Carlo stress testing" },
      { text: "Multi-scenario analysis" },
      { text: "Real-time risk monitoring" }
    ]
  },
  {
    title: "Quantum Trading Algorithms",
    icon: Cpu,
    subtitle: "Quantum-powered trading algorithms execute strategies with superhuman speed and precision, identifying opportunities invisible to classical systems.",
    features: [
      { text: "High-frequency trading optimization" },
      { text: "Automated market making" },
      { text: "Cross-market arbitrage detection" },
      { text: "Predictive market analysis" }
    ]
  }
];

function RevolutionaryFinancial() {
  return (
    <div id="services" className="mt-[83px] mb-[70px] sm:mb-[141px] md:px-20 px-[28px] w-full font-sans">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Badge */}
        <span className="border border-[#693B93] bg-[#F9F3FF] text-[#693B93] px-4 py-2 rounded-[20px] font-bold text-[12px] leading-[100%] inline-block">
          Quantum-Enhanced Solutions
        </span>

        <h1 className="font-bold text-[26px] sm:text-[38px] md:text-[48px] leading-[1.2] tracking-[0] mt-6 sm:mt-5">
          Revolutionary{" "}
         
          <span className="block sm:inline text-[#693B93]">
            Financial Services
          </span>
        </h1>

      
        <p className="font-light text-[14px] sm:text-[18px] sm:leading-[25px] leading-[19px] tracking-[0] text-center text-[#0F0F0F] mt-4 max-w-[802px] mx-auto">
          Transform your financial operations with our cutting-edge quantum computing solutions designed for the modern financial landscape
        </p>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[16px] text-left mt-12.5 sm:mt-[38px] justify-items-center">
          {servicesData.map(function(card, index) {
            const IconComponent = card.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-[20px] py-[45px] px-[26px] md:px-[35px] shadow-lg border border-transparent hover:border-[#693B93]/20 transition-all flex flex-col w-full h-full max-w-[450px] lg:max-w-none"
              >
                <div className="text-[#693B93] ">
                  <IconComponent size={40} strokeWidth={2.5} />
                </div>

                <h1 className="font-bold text-[20px] leading-[100%] tracking-[0%] mt-3.75 whitespace-nowrap text-[#1A1A1A]">
                  {card.title}
                </h1>

                <p className="mt-4 font-light text-[14px] sm:text-[16px] leading-[25px] tracking-[0%] text-gray-600 ">
                  {card.subtitle}
                </p>

                <div className="mt-6 space-y-3.5">
                  {card.features?.map(function(fec, idx) {
                    return (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 size={18} className="text-[#693B93] mr-2.5 mt-1 flex-shrink-0" strokeWidth={2.5} />
                        <p className="font-light text-[14px] sm:text-[16px] leading-[20px] tracking-[0%] text-gray-700">
                          {fec.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RevolutionaryFinancial;