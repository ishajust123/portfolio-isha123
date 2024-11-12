import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Sidebar() {
  return (
    <nav className="sidebar bg-gray-800 text-white h-screen p-6 flex flex-col justify-between">
      <div>
        <img
          src="/assets/isha.jpeg"
          alt="Profile"
          className="rounded-full mb-6 w-24 h-24 mx-auto" 
        /> {/* Profile Image */}

<ul className="space-y-4">
  <li><a href="#home" className="sidebar-link ml-4">Home</a></li>
  <li><a href="#about" className="sidebar-link ml-4">About</a></li>
  <li><a href="#projects" className="sidebar-link ml-4">Projects</a></li>
  <li><a href="#blog" className="sidebar-link ml-4">Blog</a></li>
  <li><a href="#timeline" className="sidebar-link ml-4">Timeline</a></li>
</ul>

      </div>

      <div className="sidebar-footer mt-6 text-sm">
        <div className="flex items-center space-x-2 mb-4">
          <FaPhone className="text-white" />
          <a href="tel:+918580715830" className="hover:underline">+91 8580715830</a>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <FaEnvelope className="text-white" />
          <a href="mailto:ishai5227@gmail.com" className="hover:underline">ishai5227@gmail.com</a>
        </div>

        {/* Social Media Icons in a Single Row */}
        <div className="flex justify-center mb-8">
          <span>Follow me on: </span>
          <div className="social-icons flex gap-4">
            <a href="https://your-facebook-url.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://your-twitter-url.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://your-instagram-url.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://your-linkedin-url.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>

        <p className="text-center mt-8">&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </nav>
  );
}

export default Sidebar;
