import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video md:pt-[15%] pt-[38%] md:px-24 px-0 pl-5 absolute text-white bg-gradient-to-r from-black">
      <h1 className="md:text-6xl text-2xl font-bold">{title}</h1>
      <p className="md:inline-block hidden  py-6 text-lg w-1/4">
        {description}
      </p>
      <div className="buttons flex items-center md-pt-0 pt-3">
        <button className="md:px-3 md:py-1 px-2   bg-white text-black  rounded-md text-lg md:font-bold font-normal hover:bg-opacity-75">
          <FaPlay className="inline mx-2" />
          Play
        </button>
        <button className="ml-2 px-4 py-1 min-h-[37.6px] bg-gray-400 bg-opacity-50 text-white rounded-md  font-medium  hover:bg-opacity-75 md:inline-block hidden">
          <MdOutlineInfo className="inline mr-2  md:w-6 md:h-6 w-3 h-3" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
