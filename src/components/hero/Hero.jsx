import { useEffect, useRef, useState } from "react";
import CarouselSwitches from "../carousel switches/CarouselSwitches";
import HeroCarousel from "../hero carousel/HeroCarousel";
import { apiRequest } from "../../utils/apiRequest";
import { carouselQuery } from "../../utils/apiQueries";
import Loading from "../loading/Loading";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { handleLoadState } from "../../redux/loadingSlice";

const Hero = () => {
  const [active, setActive] = useState(1);
  const [reverse, setReverse] = useState(false);
  const [auto, setAuto] = useState(true);
  const [gameData, setGameData] = useState();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const intervalRef = useRef();
  const carouselArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleSwitchClick = (e) => {
    setActive(+e.target.attributes.getNamedItem("data-index").value);
    setAuto(false);
  };

  const pauseAutoSwitching = () => {
    setAuto(false);
    clearInterval(intervalRef.current);
  };

  const resumeAutoSwitching = () => {
    setAuto(true);
  };

  const autoSwitch = () => {
    if (!reverse) {
      setActive((prev) => prev + 1);
    } else {
      setActive((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (!loading) {
      dispatch(handleLoadState());
    }
  }, [loading]);

  useEffect(() => {
    if (auto) {
      if (active == carouselArray.length) {
        setReverse(true);
      } else if (active == 1) {
        setReverse(false);
      }
      intervalRef.current = setInterval(() => {
        autoSwitch();
      }, 3000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [active, reverse, auto]);

  useEffect(() => {
    const apiRes = async () => {
      const config = {
        method: "post",
        path: "games",
        data: carouselQuery(),
      };
      const res = await apiRequest(config);
      setGameData(res);
    };
    apiRes().finally(() => setLoading(false));
  }, []);

  return (
    <div className="hero-container flex flex-col justify-center h-lvh">
      <div className="flex items-center justify-center">
        {gameData && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hero-image"
            src={gameData[active - 1]?.cover.url}
            alt="game cover"
          />
        )}
        {!loading ? (
          gameData && (
            <HeroCarousel
              active={active}
              pauseAutoSwitching={pauseAutoSwitching}
              resumeAutoSwitching={resumeAutoSwitching}
              gameData={gameData}
            />
          )
        ) : (
          <Loading />
        )}
      </div>
      {!loading && (
        <CarouselSwitches
          arr={carouselArray}
          swClick={handleSwitchClick}
          active={active}
        />
      )}
    </div>
  );
};

export default Hero;
