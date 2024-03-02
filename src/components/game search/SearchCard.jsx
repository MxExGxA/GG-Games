import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import noImage from "../../assets/images/no_image.png";

const SearchCard = ({ data }) => {
  return (
    <Link
      target="_parent"
      to={`game/${data.id}`}
      className="search-card-container flex items-center p-2 hover:bg-gray-200 cursor-pointer transition-all duration-300"
    >
      {data && (
        <img
          className="search-game-image mr-5"
          width={60}
          src={data.cover ? data.cover.url : noImage}
        />
      )}
      <h3 className="search-game-title text-lg text-black line-clamp-2">
        {data?.name}
      </h3>
    </Link>
  );
};

SearchCard.propTypes = {
  data: PropTypes.object,
};

export default SearchCard;
