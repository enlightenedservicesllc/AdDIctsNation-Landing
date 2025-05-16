import { Routes, Route } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import Footer from "./components/shared/Footer";
import CTA from "./components/shared/cta";
import Samthesoala from "./pages/Samthesoala";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Advertise from "./pages/Advertise";
import Career from "./pages/Career";
import Faq from "./pages/Faq";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Guidelines from "./pages/Guidelines";
import ScrollToTop from "./components/shared/ScrollToTop";
import Notification from "./components/shared/Notification";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 3 } },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Notification />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/samthesoala" element={<Samthesoala />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/community-guidelines" element={<Guidelines />} />
      </Routes>
      <CTA />
      <Footer />
    </QueryClientProvider>
  );
};

export default App;
