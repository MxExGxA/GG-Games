import PropTypes from "prop-types";
import { motion } from "framer-motion";
import noImage from "../../assets/images/no_image.png";
import Platforms from "../platforms/Platforms";
import { Link } from "react-router-dom";

const GameCard = ({ gameData }) => {
  const resizedCover = gameData?.cover?.url?.replace("t_thumb", "t_cover_big");
  const variants = {
    initial: { scale: 1, opacity: 0 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.1,
        type: "spring",
        stiffness: 100,
        mass: 0.1,
        damping: 10,
      },
    },
    animate: { opacity: 1 },
    tap: { scale: 1.05, opacity: 0.7, transition: { duration: 0.2 } },
  };
  return (
    <Link to={`/game/${gameData.id}`}>
      <motion.div
        variants={variants}
        initial="initial"
        whileHover={"hover"}
        animate="animate"
        whileTap={"tap"}
        className="game-card relative h-80 w-60 my-5 m-2 flex flex-col flex-shrink-0 
        rounded-md overflow-hidden shadow-md cursor-pointer border border-stone-900"
        title={gameData.name}
      >
        {gameData && (
          <img
            className="game-cover h-3/4 w-full object-fill"
            src={resizedCover ? resizedCover : noImage}
            alt="game cover"
          />
        )}
        <div className="game-info relative flex flex-col text-white bg-black bg-opacity-70 justify-center px-5 h-1/4">
          {gameData && (
            <h3 className="game-title text-xl font-medium line-clamp-1">
              {gameData.name}
            </h3>
          )}
          <p className="game-studio text-sm text-gray-500 justify-self-end line-clamp-1">
            {gameData?.involved_companies?.map(
              (company) => company.developer && company.company.name
            )}
          </p>
          <Platforms
            platformsData={gameData?.platforms}
            className="absolute -top-3 left-0 bg-white text-black rounded-md rounded-tl-none rounded-bl-none  py-1 drop-shadow-md flex items-center *:mx-1"
          />
        </div>
      </motion.div>
    </Link>
  );
};

GameCard.propTypes = {
  gameData: PropTypes.object,
};

export default GameCard;
