import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import VideoPlayer from "../video/VideoPlayer";

const GameMedia = ({ screenshots, videos, loading }) => {
  const ref = useRef();
  const [translateVal, setTranslateVal] = useState(0);
  const [translateStep, setTranslateStep] = useState(0);
  const [translateLimit, setTranslateLimit] = useState(0);

  const handleRight = () => {
    if ((translateVal - translateStep) * -1 < translateLimit) {
      setTranslateVal(translateVal - translateStep);
    }
  };

  const handleLeft = () => {
    if (translateVal + translateStep < 0) {
      setTranslateVal(translateVal + translateStep);
    } else {
      setTranslateVal(0);
    }
  };

  if (!videos) {
    videos = [];
  }
  if (!screenshots) {
    screenshots = [];
  }

  useEffect(() => {
    new ResizeObserver(() => {
      if (ref.current) {
        setTranslateStep(ref.current.width + 20);
        setTranslateLimit(
          (screenshots.length + videos.length) * ref.current.width
        );
      }
    }).observe(ref.current);
  }, [screenshots, videos]);

  useEffect(() => {
    setTranslateVal(0);
  }, [loading]);

  return (
    <div className="media-container pl-5 mt-2 mb-10 w-full relative max-lg:pl-0">
      <h2 className="media-header text-2xl font-medium pb-3 ">GALLERY</h2>
      <div className="media-body *:select-none relative">
        <div
          className="screenshots w-full flex transition-all duration-300"
          style={{ translate: translateVal + "px" }}
        >
          {videos?.map((video) => (
            <VideoPlayer
              key={video.video_id}
              videoId={video.video_id}
              xClassName={"mr-5 !z-40"}
              width={ref?.current?.width}
            />
          ))}
          {screenshots?.map((screenshot) => (
            <img
              ref={ref}
              key={screenshot.id}
              src={screenshot.url.replace("t_thumb", "t_screenshot_med")}
              alt="game screenshot"
              className="mr-5 select-none"
            />
          ))}
        </div>
        <div
          className="media-controls absolute top-[50%] -translate-y-[50%] px-10
          w-full flex justify-between items-center *:text-5xl *:cursor-pointer *:drop-shadow-md pointer-events-none *:!z-50"
        >
          <FaChevronCircleLeft
            className="opacity-80 hover:opacity-100 
          !pointer-events-auto"
            onClick={handleLeft}
          />
          <FaChevronCircleRight
            className="opacity-80 hover:opacity-100 !pointer-events-auto"
            onClick={handleRight}
          />
        </div>
      </div>
    </div>
  );
};

GameMedia.propTypes = {
  screenshots: PropTypes.array,
  videos: PropTypes.array,
  loading: PropTypes.bool,
};

export default GameMedia;
