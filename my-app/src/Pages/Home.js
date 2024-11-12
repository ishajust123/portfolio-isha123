import React from 'react';
// import 'animate.css'; // Ensure you have animate.css installed or imported for animations

const Home = () => {
  // Define the scrollToAbout function
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="js-fullheight"
      style={{
        height: '100vh',
        backgroundColor: '#B0C4DE', // Set background color to sky blue using hex code
        position: 'relative',
      }}
    >
      <div className="container-fluid h-full flex items-center justify-center flex-col">
        <div className="text-center text-black z-10 mb-6">
          {/* New Welcome Message */}
          <h2 className="text-3xl font-semibold mb-4 animate__animated animate__fadeIn">Welcome to My Portfolio</h2>
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInDown">Hi! I'm Isha</h1>
          <p className="text-2xl mb-6 animate__animated animate__fadeInUp">Data Analyst</p>
          <a
            href="#about"
            className="btn btn-primary btn-lg"
            onClick={scrollToAbout}
            style={{ textDecoration: 'none' }}
          >
            Learn More About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
