import { FaArrowRight } from "react-icons/fa";
import GameCard from "../game card/GameCard";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CategoryRow = ({ categoryData }) => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate(`/allgames/${categoryData.name.split(" ")[0].toLowerCase()}`);
  };
  return (
    <div className="category-row w-full mt-10 ">
      <div className="row-header flex justify-between items-center">
        {categoryData && (
          <h2 className="title text-4xl text-white font-bold max-sm:text-xl">
            {categoryData.name}
          </h2>
        )}
        <div className="see-more flex items-center">
          <p className="text-blue-400 cursor-pointer" onClick={handleSeeMore}>
            See More
          </p>
          <FaArrowRight className="text-blue-400 ml-2" />
        </div>
      </div>
      <div className="game-cards relative flex justify-start clip-right mt-2 rounded-xl">
        {categoryData &&
          categoryData.result?.map((game) => (
            <GameCard key={game.name} gameData={game} />
          ))}
      </div>
    </div>
  );
};

CategoryRow.propTypes = {
  categoryData: PropTypes.object,
};

export default CategoryRow;
