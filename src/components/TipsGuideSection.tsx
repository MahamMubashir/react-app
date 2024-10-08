import { useState } from "react";
import Image1 from "../assets/card1.jpg";
import Image2 from "../assets/card2.png";
import Image3 from "../assets/card3.png";
import Image4 from "../assets/card4.png";
import LearnMore from "../assets/learnmore.png";

function TipsGuideSection() {
  const [activeTab, setActiveTab] = useState("Data Guides");

  const guides = [
    {
      image: Image1,
      title: "What is data visualization (and why it is important)",
      date: "July 20, 2022",
      readTime: "7 min read",
    },
    {
      image: Image2,
      title: "What is data visualization (and why it is important)",
      date: "July 20, 2022",
      readTime: "7 min read",
    },
    {
      image: Image3,
      title: "What is data visualization (and why it is important)",
      date: "July 20, 2022",
      readTime: "7 min read",
    },
    {
      image: Image4,
      title: "What is data visualization (and why it is important)",
      date: "July 20, 2022",
      readTime: "7 min read",
    },
  ];
  return (
    <>
      <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-300 pb-12">
          Tips/Guide for Everyone
        </h2>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 font-semibold text-sm rounded ${
              activeTab === "Business Guides"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("Business Guides")}
          >
            Business Guides
          </button>
          <button
            className={`px-4 py-2 font-semibold text-sm rounded ${
              activeTab === "Data Guides"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("Data Guides")}
          >
            Data Guides
          </button>
          <button
            className={`px-4 py-2 font-semibold text-sm rounded ${
              activeTab === "Writing Guides"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("Writing Guides")}
          >
            Writing & Copywriting Guides
          </button>
          <button
            className={`px-4 py-2 font-semibold text-sm rounded ${
              activeTab === "Video Guides"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("Video Guides")}
          >
            Video & Animation Guides
          </button>
          <button className="px-4 py-2 font-semibold text-sm rounded bg-gray-200 text-gray-600">
            See more
          </button>
        </div>

        {/* Guides Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {guides.map((guide, index) => (
            <div key={index}>
              <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-40 object-cover border rounded-lg "
              />
              <div className="py-4">
                <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded">
                  Data Guide
                </span>
                <h3 className="font-bold text-lg mt-2">{guide.title}</h3>
                <p className="text-gray-500 text-sm mt-1">
                  • {guide.date} {"  "}• {guide.readTime}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-justify flex flex-row">
          <button>
            <img src={LearnMore} alt="Button" className="w-22 h-12 mr-2 mt-2" />{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default TipsGuideSection;
