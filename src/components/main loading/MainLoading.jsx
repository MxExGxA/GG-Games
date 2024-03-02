import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const MainLoading = () => {
  const [hidden, setHidden] = useState(false);
  const selector = useSelector((state) => state.loadingHandler);
  const location = useLocation();

  useEffect(() => {
    console.log(selector);
    if (selector.loaded === 3 || location.pathname !== "/") {
      setHidden(true);
    }
  }, [selector]);
  return (
    <div
      className={`main-loading fixed bg-black h-lvh w-full top-0 left-0 z-50 ${
        hidden && "hidden"
      }`}
    >
      MainLoading
    </div>
  );
};

export default MainLoading;
