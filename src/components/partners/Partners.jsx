import {
  playStation,
  appStore,
  epicGames,
  gogCom,
  googlePlay,
  nintendo,
  steam,
  xBox,
} from "../../assets/images/partners";
import gamepad from "../../assets/images/partners/gamepad.png";

const Partners = () => {
  return (
    <div className="partners-container w-3/4 py-10 relative">
      <img
        className="gamepad-bg absolute -top-[10%] -left-[10%] w-96 rotate-45"
        src={gamepad}
        alt=""
      />
      <div className="partners-head flex justify-center">
        <h1 className="partners-title text-5xl text-gray-100 font-black !z-40">
          OUR PARTNERS
        </h1>
      </div>
      <div className="partners-body relative flex items-center justify-between max-lg:justify-around max-sm:justify-between mt-10 flex-wrap *:h-16 bg-gray-100 bg-opacity-90 *:m-5 rounded-2xl !z-40">
        <img src={steam} alt="steam image" />
        <img src={xBox} alt="xBox image" />
        <img src={playStation} alt="playStation image" />
        <img src={epicGames} alt="epicGames image" />
        <img src={googlePlay} alt="googlePlay image" />
        <img src={nintendo} alt="nintendo image" />
        <img src={gogCom} alt="gogCom image" />
        <img src={appStore} alt="appStore image" />
      </div>
    </div>
  );
};

export default Partners;
