import MusicAudio from "../assets/MusicAudio.svg";
import Architecture from "../assets/Architecture.png";
import VideoAnimation from "../assets/VideoAnimation.png";
import FinanceAccounting from "../assets/FinanceAccounting.png";
import ProgrammingTech from "../assets/ProgrammingTech.png";
import WritingTranslation from "../assets/WritingTranslation.png";
import DigitalMarketing from "../assets/DigitalMarketing.svg";
import DesignCreative from "../assets/DesignCreative.svg";
import Development from "../assets/Development.svg";
import Pattern3 from "../assets/pattern3.png";

function Categories() {
  return (
    <>
      <div className="p-8 sm:p-16 md:p-24 lg:p-32 bg-gray-900 relative overflow-hidden">
        {/* Heading */}
        <div className="border-b border-gray-700 pb-12">
          <h2 className="text-3xl font-bold text-white text-left">
            Get work done in different categories
          </h2>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center pt-12">
          {/* Icon Card 1 */}
          <div className="text-left">
            <img
              src={Development}
              alt="Development & IT"
              className="mx-auto mb-4"
            />
            <p className="text-white">Development & IT</p>
          </div>

          {/* Icon Card 2 */}
          <div className="text-left">
            <img
              src={DesignCreative}
              alt="Design & Creative"
              className="mx-auto mb-4"
            />
            <p className="text-white">Design & Creative</p>
          </div>

          {/* Icon Card 3 */}
          <div className="text-left">
            <img
              src={DigitalMarketing}
              alt="Digital Marketing"
              className="mx-auto mb-4"
            />
            <p className="text-green-400">Digital Marketing</p>
          </div>

          {/* Icon Card 4 */}
          <div className="text-left">
            <img
              src={WritingTranslation}
              alt="Writing & Translation"
              className="mx-auto mb-4"
            />
            <p className="text-white">Writing & Translation</p>
          </div>

          {/* Icon Card 5 */}
          <div className="text-left">
            <img
              src={ProgrammingTech}
              alt="Programming & Tech"
              className="mx-auto mb-4"
            />
            <p className="text-white">Programming & Tech</p>
          </div>

          {/* Icon Card 6 */}
          <div className="text-left">
            <img
              src={FinanceAccounting}
              alt="Finance & Accounting"
              className="mx-auto mb-4"
            />
            <p className="text-white">Finance & Accounting</p>
          </div>

          {/* Icon Card 7 */}
          <div className="text-left">
            <img
              src={VideoAnimation}
              alt="Video & Animation"
              className="mx-auto mb-4"
            />
            <p className="text-white">Video & Animation</p>
          </div>

          {/* Icon Card 8 */}
          <div className="text-left">
            <img
              src={Architecture}
              alt="Architecture"
              className="mx-auto mb-4"
            />
            <p className="text-white">Architecture</p>
          </div>

          {/* Icon Card 9 */}
          <div className="text-left">
            <img
              src={MusicAudio}
              alt="Music & Audio"
              className="mx-auto mb-4"
            />
            <p className="text-white">Music & Audio</p>
          </div>
        </div>

        {/* Brush Stroke */}
        <div className="absolute -bottom-10 -right-10 w-40">
          <img src={Pattern3} alt="Brush Stroke" />
        </div>
      </div>
    </>
  );
}

export default Categories;
