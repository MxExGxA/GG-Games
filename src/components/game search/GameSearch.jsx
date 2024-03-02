import { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import PropTypes from "prop-types";
import { gameSearchQuery } from "../../utils/apiQueries";
import { apiRequest } from "../../utils/apiRequest";
import GameSearchLoading from "./GameSearchLoading";
import NoResults from "./NoResults";

const GameSearch = ({ searchVal, className, maxResults }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      if (searchVal.trim() !== "") {
        const apiRes = async () => {
          const config = {
            method: "post",
            path: "games",
            data: gameSearchQuery(searchVal),
          };
          setLoading(true);
          const res = await apiRequest(config);
          setSearchResult(res);
        };
        apiRes().finally(() => setLoading(false));
      }
    }, 1000);
    return () => clearTimeout(t);
  }, [searchVal]);

  return (
    <div className={className}>
      {!loading ? (
        searchResult[0] ? (
          searchResult.map((result, index) => {
            if (index + 1 <= maxResults) {
              return (
                <div key={index}>
                  <SearchCard data={result} />
                  <hr />
                </div>
              );
            }
          })
        ) : (
          <NoResults />
        )
      ) : (
        <GameSearchLoading />
      )}
    </div>
  );
};

GameSearch.propTypes = {
  searchResult: PropTypes.array,
  searchVal: PropTypes.string,
  className: PropTypes.string,
  maxResults: PropTypes.number,
};

export default GameSearch;
