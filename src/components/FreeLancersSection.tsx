import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";

function FreeLancersSection() {
  const [activeTab, setActiveTab] = useState("developers");

  // Sample images for the slider
  const developers = [
    {
      name: "Robert Fox",
      rating: "4.9/5",
      skills: ["IOS Development", "AR", "iOS", "C++"],
      imgSrc: image1,
      profile: profile1,
      price: "$ 0.01/hr",
      desc: "Mobile app developer for android and ios app development",
    },
    {
      name: "Zakir Hossen",
      rating: "4.9/5",
      skills: ["IOS Development", "AR", "iOS", "C++"],
      imgSrc: image2,
      profile: profile2,
      desc: "Mobile app developer for android and ios app development",
      price: "$ 0.01/hr",
    },
    {
      name: "Floyd Miles",
      rating: "4.9/5",
      skills: ["IOS Development", "AR", "iOS", "C++"],
      imgSrc: image3,
      profile: profile3,
      desc: "Mobile app developer for android and ios app development",
      price: "$ 0.01/hr",
    },
  ];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-900 py-12">
      <div className="container ">
        {/* Tabs */}
        <div className="flex justify-start mb-4 border-b border-gray-700">
          <button
            className={`mr-6 px-4 py-2 text-lg font-semibold ${
              activeTab === "developers"
                ? "text-white border-b-2 border-green-500"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("developers")}
          >
            Talent Freelancers
          </button>
          <button
            className={`px-4 py-2 text-lg font-semibold  ${
              activeTab === "empty"
                ? "text-white border-b-2 border-green-500 border-l-1 border-gray-700"
                : "text-gray-400 border-gray-700 border-l-2"
            }`}
            onClick={() => setActiveTab("empty")}
          >
            Job / Projects
          </button>
        </div>

        {/* Conditional rendering based on active tab */}
        {activeTab === "developers" ? (
          <Slider {...settings} className="mx-8">
            {developers.map((dev, index) => (
              <div key={index} className="p-2">
                <div className="bg-white rounded-lg shadow-lg max-w-xs">
                  {/* Background Image Section */}
                  <div className="relative">
                    <img
                      src={dev.imgSrc} // Placeholder for background image
                      alt="background"
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-2 mt-4">
                    <div className="flex flex-row justify-between items-center ">
                      <img
                        className="w-16 h-16 rounded-full border-4 border-white"
                        src={dev.profile}
                        alt={`${dev.name} profile`}
                      />
                      <div className="text-lg font-semibold">{dev.name}</div>
                      <div className="text-sm text-black flex ml-4 mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                            clipRule="evenodd"
                          />
                        </svg>

                        {dev.rating}
                      </div>
                    </div>

                    <div className="mt-4 pb-1.5 border-b-2">
                      <p className="font-medium text-gray-600">{dev.desc}</p>
                      <div className="flex flex-wrap mt-2">
                        {dev.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-200 text-gray-700 rounded-md px-3 py-1 mr-2 mb-2"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 p-2 flex justify-between items-center">
                      <button className="bg-white text-black  outline outline-gray-200 px-4 py-2 rounded-lg">
                        View Profile
                      </button>
                      <span className="text-gray-700 font-semibold">
                        {dev.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-gray-500 text-center">
            This tab is currently empty.
          </div>
        )}
      </div>
    </div>
  );
}
export default FreeLancersSection;
