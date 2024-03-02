import PropTypes from "prop-types";
import GameCard from "../game card/GameCard";

const SimilarGames = ({ similarGames }) => {
  return (
    <div className="similar-games-container pl-5 mt-5 relative max-lg:pl-0">
      <h2 className="similar-games-header text-2xl font-medium">
        SIMILAR GAMES
      </h2>
      <div className="similar-games-body flex flex-wrap justify-start -ml-2 max-sm:justify-center">
        {similarGames?.map((similar) => (
          <GameCard key={similar.id} gameData={similar} />
        ))}
      </div>
    </div>
  );
};

SimilarGames.propTypes = {
  similarGames: PropTypes.array,
};
export default SimilarGames;
