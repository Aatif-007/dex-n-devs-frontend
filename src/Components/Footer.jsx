
import React from 'react';
import { FaEnvelope, FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoCallSharp, IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className="footer  text-white w-full">
      {/* Top part of the footer */}
      <div className="container mx-auto py-3 px-4 md:px-16 lg:px-24 xl:px-32 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Information Section */}
        <div className="information-mnu">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">INFORMATION</h3>
          <ul className="space-y-3 text-sm md:text-base">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="contact-menu">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">CONTACT US</h3>
          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-center">
              <IoLocationSharp className="mr-2" />
              <span>Yavatmal, Maharashtra 445001, India</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>info@dexndevs.com</span>
            </li>
            <li className="flex items-center">
              <IoCallSharp className="mr-2" />
              <span>+91-9420044689, +91-9511612449</span>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="follow-menu">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">FOLLOW US ON</h3>
          <ul className="flex items-center justify-center md:justify-start gap-6">
            <a target='_blank' href="https://www.instagram.com/dex.n.devs/">
            <li className="hover:text-pink-500 transition duration-300">
              <FaInstagram fontSize={"2rem"} />
            </li>
            </a>
            <a target='_blank' href="https://www.linkedin.com/company/104817985">
            <li className="hover:text-blue-700 transition duration-300">
              <FaLinkedin fontSize={"2rem"} />
            </li>
            </a>
            <li className="hover:text-blue-600 transition duration-300">
              <FaFacebookSquare fontSize={"2rem"} />
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom part of the footer */}
      <div className="footer-end  py-4 mt-8 text-center">
        <div className="container mx-auto flex flex-col items-center">
          {/* Company name */}
          <h3 className="text-sm md:text-base mb-2">
            <span style={{ color: "#ED80FD" }}>DEXNDEVS</span> SOLUTION PRIVATE LIMITED
          </h3>
          {/* Policies */}
          <div className="policy-shite text-sm">
            <span>Copyright &copy; 2024</span>
            <a href="https://www.termsfeed.com/live/2732c056-31ef-4399-9bc8-daa6b74e797d" target="_blank" className="mx-2 text-white hover:underline">
              Privacy Policy
            </a>
            <a href="https://www.termsfeed.com/live/19fcfee9-420f-44ae-8085-bf6bcd06f19a" target="_blank" className="text-white hover:underline">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
