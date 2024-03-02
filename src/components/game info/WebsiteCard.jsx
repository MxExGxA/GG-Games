import PropTypes from "prop-types";
import { TbWorld } from "react-icons/tb";
import { SiEpicgames, SiFandom, SiGogdotcom } from "react-icons/si";
import {
  FaAppStoreIos,
  FaDiscord,
  FaFacebook,
  FaGooglePlay,
  FaInstagram,
  FaItchIo,
  FaReddit,
  FaSteam,
  FaTwitch,
  FaWikipediaW,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const websitesIcons = [
  { name: "Official", icon: <TbWorld /> },
  { name: "Fandom", icon: <SiFandom /> },
  { name: "Wikipedia", icon: <FaWikipediaW /> },
  { name: "Facebook", icon: <FaFacebook /> },
  { name: "Twitter", icon: <FaSquareXTwitter /> },
  { name: "Twitch", icon: <FaTwitch /> },
  { name: "" },
  { name: "Instagram", icon: <FaInstagram /> },
  { name: "Youtube", icon: <FaYoutube /> },
  { name: "Iphone", icon: <FaAppStoreIos /> },
  { name: "Ipad", icon: <FaAppStoreIos /> },
  { name: "Android", icon: <FaGooglePlay /> },
  { name: "Steam", icon: <FaSteam /> },
  { name: "Reddit", icon: <FaReddit /> },
  { name: "Itch", icon: <FaItchIo /> },
  { name: "Epicgames", icon: <SiEpicgames /> },
  { name: "GOG", icon: <SiGogdotcom /> },
  { name: "Discord", icon: <FaDiscord /> },
];

const WebsiteCard = ({ icon, url }) => {
  return (
    <a
      href={url && url}
      target="_blank"
      className="website-card *:text-4xl flex items-center py-2 mr-5 hover:text-red-700"
    >
      {websitesIcons[icon].icon}
      <p className="website-name !text-lg ml-1">{websitesIcons[icon].name}</p>
    </a>
  );
};
WebsiteCard.propTypes = {
  icon: PropTypes.number,
  url: PropTypes.string,
};
export default WebsiteCard;
