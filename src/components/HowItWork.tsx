import Post from "../assets/image16.png";
import { useState } from "react";

function HowItWork() {
  const [activeTab, setActiveTab] = useState("entrepreneur");
  return (
    <>
      <div className="p-8">
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
          <div className="flex justify-center items-center">
            <img
              src={Post}
              alt="Right Section Image"
              className="w-6/12 h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWork;
