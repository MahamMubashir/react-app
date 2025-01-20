import image13 from "../assets/image13.png";

function Banner() {
  return (
    <>
      <div className="relative sm:h-[1100px] lg:h-[800px]">
        {/* Blurred Background Image */}
        <div className="absolute inset-52 right-0 bg-[url('/src/assets/blurimages.png')] bg-cover bg-right"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-8 md:px-20 ">
          {/* Left Section - Text */}
          <div className="text-white max-w-lg mt-12 lg:mt-44">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 flex items-center flex-wrap">
              Hire top freelancers in confidence using
              <svg
                width="27"
                height="44"
                viewBox="0 0 27 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-2" // Adjust spacing around the SVG if needed
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 22.2157L13.028 29.9127V0.599609L0 22.2157ZM13.028 43.0379L0 24.6839L13.028 32.3809V43.0379ZM13.0281 32.3809L26.0612 24.6839L13.0281 43.0379V32.3809ZM13.0281 29.9127V0.599609L26.051 22.2157L13.0281 29.9127Z"
                  fill="url(#paint0_linear_101_1394)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_101_1394"
                    x1="25.3336"
                    y1="21.8188"
                    x2="1.19474"
                    y2="22.1546"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#91FFCA" />
                    <stop offset="0.490314" stopColor="#00FFD1" />
                    <stop offset="1" stopColor="#FFF96A" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-green-400">Blockchain</span> technology
            </h1>

            <p className="text-base md:text-lg mb-4 md:mb-6">
              Find great talent. Build your business. Take your career to the
              next level. Finance experts, product managers, and project
              managers in the world.
            </p>

            {/* Search and Button */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 md:mb-12">
              <div className="relative w-full sm:w-auto">
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 rounded-md bg-white text-black"
                  placeholder="Search Talent / Project / Job"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
              </div>
              <button className="w-full sm:w-auto bg-green-400 text-black px-4 py-2 rounded-md font-bold">
                Hire Talent
              </button>
            </div>

            <div className="cursor-pointer text-white flex flex-row items-center">
              Feature Freelancers
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 pl-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="mt-12 lg:mt-16">
            <img
              src={image13} // Assuming this is the correct path for the user image
              alt="Freelancer"
              className="rounded-lg shadow-lg w-full lg:w-[700px] h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
