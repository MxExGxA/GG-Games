import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaGooglePlay,
  FaAppStoreIos,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { Link } from "react-router-dom";

const CarouselGameCard = ({ gameData }) => {
  const resizedCover = gameData?.cover.url.replace("t_thumb", "t_cover_big");
  const paragraphRef = useRef();
  const platformsRef = useRef();

  useEffect(() => {
    paragraphRef.current.innerText = paragraphRef.current.innerText?.replaceAll(
      ".",
      ".\n"
    );
    //split platforms array items into two slices then return the first one
    platformsRef.current = gameData.platforms.map((p) => {
      return p.name.split(" ")[0].toLowerCase();
    });

    //convert platform array into Set for unique items
    platformsRef.current = Array.from(new Set(platformsRef.current));
  }, [gameData]);

  return (
    <div
      className={
        "carousel-card flex flex-shrink-0 w-full h-full p-10 max-lg:flex-col max-lg:items-center"
      }
    >
      <img
        className="rounded-xl w-80 object-fit h-full"
        src={resizedCover}
        alt="game image"
      />

      <div className="carousel-card-right flex flex-col items-left justify-between ml-10 max-lg:ml-0 max-lg:mt-5 h-full w-full ">
        <h1 className="text-4xl max-lg:text-3xl font-black mb-10 max-lg:mb-2 max-sm:mb-0 max-lg:line-clamp-1 line-clamp-2 ">
          {gameData ? gameData.name : "Loading..."}
        </h1>
        <p
          ref={paragraphRef}
          className="roboto-slab text-xl max-lg:text-lg text-justify w-[100%] line-clamp-6 max-lg:line-clamp-1 max-lg:hidden"
        >
          {gameData ? gameData.summary : "Loaing..."}
        </p>
        <div className="flex items-center m-0 absolute bottom-32  *:mr-2 p-4 pl-0 max-lg:hidden">
          {platformsRef.current &&
            platformsRef.current.map((platform) => {
              switch (platform) {
                case "pc":
                  return <FaWindows key={platform} className="text-l" />;
                case "playstation":
                  return <FaPlaystation key={platform} className="text-l" />;
                case "xbox":
                  return <FaXbox key={platform} className="text-l" />;
                case "mac":
                  return <FaApple key={platform} className="text-l" />;
                case "android":
                  return <FaGooglePlay key={platform} className="text-l" />;
                case "nintendo":
                  return <BsNintendoSwitch key={platform} className="text-l" />;
                case "ios":
                  return <FaAppStoreIos key={platform} className="text-l" />;
              }
            })}
        </div>
        <div className="mt-auto flex justify-start items-center max-sm:mt-5">
          {/* <button
            onClick={() => window.open(steamLink)}
            className="bg-white w-[40%] text-black text-2xl max-xl:text-xl max-sm:text-lg font-light p-3 rounded-md mr-5"
          >
            PURCHASE
          </button> */}
          <Link
            to={`/game/${gameData?.id}`}
            className="border-2 w-full p-[10px] text-2xl max-xl:text-xl max-sm:text-lg
            font-light rounded-md whitespace-nowrap box-border flex justify-center hover:bg-white hover:text-black transition-all"
          >
            More About This
          </Link>
        </div>
      </div>
    </div>
  );
};

CarouselGameCard.propTypes = {
  gameData: PropTypes.object,
};

export default CarouselGameCard;
