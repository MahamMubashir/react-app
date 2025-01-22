import SocialIcons from "../assets/Socailicon.png";
import logo from "../assets/logo-image.png";
import FooterStroke from "../assets/pattern3.png";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white p-8 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto space-y-8 flex flex-col">
          {/* Top Section: First Row with 5 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-6 border-b border-gray-700">
            {/* First Column: Jobless Logo, Text, Social Icons, and Line */}
            <div className="flex flex-col justify-center sm:justify-start items-center sm:items-start">
              <img src={logo} alt="Jobless Logo" className="w-36" />
              <p className="mt-4 text-gray-400 ">
                Find great talent. Build your business. Take your career to the
                next level.
              </p>
              <div className="flex space-x-4 mt-4">
                <img src={SocialIcons} />
              </div>
              <p className="mt-4 text-sm text-gray-400">
                204 Reviews on{" "}
                <a href="#" className="text-green-400 underline">
                  Trustpilot
                </a>
              </p>
            </div>

            {/* Columns 2 to 5 */}
            <div>
              <h3 className="text-lg font-semibold">Find Talent</h3>
              <ul className="mt-4 space-y-2 text-gray-400 pl-0">
                <li>Design & Creative</li>
                <li>Developers</li>
                <li>Art Directors</li>
                <li>Sales & Marketing</li>
                <li>Writing & Translation</li>
                <li>Finance & Accounting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Find Job/Project</h3>
              <ul className="mt-4 space-y-2 text-gray-400 pl-0">
                <li>Design & Creative</li>
                <li>Developers</li>
                <li>Art Directors</li>
                <li>Sales & Marketing</li>
                <li>Writing & Translation</li>
                <li>Finance & Accounting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">About</h3>
              <ul className="mt-4 space-y-2 text-gray-400 pl-0">
                <li>We are Jobless</li>
                <li>Investor Relations</li>
                <li>Careers</li>
                <li>Our Impact</li>
                <li>Trust, Safety & Security</li>
                <li>Country Modern Slavery Statement</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Others</h3>
              <ul className="mt-4 space-y-2 text-gray-400 pl-0">
                <li>Contact Us</li>
                <li>Help & Support</li>
                <li>Terms of Service</li>
                <li>Success Stories</li>
                <li>Resources / Blog</li>
                <li>Community</li>
              </ul>
            </div>
          </div>

          {/* Middle Section: Second Row with 5 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-lg font-semibold">Development & IT</h3>
              <ul className="mt-4 space-y-2 text-gray-400 pl-0">
                <li>Java Developers</li>
                <li>PHP Developers</li>
                <li>JavaScript Developers</li>
                <li>iOS Developers</li>
                <li>QA Engineers</li>
                <li>Data Scientists</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Design & Creative</h3>
              <ul className="mt-4 space-y-2 text-gray-400 pl-0">
                <li>UX/UI Designers</li>
                <li>Graphic Designers</li>
                <li>Art Directors</li>
                <li>Web Designers</li>
                <li>Animators</li>
                <li>Video Editors</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Sales & Marketing</h3>
              <ul className="mt-4 space-y-2 text-gray-400 pl-0">
                <li>SEM Specialists</li>
                <li>SEO Specialists</li>
                <li>Social Media Managers</li>
                <li>Email Marketers</li>
                <li>Marketing Analysts</li>
                <li>Market Researchers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Writing & Translation</h3>
              <ul className="mt-4 space-y-2 text-gray-400 pl-0">
                <li>Java Developers</li>
                <li>PHP Developers</li>
                <li>JavaScript Developers</li>
                <li>iOS Developers</li>
                <li>QA Engineers</li>
                <li>Data Scientists</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Writing & Translation</h3>
              <ul className="mt-4 space-y-2 text-gray-400 pl-0">
                <li>Java Developers</li>
                <li>PHP Developers</li>
                <li>JavaScript Developers</li>
                <li>iOS Developers</li>
                <li>QA Engineers</li>
                <li>Data Scientists</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section: Third Row with 4 Columns and Stroke */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-lg font-semibold">Development & IT</h3>
              <ul className="mt-4 space-y-2 text-gray-400 pl-0">
                <li>Java Developers</li>
                <li>PHP Developers</li>
                <li>JavaScript Developers</li>
                <li>iOS Developers</li>
                <li>QA Engineers</li>
                <li>Data Scientists</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Design & Creative</h3>
              <ul className="mt-4 space-y-2 text-gray-400 pl-0">
                <li>UX/UI Designers</li>
                <li>Graphic Designers</li>
                <li>Art Directors</li>
                <li>Web Designers</li>
                <li>Animators</li>
                <li>Video Editors</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Sales & Marketing</h3>
              <ul className="mt-4 space-y-2 text-gray-400 pl-0">
                <li>SEM Specialists</li>
                <li>SEO Specialists</li>
                <li>Social Media Managers</li>
                <li>Email Marketers</li>
                <li>Marketing Analysts</li>
                <li>Market Researchers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Writing & Translation</h3>
              <ul className="mt-4 space-y-2 text-gray-400 pl-0">
                <li>Java Developers</li>
                <li>PHP Developers</li>
                <li>JavaScript Developers</li>
                <li>iOS Developers</li>
                <li>QA Engineers</li>
                <li>Data Scientists</li>
              </ul>
            </div>
            {/* Stroke Image in Place of 5th Column */}
            <div className="absolute -right-1 hidden xs:block">
              <img
                src={FooterStroke}
                alt="Footer Design Stroke"
                className="z-0 w-full md:w-40"
              />
            </div>
          </div>
          {/* Bottom Section: Copyright and Links */}
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-start items-center space-x-4">
            <p className="text-gray-400 text-sm">
              Copyright 2010 - 2022 We are Jobless, LLC
            </p>
            <p className="text-gray-400 text-sm">• Accessibility</p>
            <p className="text-gray-400 text-sm"> •Website Terms</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
