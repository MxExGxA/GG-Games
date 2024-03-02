import PropTypes from "prop-types";
import WebsiteCard from "./WebsiteCard";

const GameWebsites = ({ websites }) => {
  return (
    <div className="websites-container p-5 max-lg:pl-0">
      <h2 className="websites-title text-2xl font-medium pb-2 ">WEBSITES</h2>
      <div className="websites-body flex items-center flex-wrap">
        {websites?.map((website, index) => (
          <WebsiteCard
            key={index}
            icon={website.category - 1}
            url={website.url}
          />
        ))}
      </div>
    </div>
  );
};

GameWebsites.propTypes = {
  websites: PropTypes.array,
};

export default GameWebsites;
