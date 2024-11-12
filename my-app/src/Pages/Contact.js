import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCommentAlt } from 'react-icons/fa'; // Importing icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="contact"
      className="p-4"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFDAB9, #FFFACD)', // Gradient background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="container mx-auto h-full flex items-center justify-center">
        {/* Box for Contact Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
          <p className="text-lg mb-6 text-center">
            Feel free to reach out to me by filling in the form below!
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2" htmlFor="name">
                <FaUser className="text-gray-600 mr-2 inline" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all ease-in-out duration-300 shadow-md placeholder-gray-400"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2" htmlFor="email">
                <FaEnvelope className="text-gray-600 mr-2 inline" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all ease-in-out duration-300 shadow-md placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2" htmlFor="message">
                <FaCommentAlt className="text-gray-600 mr-2 inline" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all ease-in-out duration-300 shadow-md placeholder-gray-400"
                rows="4"
                placeholder="Enter your message"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full p-4 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
