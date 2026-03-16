import React from "react";
import group from "./assets/Images/Group 57.png"
import { Zap, Atom, Shield } from "lucide-react";

export default function QuantumSection() {
  return (
    <section className="bg-[#F5F0FA] py-20 overflow-y-hidden " style={{ backgroundImage: `url(${group})` }} >
      <div className="max-w-[1200px] mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-block border border-[#693B93] text-[#693B93] px-4 py-1 rounded-full text-sm font-medium mb-6">
          About Quantum Asset Technologies
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Pioneering the{" "}
          <span className="text-[#693B93]">
            Quantum Revolution
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-[700px] mx-auto mb-14">
          We're at the forefront of financial technology, combining quantum
          computing breakthroughs with sophisticated financial modeling to
          deliver unparalleled insights, performance, and competitive
          advantage.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl hover:border-2 hover:border-[#693B93]  shadow-sm text-left ">
            <Zap className="text-[#693B93] mb-4" size={28} />
            <h3 className="font-semibold text-[20px] mb-2">
              Lightning Fast Processing
            </h3>
            <p className="text-gray-600 text-[18px]">
              Process complex financial calculations in milliseconds, not
              hours. Our quantum algorithms deliver results at unprecedented
              speed.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl hover:border-2 hover:border-[#693B93] shadow-md text-left">
            <Atom className="text-[#693B93] mb-4" size={28} />
            <h3 className="font-semibold ] mb-4" size={28} />
            <h3 className="font-semibold text-[20px] mb-2">
              Quantum Advantage
            </h3>
            <p className="text-gray-600 text-[18px]">
              Leverage quantum algorithms for superior portfolio optimization,
              risk assessment, and market analysis that's impossible with
              classical computing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl hover:border-2 hover:border-[#693B93] shadow-md text-left">
            <Shield className="text-[#693B93] mb-4" size={28} />
            <h3 className="font-semibold text-[20px] mb-2">
              Enterprise Security
            </h3>
            <p className="text-gray-600 text-[18px]">
              Military-grade quantum encryption and security protocols protect
              your most sensitive financial data and trading strategies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}