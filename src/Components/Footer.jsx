import React from 'react';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between w-full px-6 py-4 text-white bg-gray-800 sm:flex-row">
      <div className="text-sm">© 2025 InternshipFinder. All rights reserved.</div>
      <div className="flex space-x-4 text-sm">
        <a href="#" className="text-gray-300 hover:underline">Terms</a>
        <a href="#" className="text-gray-300 hover:underline">Privacy</a>
        <a href="#" className="text-gray-300 hover:underline">Help</a>
      </div>
    </footer>
  );
}
