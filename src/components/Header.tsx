import logo from "../assets/logo-image.png";

function Header() {
  return (
    <>
      <div className=" p-4 ">
        <div className=" px-8 xl:mx-auto  flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <div>
              <img src={logo} alt="Jobless Logo" className="" />
            </div>
            <div>
              <nav className="ml-6 mt-2 hidden md:flex space-x-4">
                <a href="#" className="flex text-white no-underline ">
                  Find Talent
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-1 mt-1 size-4 stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </a>

                <a href="#" className="flex text-white no-underline ">
                  Find Job/Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-1 mt-1 size-4 stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </a>
                <a href="#" className="flex text-white no-underline ">
                  We are jobless
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-1 mt-1 size-4 stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </a>
                <a href="#" className="flex text-white no-underline ">
                  Refer Friends
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-1 mt-1 size-4 stroke-white"
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
          <div className="flex items-center space-x-4">
            <a href="#" className="flex text-white no-underline text-sm ">
              Apply as a Freelancer
            </a>
            <a
              href="#"
              className="px-4 py-2 flex text-green-500 rounded-md	 no-underline bg-transparent  border-green-400 border rounded-full"
            >
              Hire Talent
            </a>
            <a href="#" className="flex text-white no-underline ">
              Log in
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
