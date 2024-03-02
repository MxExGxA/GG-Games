import ReactPlayer from "react-player";
import PropTypes from "prop-types";
const VideoPlayer = ({ videoId, xClassName, width, height }) => {
  return (
    <div className={xClassName}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        volume={100}
        playing={false}
        controls={true}
        width={width}
        height={height}
      />
    </div>
  );
};

VideoPlayer.propTypes = {
  videoId: PropTypes.string,
  xClassName: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
export default VideoPlayer;
