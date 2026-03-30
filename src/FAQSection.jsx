import React, { useState } from 'react';

const FAQSection = () => {

  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      id: "01",
      question: "What is quantum computing and how does it apply to finance?",
      answer: "Quantum computing uses quantum bits or qubits to perform calculations much faster than classical computers, especially for complex financial modeling."
    },
    {
      id: "02",
      question: "How secure is quantum computing for financial data?",
      answer: "Security is our top priority. We employ quantum-resistant encryption methods and multi-layered security protocols that exceed banking industry standards. Our quantum systems actually enhance security through quantum key distribution and quantum-safe cryptography. All data is encrypted both in transit and at rest."
    },
    {
      id: "03",
      question: "What kind of performance improvements can we expect?",
      answer: "Depending on the use case, you can expect exponential speedups in portfolio optimization and risk analysis tasks."
    },
    {
      id: "04",
      question: "How do we integrate with existing systems?",
      answer: "Our enterprise cloud architecture allows for seamless integration via secure APIs with your current financial software stack."
    },
    {
      id: "05",
      question: "What is the pricing model for quantum solutions?",
      answer: "We offer flexible pricing based on computational resources and the specific needs of your enterprise."
    }
  ];

  return (
    <section className="bg-white py-20 px-6 ">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Header Section */}
        <span className="inline-block border border-[#E9DFF1] bg-[#F4ECF8] rounded-full px-4 py-2 text-[#693B93] text-[12px] font-bold tracking-widest uppercase mb-4 block">
          Frequently Asked Questions
        </span>
        <h2 className="text-[32px] sm:text-[48px] font-bold text-slate-900 mb-4">
          Got <span className="text-[#693B93]">Questions?</span>
        </h2>
        <p className="text-slate-500 mb-10 max-w-2xl mx-auto">
          Everything you need to know about quantum computing in finance and our solutions.
        </p>

       
        <div className="max-w-4xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'bg-[#F8F7FF]' : 'bg-transparent border-b border-slate-100'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-start p-6 sm:p-8 focus:outline-none text-left"
              >
               
                <span className={`text-[14px] font-bold w-[50px] sm:w-[80px] mt-1 transition-colors ${
                  openIndex === index ? 'text-[#693B93]' : 'text-purple-200'
                }`}>
                  {faq.id}
                </span>

               
                <div className="flex-1 pr-4">
                  <h3 className={`font-bold text-[16px] sm:text-[18px] leading-tight transition-colors duration-300 ${
                    openIndex === index ? 'text-[#693B93]' : 'text-slate-800'
                  }`}>
                    {faq.question}
                  </h3>
                  
                 
                  <div 
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openIndex === index ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-slate-500 text-[14px]  max-w-[580px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>

             
                <span className={`text-2xl shrink-0 transition-transform duration-300 leading-none ${
                  openIndex === index ? 'text-[#693B93] rotate-45' : 'text-slate-300'
                }`}>
                  +
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;