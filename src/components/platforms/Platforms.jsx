import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { BsNintendoSwitch } from "react-icons/bs";
import {
  FaAppStoreIos,
  FaApple,
  FaGooglePlay,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";

const Platforms = ({ platformsData, className }) => {
  const [platforms, setPlatforms] = useState([]);
  const platformsIcons = {
    nintendo: <BsNintendoSwitch />,
    android: <FaGooglePlay />,
    ios: <FaAppStoreIos />,
    linux: <FaLinux />,
    pc: <FaWindows />,
    mac: <FaApple />,
    xbox: <FaXbox />,
    playstation: <FaPlaystation />,
  };

  useEffect(() => {
    let temp = platformsData?.map((p) => p.name.split(" ")[0].toLowerCase());
    let unique = new Set(temp);
    temp = Array.from(unique);
    setPlatforms(temp);
  }, [platformsData]);

  return (
    <div className={`platforms ${className}`}>
      {platforms?.map((p, index) =>
        platformsIcons[p] ? (
          <div key={index} className="pr-1">
            {platformsIcons[p]}
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

Platforms.propTypes = {
  platformsData: PropTypes.array,
  className: PropTypes.string,
};
export default Platforms;
