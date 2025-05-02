import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Navbar() {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.inOut" }
    );
  }, []);

  return (
    <div className="p-2 pt-6 ">
      <div className="w-full text-center h-80 bg-gradient-to-b from-blue-900 to-blue-400">
        <h1
          ref={headingRef}
          className="mt-5 text-5xl font-bold pt-7"
        >
          Student Internships Hub!
        </h1>
        <p className="pt-6">
          Discover internship opportunities and post openings to connect students with real-world experience
        </p>
        <div className="pt-10 md:pt-20 sm:pt-16">
          <button className="px-5 py-2 mx-3 text-xl font-semibold text-blue-600 transition duration-200 bg-white rounded-md font-normalshadow hover:bg-gray-200 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
