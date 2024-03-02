import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { useNavigate, useLocation } from "react-router-dom";
import GameSearch from "../game search/GameSearch";

const bubbleVars = {
  initial: { borderRadius: "50%" },
  fly: {
    x: [0, -10, 0],
    y: [0, 5, 0],
    transition: {
      repeat: Infinity,
      duration: 5,
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 1,
  },
};

const burgerVars = {
  middle: { x: 500, scale: 0 },
  rotateUp: { rotateZ: 45, y: -12 },
  rotateDown: { rotateZ: -45, y: 12 },
};

const listVars = {
  initial: { borderRadius: "50%", scale: 0 },
  expand: { scale: 100, transition: { duration: 0.5, ease: "easeInOut" } },
  unExpand: { scale: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const listItemVars = {
  initial: { x: 300, opacity: 0 },
  close: { x: 300, opacity: 0 },
  open: {
    x: 0,
    opacity: 1,
    transition: { delayChildren: 0.2, type: "spring", staggerChildren: 0.2 },
  },
};

const BubbleMenu = () => {
  const [open, setOpen] = useState(false);
  const [toggleResults, setToggleResults] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const searchRef = useRef();

  const lenis = useLenis(() => {});
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnFocus = () => {
    setToggleResults(true);
  };

  const handleOnBlur = () => {
    setToggleResults(false);
  };

  window.addEventListener("click", (e) => {
    if (e.target !== searchRef.current) {
      handleOnBlur();
    }
  });

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
  };

  const handleScroll = (elementId) => {
    lenis.scrollTo(elementId);
    setOpen(false);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`bubble-menu-container fixed top-0 right-0 h-lvh w-full !z-50 overflow-hidden hidden max-lg:block ${
        !open && "pointer-events-none"
      }`}
    >
      <motion.div
        onClick={handleMenu}
        variants={bubbleVars}
        initial="initial"
        animate={open ? "" : "fly"}
        whileHover={"hover"}
        whileTap={"tap"}
        className="bubble absolute top-5 right-5 w-[70px] h-[70px]
     bg-red-700 z-50 justify-center items-center cursor-pointer hidden max-lg:flex pointer-events-auto"
      >
        <div className="burger-menu flex flex-col *:w-10 *:h-1 *:bg-white *:my-1 *:rounded-md z-40">
          <motion.div
            variants={burgerVars}
            animate={open ? "rotateDown" : ""}
          ></motion.div>
          <motion.div
            variants={burgerVars}
            animate={open ? "middle" : ""}
          ></motion.div>
          <motion.div
            variants={burgerVars}
            animate={open ? "rotateUp" : ""}
          ></motion.div>
        </div>
      </motion.div>
      <motion.div
        variants={listItemVars}
        initial="initial"
        animate={open ? "open" : "close"}
        className="list-items relative h-full flex flex-col justify-center items-center text-white text-5xl *:p-10 !z-40 *:cursor-pointer"
      >
        <motion.div
          variants={listItemVars}
          className="search absolute left-0 top-12 w-[90%] max-sm:ml-0 max-sm:w-full ml-[5%] "
        >
          <input
            ref={searchRef}
            className="search-input w-full outline-none py-2 bg-transparent border-b-4 text-2xl"
            placeholder="Search"
            value={searchVal}
            onChange={handleSearch}
            onFocus={handleOnFocus}
          />
          {searchVal.trim() && toggleResults && (
            <GameSearch
              bubbleMenuToggle={setOpen}
              searchVal={searchVal}
              maxResults={5}
              className={
                "search-results-container absolute top-[110px] left-10 right-10 bg-white rounded overflow-hidden flex flex-col z-50"
              }
            />
          )}
        </motion.div>
        {location.pathname === "/" ? (
          <>
            <motion.div
              variants={listItemVars}
              onClick={() => handleScroll("#trends")}
            >
              Trends
            </motion.div>
            <motion.div
              variants={listItemVars}
              onClick={() => handleScroll("#categories")}
            >
              Categories
            </motion.div>
            <motion.div
              variants={listItemVars}
              onClick={() => handleNavigate("allgames")}
            >
              All Games
            </motion.div>
          </>
        ) : location.pathname === "/allgames" ? (
          <motion.div
            variants={listItemVars}
            onClick={() => handleNavigate("/")}
          >
            Home
          </motion.div>
        ) : (
          <>
            <motion.div
              variants={listItemVars}
              onClick={() => handleNavigate("/")}
            >
              Home
            </motion.div>
            <motion.div
              variants={listItemVars}
              onClick={() => handleNavigate("allgames")}
            >
              All Games
            </motion.div>
          </>
        )}
      </motion.div>
      <motion.div
        variants={listVars}
        initial={"initial"}
        animate={open ? "expand" : "unExpand"}
        className={`absolute flex flex-col w-10 h-10 bg-red-700 z-30 right-10 top-10`}
      ></motion.div>
    </div>
  );
};

export default BubbleMenu;
