import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">The Love Journey</h3>
          <p>Guiding you through a personalized matchmaking experience.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="mr-2">📍</span>
              Colombia - Atlántico
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              +1 (269) 319-9518
            </li>
            <li className="flex items-center">
              <span className="mr-2">✉️</span>
              info@thelovejourney.com
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#plans" className="hover:text-white">Plans</a></li>
            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} The Love Journey. All rights reserved.
      </div>
    </footer>
  );
}