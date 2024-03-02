import { useAnimate, motion, stagger } from "framer-motion";
import { useEffect } from "react";
import PropTypes from "prop-types";

const BtnLoading = ({ color }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "div",
      { scale: 2, rotate: 180, borderRadius: "100%", opacity: 0.5 },
      { duration: 1, repeat: Infinity, delay: stagger(0.1) }
    );
  }, []);
  return (
    <motion.div
      ref={scope}
      className="btn-loading flex max-w-40 *:h-3 *:w-3 py-[18px] *:m-2 justify-between"
    >
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
    </motion.div>
  );
};

BtnLoading.propTypes = {
  color: PropTypes.string,
};
export default BtnLoading;
