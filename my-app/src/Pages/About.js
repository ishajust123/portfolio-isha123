import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="p-4"
      style={{
        height: '100vh',
        backgroundColor: '#ccffcc', // Light green background color
        position: 'relative',
      }}
    >
      <div className="container mx-auto h-full flex items-center justify-center">
        {/* Box for About Me Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            I am a passionate Data Analyst and Web Developer with a strong
            interest in transforming data into actionable insights. My journey in
            the tech world has equipped me with skills in data analysis, web
            development, and problem-solving.
          </p>

          <h3 className="text-2xl font-bold mb-2">My Philosophy</h3>
          <p className="mb-4">
            I believe in leveraging data to make informed decisions and improve processes. 
            My goal is to create solutions that not only meet business needs but also enhance user experience.
          </p>

          <h3 className="text-2xl font-bold mb-2">Interests</h3>
          <p className="mb-4">
            When I'm not coding, I enjoy exploring new technologies, hiking, and participating in community-driven projects.
          </p>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Tools I Use</h3>
            <ul className="list-none space-y-1"> {/* Added space between list items */}
              <li>Python</li>
              <li>Power BI</li>
              <li>Google Colab</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          {/* Resume Download Button */}
          <div className="text-center mt-6">
            <a
              href="https://drive.google.com/file/d/1n_5I5Z2UHZQULULG1ibijIGJz0zszT0r/view?usp=drive_link" // Ensure this link is correct
              target="_blank"
              rel="noopener noreferrer"
              className="btn" // Use the btn class defined in your CSS
              download // Optional: If you want to directly download the file
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
