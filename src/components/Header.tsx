import logo from "../assets/logo-image.png";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="p-4">
        <div className="px-8 xl:mx-auto flex flex-col lg:flex-row justify-between items-center ">
          {/* Logo and Navigation */}
          <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
            {/* Logo */}
            <div className="flex justify-between w-full lg:w-auto">
              <img src={logo} alt="Jobless Logo" className="h-10 w-auto" />
              <button
                className="lg:hidden text-white focus:outline-none"
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

            {/* Navigation Links */}
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } lg:flex mt-4 mb-4 lg:mt-0 lg:ml-6 w-full lg:w-auto`}
            >
              <nav className="flex flex-col lg:flex-row md:space-x-4 w-full md:w-auto">
                <a
                  href="#"
                  className="flex text-white no-underline items-center justify-between w-full md:w-auto"
                >
                  Find Talent
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-0.5 mt-1 size-4 stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex text-white no-underline items-center justify-between w-full md:w-auto"
                >
                  Find Job/Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-0.5 mt-1 size-4 stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex text-white no-underline items-center justify-between w-full md:w-auto"
                >
                  We are jobless
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-0.5 mt-1 size-4 stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex text-white no-underline items-center justify-between w-full md:w-auto"
                >
                  Refer Friends
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-0.5 mt-1 size-4 stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="flex flex-col sm:flex-row items-center  space-y-2 sm:space-y-0 sm:space-x-4 md:ml-2.5 md:mt-0 mt-4">
            <a href="#" className="flex text-white no-underline text-sm">
              Apply as a Freelancer
            </a>
            <a
              href="#"
              className="px-4 py-2 flex text-green-500 rounded-md no-underline bg-transparent border-green-400 border rounded-full"
            >
              Hire Talent
            </a>
            <a href="#" className="flex text-white no-underline">
              Log in
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
