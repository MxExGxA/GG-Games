import PropTypes from "prop-types";
import CarouselGameCard from "../carousel game card/CarouselGameCard";
import { motion } from "framer-motion";

const HeroCarousel = ({
  resumeAutoSwitching,
  pauseAutoSwitching,
  gameData,
  active,
}) => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: `${(active - 1) * -100}%`,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="carousel max-xl:w-[800px] max-lg:w-[400px] max-lg:h-fit max-sm:scale-90"
      onMouseEnter={() => pauseAutoSwitching()}
      onMouseLeave={() => resumeAutoSwitching()}
    >
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className={"flex items-center w-full h-full"}
      >
        {gameData &&
          gameData?.map((ele) => (
            <CarouselGameCard key={ele.id} gameData={ele} active={active} />
          ))}
      </motion.div>
    </div>
  );
};

HeroCarousel.propTypes = {
  active: PropTypes.number,
  pauseAutoSwitching: PropTypes.func,
  resumeAutoSwitching: PropTypes.func,
  gameData: PropTypes.array,
};

export default HeroCarousel;
