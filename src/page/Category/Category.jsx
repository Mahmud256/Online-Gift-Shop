import React from 'react';
import { FaPython, FaChartBar } from 'react-icons/fa';
// import { SiPandas, SiNumpy, SiMatplotlib, SiSeaborn } from 'react-icons/si';
// import { SiReact, SiTailwindcss, SiNodejs, SiJavascript } from 'react-icons/si';

const Category = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen flex flex-col items-center p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-white">My Skills & Projects</h1>
      </header>

      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto">
        {/* Data Analysis Section */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 m-4">
          <h2 className="text-2xl font-bold text-center mb-4">Data Analysis</h2>
          {/* <div className="flex flex-col items-center">
            <div className="text-center mb-4">
              <SiPandas className="text-6xl text-green-500" />
              <h3 className="text-xl font-semibold mt-2">Pandas</h3>
            </div>
            <div className="text-center mb-4">
              <SiNumpy className="text-6xl text-blue-500" />
              <h3 className="text-xl font-semibold mt-2">NumPy</h3>
            </div>
            <div className="text-center mb-4">
              <SiMatplotlib className="text-6xl text-purple-500" />
              <h3 className="text-xl font-semibold mt-2">Matplotlib</h3>
            </div>
            <div className="text-center mb-4">
              <SiSeaborn className="text-6xl text-teal-500" />
              <h3 className="text-xl font-semibold mt-2">Seaborn</h3>
            </div>
          </div> */}
        </div>

        {/* Web Development Section */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 m-4">
          <h2 className="text-2xl font-bold text-center mb-4">Web Development</h2>
          {/* <div className="flex flex-col items-center">
            <div className="text-center mb-4">
              <SiReact className="text-6xl text-cyan-500" />
              <h3 className="text-xl font-semibold mt-2">React</h3>
            </div>
            <div className="text-center mb-4">
              <SiTailwindcss className="text-6xl text-blue-400" />
              <h3 className="text-xl font-semibold mt-2">Tailwind CSS</h3>
            </div>
            <div className="text-center mb-4">
              <SiNodejs className="text-6xl text-green-500" />
              <h3 className="text-xl font-semibold mt-2">Node.js</h3>
            </div>
            <div className="text-center mb-4">
              <SiJavascript className="text-6xl text-yellow-500" />
              <h3 className="text-xl font-semibold mt-2">JavaScript</h3>
            </div>
          </div> */}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center mt-8">
        <p className="text-gray-700">Connect with me:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 hover:text-blue-800">
            LinkedIn
          </a>
          <a href="https://github.com/yourprofile" className="text-gray-800 hover:text-gray-900">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Category;
