import { useSelector } from "react-redux";
import FilterDropDown from "../filter dropdown/FilterDropDown";
import SectionTitle from "../section Title/SectionTitle";
import { FaGamepad } from "react-icons/fa";
import { useEffect, useState } from "react";
import { filterBuilder } from "../../utils/apiQueries";
import { apiRequest } from "../../utils/apiRequest";
import GameCard from "../game card/GameCard";
import Loading from "../loading/Loading";
import Pagination from "../pagination/Pagination";
import { Helmet } from "react-helmet";

const AllGames = () => {
  const filter = useSelector((state) => state.filter);
  const { years, rates } = useSelector((state) => state.rangeFilter);
  const [allGames, setAllGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagesCount, setPagesCount] = useState(0);
  const [currPage, setCurrPage] = useState(1);

  const apiRes = async () => {
    const config = {
      method: "post",
      path: "games",
      data: filterBuilder(filter, years, rates, 500),
    };
    const res = await apiRequest(config);
    return res;
  };

  useEffect(() => {
    setPagesCount(Math.ceil(allGames.length / 50));
  }, [allGames]);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(true);
      apiRes()
        .then((res) => setAllGames(res))
        .finally(() => setLoading(false));

      setCurrPage(1);
    }, 1000);

    return () => {
      clearTimeout(t);
    };
  }, [filter, years, rates]);

  return (
    <section
      id="allGames"
      className="all-games-section bg-[url('/bg_blur.png');] bg-no-repeat bg-cover bg-center w-full flex justify-center"
    >
      <div className="all-games-container min-h-lvh flex flex-col items-center w-3/4 py-10 pt-15 relative">
        <SectionTitle
          title={"All Games"}
          icon={
            <FaGamepad className="text-red-600 text-[13rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80" />
          }
        />
        <FilterDropDown />
        <div className="wrapper w-full flex flex-wrap justify-between max-md:justify-center">
          {allGames?.map((game, index) => {
            if (currPage * 50 >= index + 1 && (currPage - 1) * 50 < index + 1) {
              return <GameCard key={index} gameData={game} />;
            }
          })}
          {loading && <Loading />}
        </div>
        {pagesCount > 1 && (
          <Pagination
            pagesCount={pagesCount}
            currPage={currPage}
            setCurrPage={setCurrPage}
          />
        )}
      </div>
      <Helmet>
        <title>GG | All Games</title>
        <meta name="description" content="All Games Page" />
      </Helmet>
    </section>
  );
};

export default AllGames;
