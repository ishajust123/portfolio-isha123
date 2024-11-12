import React from 'react';

const projects = [
  {
    title: 'Power BI Project',
    description: 'Store data analysis',
    link: 'https://drive.google.com/file/d/1MaJ4mmChr0sfxkZvo8sCgH4Rv0dzTMfn/view',
  },
  {
    title: 'Machine Learning Project',
    description: 'Breast cancer detection model',
    link: 'https://colab.research.google.com/drive/1rg_ZfOy4LU4tpJa_nJcPHIDEXvZcuiKm',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="p-8"
      style={{
        minHeight: '100vh',
        backgroundColor: '#E0BBE4', // Pastel purple background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '0', // Remove margin from top
      }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600">
            Below are some of the projects I've worked on, showcasing my skills in data analysis, web development, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-2 text-gray-700">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-600 font-medium"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
