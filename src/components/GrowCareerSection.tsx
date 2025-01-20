import Illustration from "../assets/illustration.png";
import ButtonHire from "../assets/buttonHire.png";
import JoinasFreelancer from "../assets/joinasfreelancer.png";

function GrowCareerSection() {
  return (
    <>
      <div className=" bg-gray-100 p-8">
        <div className="container flex flex-col md:flex-row items-start justify-between space-x-8">
          {/* Left Content Section */}
          <div className="w-full md:w-1/2 space-y-6 pr-0 md:pr-48	">
            {/* Main Heading and Paragraph */}
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-black">
                Grow your Business & your Career
              </h1>
              <p className="text-lg text-gray-600 mt-4">
                Find great talent. Build your business. Take your career to the
                next level. Finance experts, product managers, and project
                managers in the world. Check any pro's work samples, client
                reviews.
              </p>
            </div>

            {/* Two Separate Sections: Hire Top Talent & Join as a Freelancer */}
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
              {/* Hire Top Talent Section */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-black">
                  Hire top talent
                </h2>
                <p className="text-gray-600 mt-2">
                  Find great talent. Build your business. Finance experts,
                  product managers, and project managers in the world.
                </p>
                <button>
                  <img
                    src={ButtonHire}
                    alt="Button"
                    className="w-22 h-12 mr-2 mt-2"
                  />
                </button>
              </div>

              {/* Join as a Freelancer Section */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-black">
                  Join as a Freelancer
                </h2>
                <p className="text-gray-600 mt-2">
                  Find great talent. Build your business. Finance experts,
                  product managers, and project managers in the world.
                </p>
                <button>
                  <img
                    src={JoinasFreelancer}
                    alt="Button"
                    className="w-22 h-12 mr-2 mt-2"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right Illustration Section */}
          <div className="w-full p-8 md:p-0 md:w-1/2 mt-10 md:mt-0">
            <img
              src={Illustration}
              alt="Grow your Business Illustration"
              className="w-4/6 h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GrowCareerSection;
