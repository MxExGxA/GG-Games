import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const GameAbout = ({ summary }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [toggleExpand, setToggleExpand] = useState(false);
  const sumRef = useRef();

  const handleSeeMore = () => {
    seeMore
      ? (sumRef.current.style.height = 60 + "px")
      : (sumRef.current.style.height = "unset");
    setSeeMore(!seeMore);
  };

  useEffect(() => {
    if (sumRef.current.clientHeight > 60) {
      sumRef.current.style.height = 60 + "px";
      setToggleExpand(true);
    } else {
      setToggleExpand(false);
    }

    return () => {
      if (sumRef.current) {
        sumRef.current.style.height = "unset";
      }
      setSeeMore(false);
    };
  }, [summary, sumRef]);

  return (
    <div className="about p-5 max-lg:pl-0">
      <h2 className="about-header text-2xl font-medium pb-3">ABOUT THE GAME</h2>
      <p ref={sumRef} className={`about-body leading-5 overflow-hidden`}>
        {summary}
      </p>
      {toggleExpand ? (
        !seeMore ? (
          <p
            className="see-more text-blue-500 cursor-pointer"
            onClick={handleSeeMore}
          >
            see more
          </p>
        ) : (
          <p
            className="see-less text-blue-500 cursor-pointer"
            onClick={handleSeeMore}
          >
            see less
          </p>
        )
      ) : (
        ""
      )}
    </div>
  );
};

GameAbout.propTypes = {
  summary: PropTypes.string,
};
export default GameAbout;
