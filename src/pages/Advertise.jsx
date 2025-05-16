import AdvertiseCards from "@/components/advertise/advertise-card"
import HeroSection from "@/components/advertise/hero-section"
import AdvertiseInquiry from "../components/advertise/AdvertiseInquiry"
import FAQSection from "@/components/home/faq-section"


const Advertise = () => {
  return ( 
    <div className="min-h-screen flex flex-col bg-[#F9F9F9] md:p-2 p-0">
    <HeroSection/>
    <AdvertiseInquiry/>
    <FAQSection/>
 </div>
  )
}

export default Advertise