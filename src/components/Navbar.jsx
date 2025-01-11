import { useState } from 'react';
import logo from "../assets/logo.svg";
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:h-20 h-16 flex items-center justify-between shadow-[#1026490F]/10 shadow-md bg-[#FFFFFF] w-screen relative">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="w-24 h-6 lg:ml-14 ml-4" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center">
        {["Crypto Taxes", "Free Tools", "Resource Center"].map((item, index) => (
          <div key={index} className="text-lg font-semibold text-[#0F1629] mr-6 cursor-pointer">
            {item}
          </div>
        ))}
        <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-8 py-2 text-white rounded-lg mx-14">
          Get Started
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="lg:hidden mr-4">
        <Hamburger toggled={isOpen} toggle={toggleMenu} />
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 right-0 bg-white rounded-md shadow-md py-4 w-48">
          {["Crypto Taxes", "Free Tools", "Resource Center"].map((item, index) => (
            <div key={index} className="text-lg font-semibold text-[#0F1629] px-4 py-2 cursor-pointer hover:bg-gray-100">
              {item}
            </div>
          ))}
          <div className="px-4 mt-4">
            <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] w-full py-2 text-white rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
