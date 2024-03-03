import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { gameInfoQuery } from "../../utils/apiQueries";
import { apiRequest } from "../../utils/apiRequest";
import InfoList from "./InfoList";
import GameAbout from "./GameAbout";
import GameNotFound from "./GameNotFound";
import { Helmet } from "react-helmet";
import GameMedia from "./GameMedia";
import GameWebsites from "./GameWebsites";
import SimilarGames from "./SimilarGames";
import LanguageSupport from "./LanguageSupport";
import { lazy } from "react";
import Loading from "../loading/Loading";

const HeaderInfo = lazy(() => import("./GameInfoHeader"));

const GameInfo = () => {
  const { id } = useParams();
  const [gameInfo, setGameInfo] = useState();
  const [bgShow, setBgShow] = useState(false);
  const [gameNotFound, setGameNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiRes = async () => {
      setLoading(true);
      const config = {
        method: "post",
        path: "games",
        data: gameInfoQuery(id),
      };
      const res = await apiRequest(config);
      return res;
    };
    apiRes()
      .then((info) => (info[0] ? setGameInfo(info[0]) : setGameNotFound(true)))
      .finally(() => {
        window.scrollTo(0, 0);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="relative min-h-lvh">
      {!gameNotFound ? (
        gameInfo && (
          <section className="game-info text-white flex justify-center overflow-y-scroll bg-black">
            {gameInfo ? (
              <img
                alt="background image"
                src={
                  gameInfo.screenshots
                    ? gameInfo.screenshots[0].url.replace(
                        "t_thumb",
                        "t_screenshot_med"
                      )
                    : gameInfo.cover?.url.replace("t_thumb", "t_cover_big")
                }
                className={`game_bg fixed top-0 left-0 pointer-events-none blur-xl w-full h-lvh opacity-30 object-cover ${
                  !bgShow && "hidden"
                }`}
                onLoad={() => setBgShow(true)}
              />
            ) : (
              ""
            )}
            <div className="game-info-container relative w-3/4 mt-32 min-h-lvh max-sm:w-[90%]">
              <HeaderInfo data={gameInfo} />
              <div className="game-info-body my-10 w-full flex max-lg:flex-col-reverse">
                <div className="left !min-w-72 py-5 mr-5">
                  <h2 className="information-header text-2xl font-medium pb-3">
                    INFORMATIONS
                  </h2>
                  {gameInfo?.game_modes && (
                    <InfoList
                      data={gameInfo?.game_modes}
                      title={"Game Modes"}
                    />
                  )}

                  {gameInfo?.multiplayer_modes &&
                    Object.keys(gameInfo.multiplayer_modes[0]).some(
                      (mode) => gameInfo.multiplayer_modes[0][mode] === true
                    ) && (
                      <div className="multiplayer-container mb-5">
                        <h3 className="multiplayer-header text-xl">
                          Multiplayer Modes
                        </h3>
                        <ul className="list *:ml-10 *:truncate *:max-w-48 *:border-l-4 *:pl-2">
                          {Object.keys(gameInfo.multiplayer_modes[0])?.map(
                            (mode, index) => {
                              if (gameInfo.multiplayer_modes[0][mode] == true) {
                                return (
                                  <li key={index} title={mode}>
                                    {mode[0].toUpperCase() + mode.slice(1)}
                                  </li>
                                );
                              }
                            }
                          )}
                        </ul>
                      </div>
                    )}
                  {gameInfo?.genres && (
                    <InfoList data={gameInfo.genres} title={"Genres"} />
                  )}
                  {gameInfo?.themes && (
                    <InfoList data={gameInfo.themes} title={"Themes"} />
                  )}
                  {gameInfo?.player_perspectives && (
                    <InfoList
                      data={gameInfo.player_perspectives}
                      title={"Player Perspectives"}
                    />
                  )}
                  {gameInfo?.keywords && (
                    <InfoList data={gameInfo.keywords} title={"Keywords"} />
                  )}
                  {gameInfo?.language_supports && (
                    <LanguageSupport
                      languageSupports={gameInfo.language_supports}
                    />
                  )}
                </div>
                <div className="right !w-full overflow-hidden border-l-2 pb-5 max-lg:border-none">
                  {gameInfo?.summary ? (
                    <GameAbout summary={gameInfo.summary} />
                  ) : (
                    <GameAbout summary={"No Data"} />
                  )}

                  {gameInfo?.websites && (
                    <GameWebsites websites={gameInfo?.websites} />
                  )}

                  {gameInfo?.screenshots && (
                    <GameMedia
                      screenshots={gameInfo?.screenshots}
                      videos={gameInfo?.videos}
                      loading={loading}
                    />
                  )}

                  {gameInfo?.similar_games && (
                    <SimilarGames similarGames={gameInfo.similar_games} />
                  )}
                </div>
              </div>
            </div>
            <Helmet>
              <title>GG | {gameInfo?.name}</title>
              <meta
                name="description"
                content={`information about ${gameInfo?.name}`}
              />
            </Helmet>
          </section>
        )
      ) : (
        <GameNotFound />
      )}
      {loading && <Loading />}
    </div>
  );
};

export default GameInfo;
