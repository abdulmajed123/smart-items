"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaMobileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold text-primary">Smart Items</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Smart Items brings you modern gadgets and smart accessories to
            upgrade your digital lifestyle with quality and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-primary cursor-pointer">Home</li>
            <li className="hover:text-primary cursor-pointer">Products</li>
            <li className="hover:text-primary cursor-pointer">Categories</li>
            <li className="hover:text-primary cursor-pointer">Login</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-3">
              <FaMobileAlt className="text-primary" />
              +880 1234-567890
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              support@smartitems.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" />
              Bangladesh
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-3">
            <a className="p-3 border rounded-full hover:bg-primary hover:text-white transition">
              <FaFacebookF />
            </a>
            <a className="p-3 border rounded-full hover:bg-primary hover:text-white transition">
              <FaTwitter />
            </a>
            <a className="p-3 border rounded-full hover:bg-primary hover:text-white transition">
              <FaInstagram />
            </a>
            <a className="p-3 border rounded-full hover:bg-primary hover:text-white transition">
              <FaLinkedinIn />
            </a>
            <a className="p-3 border rounded-full hover:bg-primary hover:text-white transition">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Smart Items. All rights reserved.
      </div>
    </footer>
  );
}
