import { useEffect, useState } from "react";
import { CiSquareChevRight, CiSquareChevLeft } from "react-icons/ci";
import PropTypes from "prop-types";
import { useLenis } from "@studio-freight/react-lenis";

const Pagination = ({ pagesCount, currPage, setCurrPage }) => {
  const lenis = useLenis(() => {});

  const [pagesArr, setPagesArr] = useState([]);

  const handlePrevPage = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
      lenis.scrollTo("#allGames");
    }
  };

  const handleNextPage = () => {
    if (currPage < pagesArr[pagesArr.length - 1]) {
      setCurrPage(currPage + 1);
      lenis.scrollTo("#allGames");
    }
  };

  const handlePageNumClick = (e) => {
    setCurrPage(+e.target.innerText);
    lenis.scrollTo("#allGames");
  };

  useEffect(() => {
    let temp = [];
    for (let x = 1; x <= pagesCount; x++) {
      temp.push(x);
    }
    setPagesArr(temp);
  }, [pagesCount]);

  return (
    <div className="pagination-container text-white text-3xl flex">
      <CiSquareChevLeft
        className="arrow-left cursor-pointer"
        onClick={handlePrevPage}
      />
      <div className="pages-nums flex items-center">
        {pagesArr?.map((p) => (
          <p
            onClick={handlePageNumClick}
            className={`page text-lg mx-2 cursor-pointer ${
              currPage === p && "font-bold !text-2xl"
            }`}
            key={p}
          >
            {p}
          </p>
        ))}
      </div>
      <CiSquareChevRight
        className="arrow-right cursor-pointer"
        onClick={handleNextPage}
      />
    </div>
  );
};

Pagination.propTypes = {
  pagesCount: PropTypes.number,
  currPage: PropTypes.number,
  setCurrPage: PropTypes.func,
};

export default Pagination;
