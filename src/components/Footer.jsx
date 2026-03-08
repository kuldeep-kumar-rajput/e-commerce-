import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#020024] text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="text-center text-2xl sm:text-3xl font-bold mb-10">
          MyShop - Gadgets & Cosmetics
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
          <div>
            <h4 className="font-semibold mb-4 text-lg">About</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Our Story</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/iphone" className="hover:text-white">
                  iphone
                </Link>
              </li>
              <li>
                <Link to="/lipistik" className="hover:text-white">
                  Lipstick
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Contact </li>
              <li className="hover:text-white cursor-pointer">Shipping Info</li>
              <li className="hover:text-white cursor-pointer">Return Policy</li>
              <li className="hover:text-white cursor-pointer"> Privacy Policy </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Payment Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <img src="/visa.png" alt="Visa" className="w-12" />
            <img src="/mastercard.jpg" alt="Mastercard" className="w-12" />
            <img src="/paypal.png" alt="Paypal" className="w-12" />
            <img src="/AMAZONE.PNG" alt="Amazon" className="w-12" />
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              © 2026 MyShop. All rights reserved.
            </p>

            <div className="flex justify-center md:justify-end gap-4 mb-2">
              <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-blue-500 transition" />
              <FaFacebook className="w-5 h-5 cursor-pointer hover:text-blue-500 transition" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-blue-400 transition" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-pink-500 transition" />
            </div>

            <p className="text-gray-500 text-sm">info@myshop.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
