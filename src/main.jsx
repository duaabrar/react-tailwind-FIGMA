import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Hero from "./Hero";
import QuantumSection from "./QuantumSection";
import FinancialServices from "./FinancialServices.jsx"
import QuantumFinance from "./MeetsFinance.jsx"
import FAQSection from "./FAQSection.jsx"
import QuantumCTABanner from "./QuantumCTABanner.jsx"
import FooterContact from "./FooterContact.jsx"
import Footer from "./Footer.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header/>
     <Hero />
       <QuantumSection />
       <FinancialServices />
       <QuantumFinance />
       <FAQSection />
       <QuantumCTABanner />
       <FooterContact />
       <Footer />
  </StrictMode>,
)
