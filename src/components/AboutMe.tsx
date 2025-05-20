import React from 'react';

type GitHubUser = {
  avatar_url?: string;
  html_url?: string;
};

interface AboutMeProps {
  user: GitHubUser | null;
}

const AboutMe: React.FC<AboutMeProps> = ({ user }) => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Side Content */}
        <div className="md:w-3/5 md:pr-12">
          <div className="inline-block mb-4 px-4 py-1 bg-purple-600 bg-opacity-10 rounded-full">
            <p className="text-purple-600 font-medium">SOFTWARE ENGINEER</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hello, I'm <br />
            <span>Gihani Wijekoon </span>
          </h1>
          <p className="text-gray-600 mb-8">
            I'm an undergraduate in Information Technology at the University of Moratuwa, passionate about solving real-world problems through 
            innovative software solutions. I enjoy learning new skills, exploring emerging technologies, and building practical applications 
            that make a positive impact. I'm seeking opportunities to grow as a developer and contribute to meaningful work.
          </p>
          
          <a 
            href={user?.html_url || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white font-medium px-6 py-3 rounded-md hover:bg-purple-700 transition"
          >
            GitHub Repo
          </a>
        </div>
        
        {/* Right Side - Profile Image */}
        <div className="md:w-2/5 mt-8 md:mt-0">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img 
              src={user?.avatar_url || "/api/placeholder/400/400"} 
              alt="Profile" 
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;