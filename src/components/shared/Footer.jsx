import React from "react";
import { cn } from "@/lib/utils";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router";
import {
  footerQuickLinks,
  footerOtherLinks,
  footerBottomLinks,
} from "@/constants";

const Footer = ({ className }) => {
  return (
    <footer
      className={cn(
        "w-full py-12 px-4 md:px-10 bg-[#292D32] text-white",
        className
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">
              <span className="text-white">AdDicts</span>
              <span className="text-[#E74C3C]">Nation</span>
            </h2>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              AdDictsNation is the meeting point for ad lovers, creators, and
              brands. Watch, rate, and discuss groundbreaking ads while finding
              inspiration. Advertisers get feedback from a passionate nation of
              AdDicts that values creativity.
            </p>
            <div className="flex space-x-2">
              <a
                href="https://web.facebook.com/profile.php?id=61575667465545"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#333] rounded-full hover:bg-[#444] transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://x.com/AdDictsNations"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#333] rounded-full hover:bg-[#444] transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.instagram.com/addictsnation?igsh=NW4wN3R4dXF4M2o="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#333] rounded-full hover:bg-[#444] transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-md font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerQuickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div className="col-span-1">
            <h3 className="text-md font-medium mb-4">Other Links</h3>
            <ul className="space-y-2">
              {footerOtherLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-md font-medium mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-2 text-gray-400 flex-shrink-0 mt-1"
                />
                <span className="text-sm text-gray-400">
                  Address: 8 The Green STE A Dover, DE 19901 USA
                </span>
              </li>
              <li className="flex items-start">
                <Phone
                  size={18}
                  className="mr-2 text-gray-400 flex-shrink-0 mt-1"
                />
                <span className="text-sm text-gray-400">
                  Phone: +1(302)5873151
                </span>
              </li>
              <li className="flex items-start">
                <Mail
                  size={18}
                  className="mr-2 text-gray-400 flex-shrink-0 mt-1"
                />
                <span className="text-sm text-gray-400">
                  info@addictsnation.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-500 mt-8 pt-6 flex flex-col md:flex-row md:justify-between text-xs text-gray-500">
          <div className="mb-4 md:mb-0">
            <p>Copyright | Addictsnation 2025</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {footerBottomLinks.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.href}
                  className="hover:text-gray-400 transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
