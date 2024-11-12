import React from 'react';

const skills = [
  { name: 'Data Analysis', level: 90 },
  { name: 'Web Development', level: 85 },
  { name: 'Machine Learning', level: 90 },
  { name: 'Data Visualization', level: 75 },
  { name: 'Python', level: 90 },
  { name: 'SQL', level: 85 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="p-8"
      style={{
        backgroundColor: '#D3E4CD', // Light pastel green
        minHeight: '100vh',
      }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <p className="text-lg text-gray-600">
            A combination of expertise in data analysis, development, and more!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold text-gray-700">{skill.name}</h3>
                <span className="text-gray-500">{skill.level}%</span>
              </div>

              {/* Skill Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
