import PropTypes from "prop-types";
import noImage from "../../assets/images/no_image.png";
import Platforms from "../platforms/Platforms";

const GameInfoHeader = ({ data }) => {
  return (
    <div className="game-info-header flex items-center max-lg:flex-col max-lg:items-start ">
      <img
        width={246}
        className="game-header-cover rounded-lg min-w-72"
        src={
          data?.cover
            ? data.cover.url.replace("t_thumb", "t_cover_big")
            : noImage
        }
        alt="game-cover"
      />
      <div className="game-header-info ml-5 max-lg:ml-0 max-lg:my-5">
        <Platforms platformsData={data?.platforms} className={"flex mt-1"} />
        <h1 className="game-name font-bold text-5xl py-3">{data?.name}</h1>

        <p className="game-studio text-gray-400">
          {
            data?.involved_companies?.find(
              (company) => company.developer === true
            )?.company.name
          }
        </p>

        <p className="game-date font-medium">
          {new Date(data?.created_at * 1000).getFullYear().toString()}
        </p>
      </div>
    </div>
  );
};

GameInfoHeader.propTypes = {
  data: PropTypes.object,
};

export default GameInfoHeader;
