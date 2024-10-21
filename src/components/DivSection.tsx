import LearnMore from "../assets/active.png";

function DivSection() {
  return (
    <>
      <div className="relative bg-[#111827] text-white py-16 overflow-hidden">
        {/* Left Green Brush Stroke */}
        <div className="absolute inset-y-0 -left-10 lg:w-60 w-36 bg-[url('assets/pattern1.png')] bg-no-repeat bg-contain"></div>

        {/* Right Green Brush Stroke */}
        <div className="absolute inset-y-0 -right-10 lg:w-60 w-36 top-2/3 bg-[url('assets/pattern2.png')] bg-no-repeat bg-contain"></div>

        {/*<!-- First Section: Grid of Four Blocks --> */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-0 mb-16">
          {/*<!-- Each Block --> */}
          <div className="bg-gray-800 rounded-tl-lg p-16">
            <div className="flex flex-col space-y-6">
              {/*<!-- Icon --> */}
              <div className="">
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0625 8.41211H35.9375L46.875 20.9121L25 44.3496L3.125 20.9121L14.0625 8.41211Z"
                    stroke="url(#paint0_linear_101_1368)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M34.5882 20.9121L25.0001 44.3496L15.412 20.9121L25.0001 8.41211L34.5882 20.9121Z"
                    stroke="url(#paint1_linear_101_1368)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.125 20.9121H46.875"
                    stroke="url(#paint2_linear_101_1368)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_101_1368"
                      x1="45.6536"
                      y1="26.3809"
                      x2="5.15361"
                      y2="27.4978"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_101_1368"
                      x1="34.0528"
                      y1="26.3809"
                      x2="16.2902"
                      y2="26.5956"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_101_1368"
                      x1="45.6536"
                      y1="21.4121"
                      x2="25.2071"
                      y2="41.6767"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/*<!-- Text Content --> */}
              <div>
                <h3 className="text-3xl font-bold">World-Class Talent</h3>
                <p>
                  Find great talent. Build your business. Finance experts,
                  product managers, and project managers in the world.
                </p>
              </div>
            </div>
          </div>
          {/*<!-- Repeat for other blocks --> */}
          <div className="bg-gray-800 rounded-tr-lg p-16 border-b border-l border-gray-700">
            <div className="flex flex-col space-y-6">
              {/*<!-- Icon --> */}
              <div className="text-green-400">
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 33.4121V36.5371"
                    stroke="url(#paint0_linear_101_1383)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25 14.6621V17.7871"
                    stroke="url(#paint1_linear_101_1383)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25 44.3496C35.3553 44.3496 43.75 35.9549 43.75 25.5996C43.75 15.2443 35.3553 6.84961 25 6.84961C14.6447 6.84961 6.25 15.2443 6.25 25.5996C6.25 35.9549 14.6447 44.3496 25 44.3496Z"
                    stroke="url(#paint2_linear_101_1383)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.3125 33.4121H27.3438C28.3798 33.4121 29.3733 33.0006 30.1059 32.268C30.8384 31.5354 31.25 30.5419 31.25 29.5059C31.25 28.4699 30.8384 27.4763 30.1059 26.7437C29.3733 26.0112 28.3798 25.5996 27.3438 25.5996H22.6562C21.6202 25.5996 20.6267 25.1881 19.8941 24.4555C19.1616 23.7229 18.75 22.7294 18.75 21.6934C18.75 20.6574 19.1616 19.6638 19.8941 18.9312C20.6267 18.1987 21.6202 17.7871 22.6562 17.7871H29.6875"
                    stroke="url(#paint3_linear_101_1383)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_101_1383"
                      x1="25.9721"
                      y1="34.9746"
                      x2="25.0457"
                      y2="34.9813"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_101_1383"
                      x1="25.9721"
                      y1="16.2246"
                      x2="25.0457"
                      y2="16.2313"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_101_1383"
                      x1="42.703"
                      y1="25.5996"
                      x2="7.98023"
                      y2="26.3862"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_101_1383"
                      x1="30.901"
                      y1="25.5996"
                      x2="19.3246"
                      y2="25.8094"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/*<!-- Text Content --> */}
              <div>
                <h3 className="text-3xl font-bold">
                  Get Paid in USDC Instantly
                </h3>
                <p>
                  Once offer is accepted, founds will be locked in an escrow
                  account until completion.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-bl-lg p-16 border-t border-r border-gray-700">
            <div className="flex flex-col space-y-6">
              {/*<!-- Icon --> */}
              <div className="text-green-400">
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.625 39.6621C19.0768 39.6621 21.875 36.8639 21.875 33.4121C21.875 29.9603 19.0768 27.1621 15.625 27.1621C12.1732 27.1621 9.375 29.9603 9.375 33.4121C9.375 36.8639 12.1732 39.6621 15.625 39.6621Z"
                    stroke="url(#paint0_linear_101_1358)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.24951 44.3492C7.34124 42.8939 8.75676 41.7128 10.384 40.8992C12.0112 40.0857 13.8055 39.6622 15.6248 39.6621C17.4441 39.6621 19.2384 40.0855 20.8656 40.899C22.4929 41.7124 23.9085 42.8935 25.0003 44.3488"
                    stroke="url(#paint1_linear_101_1358)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.625 19.3496C19.0768 19.3496 21.875 16.5514 21.875 13.0996C21.875 9.64783 19.0768 6.84961 15.625 6.84961C12.1732 6.84961 9.375 9.64783 9.375 13.0996C9.375 16.5514 12.1732 19.3496 15.625 19.3496Z"
                    stroke="url(#paint2_linear_101_1358)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.24951 24.0367C7.34124 22.5814 8.75676 21.4003 10.384 20.5867C12.0112 19.7732 13.8055 19.3497 15.6248 19.3496C17.4441 19.3496 19.2384 19.773 20.8656 20.5865C22.4929 21.3999 23.9085 22.581 25.0003 24.0363"
                    stroke="url(#paint3_linear_101_1358)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M34.375 39.6621C37.8268 39.6621 40.625 36.8639 40.625 33.4121C40.625 29.9603 37.8268 27.1621 34.375 27.1621C30.9232 27.1621 28.125 29.9603 28.125 33.4121C28.125 36.8639 30.9232 39.6621 34.375 39.6621Z"
                    stroke="url(#paint4_linear_101_1358)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.9995 44.3492C26.0912 42.8939 27.5068 41.7128 29.134 40.8992C30.7612 40.0857 32.5555 39.6622 34.3748 39.6621C36.1941 39.6621 37.9884 40.0855 39.6156 40.899C41.2429 41.7124 42.6585 42.8935 43.7503 44.3488"
                    stroke="url(#paint5_linear_101_1358)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M34.375 19.3496C37.8268 19.3496 40.625 16.5514 40.625 13.0996C40.625 9.64783 37.8268 6.84961 34.375 6.84961C30.9232 6.84961 28.125 9.64783 28.125 13.0996C28.125 16.5514 30.9232 19.3496 34.375 19.3496Z"
                    stroke="url(#paint6_linear_101_1358)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.9995 24.0367C26.0912 22.5814 27.5068 21.4003 29.134 20.5867C30.7612 19.7732 32.5555 19.3497 34.3748 19.3496C36.1941 19.3496 37.9884 19.773 39.6156 20.5865C41.2429 21.3999 42.6585 22.581 43.7503 24.0363"
                    stroke="url(#paint7_linear_101_1358)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_101_1358"
                      x1="21.526"
                      y1="33.4121"
                      x2="9.95174"
                      y2="33.6743"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_101_1358"
                      x1="24.4768"
                      y1="42.0057"
                      x2="7.24726"
                      y2="43.5671"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_101_1358"
                      x1="21.526"
                      y1="13.0996"
                      x2="9.95174"
                      y2="13.3618"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_101_1358"
                      x1="24.4768"
                      y1="21.6932"
                      x2="7.24726"
                      y2="23.2546"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_101_1358"
                      x1="40.276"
                      y1="33.4121"
                      x2="28.7017"
                      y2="33.6743"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_101_1358"
                      x1="43.2268"
                      y1="42.0057"
                      x2="25.9973"
                      y2="43.5671"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_101_1358"
                      x1="40.276"
                      y1="13.0996"
                      x2="28.7017"
                      y2="13.3618"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint7_linear_101_1358"
                      x1="43.2268"
                      y1="21.6932"
                      x2="25.9973"
                      y2="23.2546"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/*<!-- Text Content --> */}
              <div>
                <h3 className="text-3xl font-bold">
                  Confidence back into Decentralised work space
                </h3>
                <p>
                  Find freelance in confidence using our ratings and review
                  system.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-br-lg p-16">
            <div className="flex flex-col space-y-6">
              {/*<!-- Icon --> */}
              <div className="text-green-400">
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.5 20.9121H29.6875V13.0996"
                    stroke="url(#paint0_linear_101_1373)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M40.625 9.97461L29.6875 20.9121"
                    stroke="url(#paint1_linear_101_1373)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 30.2871H20.3125V38.0996"
                    stroke="url(#paint2_linear_101_1373)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.375 41.2246L20.3125 30.2871"
                    stroke="url(#paint3_linear_101_1373)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.6875 38.0996V30.2871H37.5"
                    stroke="url(#paint4_linear_101_1373)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M40.625 41.2246L29.6875 30.2871"
                    stroke="url(#paint5_linear_101_1373)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.3125 13.0996V20.9121H12.5"
                    stroke="url(#paint6_linear_101_1373)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.375 9.97461L20.3125 20.9121"
                    stroke="url(#paint7_linear_101_1373)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_101_1373"
                      x1="37.2819"
                      y1="17.0059"
                      x2="30.048"
                      y2="17.1697"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_101_1373"
                      x1="40.3196"
                      y1="15.4434"
                      x2="30.1922"
                      y2="15.6728"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_101_1373"
                      x1="20.0944"
                      y1="34.1934"
                      x2="12.8605"
                      y2="34.3572"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_101_1373"
                      x1="20.0071"
                      y1="35.7559"
                      x2="9.87965"
                      y2="35.9853"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_101_1373"
                      x1="37.2819"
                      y1="34.1934"
                      x2="30.048"
                      y2="34.3572"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_101_1373"
                      x1="40.3196"
                      y1="35.7559"
                      x2="30.1922"
                      y2="35.9853"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_101_1373"
                      x1="20.0944"
                      y1="17.0059"
                      x2="12.8605"
                      y2="17.1697"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                    <linearGradient
                      id="paint7_linear_101_1373"
                      x1="20.0071"
                      y1="15.4434"
                      x2="9.87965"
                      y2="15.6728"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#91FFCA" />
                      <stop offset="0.490314" stopColor="#00FFD1" />
                      <stop offset="1" stopColor="#FFF96A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/*<!-- Text Content --> */}
              <div>
                <h3 className="text-3xl font-bold">
                  Stake your Jobless Tokens to open more opportunities
                </h3>
                <p>
                  Staking your Jobless tokens will allow you to apply to jobs
                  hours before your competitors does.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*<!-- Second Section: Text & Video --> */}
        <div className="container mx-auto grid  grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/*<!-- Left Div: Heading, Points, Button --> */}
          <div className="bg-gray-800 p-16 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFF96A] via-[#00FFD1] to-[#90FFCA]">
              Why businesses turn to Jobless?
            </h2>
            <p className="mb-4">
              Find great talent, build your business. Finance experts, product
              managers, and project managers in the world.
            </p>

            <div className="flex justify-between">
              <ul className="list-disc pl-5">
                <li>Ratings & Reviews</li>
                <li>Dispute Management</li>
              </ul>
              <ul className="list-disc pl-5">
                <li>Escrow System</li>
                <li>Booking Management</li>
              </ul>
            </div>

            <button>
              <img
                src={LearnMore}
                alt="Button"
                className="w-22 h-12 mr-2 mt-2"
              />{" "}
            </button>
          </div>

          {/*<!-- Right Div: Video --> */}
          <div className="relative rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-10">
              <iframe
                src="https://www.youtube.com/embed/SqcY0GlETPk"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DivSection;
