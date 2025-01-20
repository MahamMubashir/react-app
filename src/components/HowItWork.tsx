import pattern from "../assets/pattern.png";
import { useState } from "react";

function HowItWork() {
  const [activeTab, setActiveTab] = useState("entrepreneur");
  return (
    <>
      <div className="p-8 container mx-auto ">
        {/* Tab Navigation */}
        <div className="border-b-2 border-gray-300 mb-8">
          <div className="flex space-x-8">
            <button
              className={`text-xl font-semibold ${
                activeTab === "entrepreneur" ? "text-black" : "text-gray-400"
              } border-b-4 pb-2 ${
                activeTab === "entrepreneur"
                  ? "border-black"
                  : "border-transparent"
              }`}
              onClick={() => setActiveTab("entrepreneur")}
            >
              For Entrepreneur
            </button>
            <button
              className={`text-xl font-semibold ${
                activeTab === "freelancer" ? "text-black" : "text-gray-400"
              } border-b-4 pb-2 ${
                activeTab === "freelancer"
                  ? "border-black"
                  : "border-transparent"
              }`}
              onClick={() => setActiveTab("freelancer")}
            >
              For Freelancers
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section (Text) */}
          {activeTab === "entrepreneur" && (
            <div className="p-11">
              <h3 className="text-lg font-semibold mb-4">How it works?</h3>
              <ul className="space-y-14 text-gray-500 border-l-4">
                <li>
                  <span className="font-bold text-xl">
                    1. Create your account
                  </span>
                </li>
                <li className="p-1.5 md:pr-40">
                  <span className="font-bold text-xl text-black">
                    2. Post a project or contest
                  </span>
                  <p className="text-gray-500">
                    Find great talent. Build your business. Finance experts,
                    product managers, and project managers in the world.
                  </p>
                </li>
                <li>
                  <span className="font-bold text-xl">
                    3. Choose the perfect freelancer
                  </span>
                </li>
                <li>
                  <span className="font-bold text-xl">
                    4. Pay into Escrow account
                  </span>
                </li>
                <li>
                  <span className="font-bold text-xl">
                    5. Receive your raw file
                  </span>
                </li>
              </ul>
            </div>
          )}

          {/* Right Section (Image) */}
          <div className="relative flex justify-center items-center bg-gray-100 lg:bg-white sm:bg-white md:bg-white rounded-lg">
            {/* <img
              src={Post}
              alt="Right Section Image"
              className="w-6/12 h-auto"
            /> */}
            <div className="z-0 absolute inset-y-0 -left-10 lg:w-60 w-36 bg-[url('assets/formPattern.png')] bg-no-repeat bg-contain"></div>

            {/* Right Green Brush Stroke */}
            <div className="absolute inset-y-0 -right-10 lg:w-60 w-36 top-2/3 bg-[url('assets/WaterMelon.png')] bg-no-repeat bg-contain"></div>

            <form className="bg-white rounded-lg p-11">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Post for project</h3>
                <span>Add your account information for withdrawal balance</span>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 ">
                  Project Category
                </label>
                <select
                  id="categories"
                  className="block w-full mt-1 p-2 border rounded-lg"
                >
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                  <option>Category 4</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Project Name
                </label>
                <input
                  type="text"
                  id="project-name"
                  className="block w-full mt-1 p-2 border rounded-lg"
                  placeholder="Enter Project Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Project Budget
                </label>
                <input
                  type="text"
                  id="project-budget"
                  className="block w-full mt-1 p-2 border rounded-lg"
                  placeholder="Ex: $8000"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Dateline
                </label>
                <select
                  id="datelines"
                  className="block w-full mt-1 p-2 border rounded-lg"
                  required
                >
                  <option>Dateline 1</option>
                  <option>Dateline 2</option>
                  <option>Dateline 3</option>
                  <option>Dateline 4</option>
                </select>
              </div>

              <button
                type="submit"
                className="block w-full mt-1 p-2 border bg-green-400 rounded-lg"
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWork;
