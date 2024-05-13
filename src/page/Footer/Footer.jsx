import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left">
          <h2 className="text-lg font-semibold mb-2">About</h2>
          <p className="text-sm">Your about content goes here.</p>
        </div>
        <div className="text-right">
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p className="text-sm">Your contact information goes here.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
