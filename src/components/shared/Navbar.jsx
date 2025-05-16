import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { navigationItems, URLS } from "@/constants";
import { useLocation } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  // Determine if current page is home
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Only add scroll listener on home page
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  // Determine navbar background color based on route and scroll position
  const navbarBg = isHomePage
    ? hasScrolled
      ? "bg-black/70 backdrop-blur-sm shadow-md"
      : "bg-black/10 backdrop-blur-sm"
    : "bg-white shadow-md";

  const textColor = isHomePage ? "text-white" : "text-black";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed md:mt-10 w-full z-50  `}>
      <div
        className={`container w-full mx-auto px-5 py-4 flex items-center justify-between transition-all duration-300 ${navbarBg} md:rounded-xl`}
      >
        <NavLink to="/" className="flex items-center">
          <span className={`text-2xl font-bold ${textColor}`}>
            <span>AdDicts</span>
            <span className="text-primary">Nation</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((navItem) => (
            <NavLink
              to={navItem.href}
              className={`${textColor} hover:text-gray-300 transition-colors`}
              key={navItem.title}
            >
              {navItem.title}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Link to={URLS.register}>
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Get Started
            </Button>
          </Link>
          <Link to={URLS.login}>
            <Button
              variant="outline"
              className="hidden md:flex bg-transparent border-primary hover:bg-primary hover:text-white text-primary rounded-full px-6"
              asChild
            >
              Login
            </Button>
          </Link>
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className={textColor} />
            ) : (
              <Menu size={24} className={textColor} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          isHomePage ? "bg-black/95" : "bg-white"
        } overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4">
          {navigationItems.map((navItem) => (
            <NavLink
              to={navItem.href}
              className={`py-2 border-b ${
                isHomePage
                  ? "text-white border-gray-800"
                  : "text-black border-gray-300"
              } hover:text-gray-500 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
              key={navItem.title}
            >
              {navItem.title}
            </NavLink>
          ))}

          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 w-full mt-2">
              Get Started
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
