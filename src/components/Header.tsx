import logo from "../assets/logo-image.png";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2">
      <div className="px-8 xl:mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Logo and Toggle Button */}
        <div className="flex justify-between w-full lg:w-auto items-center">
          <img src={logo} alt="Jobless Logo" className="h-10 w-auto" />
          <button
            className="block lg:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Large Screens */}
        <div className={`hidden lg:flex w-full lg:w-auto`}>
          <nav className="flex flex-col lg:flex-row space-x-4">
            <a href="#" className="text-white no-underline">
              Find Talent
            </a>
            <a href="#" className="text-white no-underline">
              Find Job/Project
            </a>
            <a href="#" className="text-white no-underline">
              We are jobless
            </a>
            <a href="#" className="text-white no-underline">
              Refer Friends
            </a>
          </nav>
        </div>

        {/* Call to Action Buttons for Large Screens */}
        <div className="hidden lg:flex justify-between items-center space-x-4">
          <a href="#" className="text-white no-underline text-sm">
            Apply as a Freelancer
          </a>
          <a
            href="#"
            className="px-4 py-2 text-green-500 rounded-md no-underline bg-transparent border-green-400 border rounded-full"
          >
            Hire Talent
          </a>
          <a href="#" className="text-white no-underline">
            Log in
          </a>
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 transform transition-transform lg:hidden">
          <div className="p-6 flex flex-col space-y-4">
            <button
              className="self-end text-white focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nav className="flex flex-col space-y-4 text-white">
              <a href="#" className="text-white no-underline">
                Find Talent
              </a>
              <a href="#" className="text-white no-underline">
                Find Job/Project
              </a>
              <a href="#" className="text-white no-underline">
                We are jobless
              </a>
              <a href="#" className="text-white no-underline">
                Refer Friends
              </a>
            </nav>

            <div className="mt-6 flex flex-col space-y-4">
              <a href="#" className="text-white no-underline">
                Apply as a Freelancer
              </a>
              <a href="#" className="text-white no-underline">
                Hire Talent
              </a>
              <a href="#" className="text-white no-underline">
                Log in
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
