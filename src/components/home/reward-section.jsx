import { useRef, useEffect, useState } from "react";
import { useScroll, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Img1 from "@/assets/home/community-1.png";
import Img2 from "@/assets/home/community-2.png";
import Img3 from "@/assets/home/community-3.png";
import Img4 from "@/assets/home/community-4.png";
import Img5 from "@/assets/home/community-5.png";
import { Link } from "react-router";
import { URLS } from "@/constants";

// Timeline sections data
const sections = [
  {
    id: 1,
    title: "Join the Community",
    description: "Connect with like-minded individuals",
    image: Img1,
    buttonText: "Get Started",
  },
  {
    id: 2,
    title: "Watch & Rate",
    description: "Discover amazing content",
    image: Img2,
  },
  {
    id: 3,
    title: "Engage in Discussions",
    description: "Comment, Critique and Explore",
    image: Img3,
  },
  {
    id: 4,
    title: "Earn Rewards",
    description: "Get credits for your participation",
    image: Img4,
  },
  {
    id: 5,
    title: "Showcase Your Work",
    description: "For businesses and freelancing creatives",
    image: Img5,
  },
];

const RewardSection = () => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Update active section based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Calculate which section should be active based on scroll progress
      const sectionIndex = Math.min(
        Math.floor(latest * sections.length),
        sections.length - 1
      );
      setActiveSection(sectionIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="relative min-h-screen mt-28" ref={containerRef}>
      {/* Header */}
      <header className="text-center py-8 px-4 mb-16">
        <h1 className="text-5xl md:text-6xl font-medium text-gray-800">
          Join, Watch, Engage & Get Rewarded!
        </h1>
      </header>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Fixed image container */}
          <div className="hidden md:block sticky top-32 h-100 self-start">
            <motion.div
              className="w-full h-full rounded-lg overflow-hidden relative"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeSection === index ? 1 : 0,
                    transition: { duration: 0.5 },
                  }}
                >
                  <img
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    className="object-cover"
                    width={600}
                    height={400}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Timeline */}
          <div className="relative">
            {/* Timeline line - Changed to dashed */}
            <div className="absolute left-4 md:left-0 top-0 bottom-0 w-px bg-gray-200 border-l border-dashed border-gray-300"></div>

            {/* Timeline sections */}
            {sections.map((section) => (
              <div
                key={section.id}
                className={`relative mb-48 md:mb-80 ${isMobile ? "pl-12" : ""}`}
              >
                {/* Timeline dot - Centered on the line */}
                <div className="absolute left-4 md:left-0 top-0 -ml-1.5 w-3 h-3 rounded-full bg-primary"></div>

                {/* Content - Adjusted spacing and positioning */}
                <motion.div
                  className={`relative ${isMobile ? "" : "md:ml-8"}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Mobile image */}
                  <div className="md:hidden mb-4 rounded-lg overflow-hidden aspect-video">
                    <img
                      src={section.image || "/placeholder.svg"}
                      alt={section.title}
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                  </div>

                  <h2 className="text-4xl font-normal mb-4">{section.title}</h2>
                  <p className="text-gray-600 mb-6">{section.description}</p>

                  {section.buttonText && (
                    <Link to={URLS.register}>
                      <Button className="bg-primary hover:bg-primary/80">
                        {section.buttonText}
                      </Button>
                    </Link>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardSection;
