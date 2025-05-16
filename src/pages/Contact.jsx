import ContactSection from "@/components/contact/contact-section";
import ContactForm from "@/components/contact/contactForm";
import HeroSection from "@/components/contact/hero-section";
import FAQSection from "@/components/home/faq-section";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9] md:p-2 p-0">
      <HeroSection />
      <ContactForm />
      <ContactSection />
      <FAQSection />
    </div>
  );
};

export default Contact;
