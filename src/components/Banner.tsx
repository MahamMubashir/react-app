import image13 from "../assets/image13.png";

function Banner() {
  return (
    <>
      <div className="relative sm:h-[1100px] lg:h-[800px]">
        {/* Blurred Background Image */}
        <div className="absolute inset-52 right-0 bg-[url('/src/assets/blurimages.png')] bg-cover bg-right"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-8 md:px-20 lg:px-40">
          {/* Left Section - Text */}
          <div className="text-white max-w-lg mt-12 lg:mt-44">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
              Hire top freelancers in confidence using{" "}
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
