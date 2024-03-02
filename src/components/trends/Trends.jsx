import { useEffect, useState } from "react";
import GameCard from "../game card/GameCard";
import SectionTitle from "../section Title/SectionTitle";
import { GiFireBomb } from "react-icons/gi";
import { apiRequest } from "../../utils/apiRequest";
import { trendsQuery } from "../../utils/apiQueries";
import Loading from "../loading/Loading";
import BtnLoadMore from "../load more button/BtnLoadMore";
import { useDispatch } from "react-redux";
import { handleLoadState } from "../../redux/loadingSlice";

const Trends = () => {
  const [trendsData, setTrendsData] = useState([]);
  const [loadMore, setLoadMore] = useState(1);
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading) {
      dispatch(handleLoadState());
    }
  }, [loading]);

  useEffect(() => {
    const apiRes = async () => {
      const config = {
        method: "post",
        path: "games",
        data: trendsQuery(loadMore * 10),
      };
      setBtnLoading(true);
      const res = await apiRequest(config);
      setTrendsData(res);
    };
    apiRes().finally(() => {
      setLoading(false);
      setBtnLoading(false);
    });
  }, [loadMore]);
  return (
    <div
      id="trends"
      className="trends-container min-h-lvh flex flex-col items-center w-3/4 py-10 relative"
    >
      {!loading ? (
        <>
          <SectionTitle
            title={"Trends"}
            icon={
              <GiFireBomb className="text-red-700 text-[13rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  max-lg:scale-75" />
            }
          />
          <div className="wrapper flex flex-wrap justify-center w-full mt-10 mb-5 max-w-[1350px]">
            {trendsData &&
              trendsData?.map((trend) => (
                <GameCard key={trend.id} gameData={trend} />
              ))}
          </div>
          <BtnLoadMore
            onClick={() => setLoadMore((prev) => prev + 1)}
            btnLoading={btnLoading}
            disabled={loadMore >= 5 ? true : false}
          />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Trends;
