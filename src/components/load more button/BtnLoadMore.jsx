import PropTypes from "prop-types";
import { motion } from "framer-motion";
import BtnLoading from "./BtnLoading";

const BtnLoadMore = ({ onClick, btnLoading, disabled }) => {
  const variants = {
    initial: { opacity: 1 },
    animate: { opacity: 0.7 },
  };

  return (
    <>
      {!btnLoading ? (
        <motion.div
          variants={variants}
          onClick={onClick}
          initial="initial"
          whileTap={"animate"}
          className={`loadmore-container ${
            disabled ? "hidden" : ""
          } relative border-[2px] text-lg text-white py-4 px-10 rounded-md overflow-hidden cursor-pointer  hover:bg-white hover:text-black transition-all`}
        >
          Load More
        </motion.div>
      ) : (
        <BtnLoading color={"white"} />
      )}
    </>
  );
};

BtnLoadMore.propTypes = {
  onClick: PropTypes.func,
  btnLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};
export default BtnLoadMore;
