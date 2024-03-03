import logo from "/gg_logo-01.png";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate, useLocation } from "react-router-dom";
import GameSearch from "../game search/GameSearch";
import { useRef, useState } from "react";

const NavBar = () => {
  const [searchVal, setSearchVal] = useState("");
  const [toggleResults, setToggleResults] = useState(false);

  const searchRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeNavigate = () => {
    navigate("/");
  };

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
  };

  const handleOnBlur = () => {
    setToggleResults(false);
  };

  const handleOnFocus = () => {
    setToggleResults(true);
  };

  window.addEventListener("click", (e) => {
    if (e.target !== searchRef.current) {
      handleOnBlur();
    }
  });
  return (
    <div className="nav-container w-lvw h-20 flex justify-center items-center">
      <div className="w-3/4 flex items-center max-lg:w-full max-lg:mx-5">
        <img
          className="w-44 cursor-pointer "
          src={logo}
          alt="logo"
          onClick={handleHomeNavigate}
        />

        <div className=" nav-right flex group items-center relative w-full opacity-40 hover:opacity-100 has-[input:focus]:opacity-100  max-lg:hidden">
          <CiSearch className="search-box text-xl absolute left-7 text-gray-500" />
          <input
            ref={searchRef}
            type="text"
            placeholder="search"
            className="text-l rounded-3xl w-full p-1.5 pl-8 ml-5 outline-none"
            value={searchVal}
            onChange={handleSearch}
            onFocus={handleOnFocus}
          />
          {searchVal.trim() && toggleResults && (
            <GameSearch
              searchVal={searchVal}
              maxResults={8}
              className={
                "search-results-container absolute top-10 left-10 right-5 bg-white rounded overflow-hidden flex flex-col"
              }
            />
          )}
        </div>

        <div>
          <div className="flex items-center *:whitespace-nowrap *:ml-5 *:cursor-pointer *:drop-shadow-md text-white max-lg:hidden ">
            {location.pathname != "/" ? (
              <Link to={"/"}>Home</Link>
            ) : (
              <>
                <a href="#trends" className="bg-red-700 px-3 py-1 rounded-sm">
                  Trends
                </a>
                <a href="#categories">Categories</a>
              </>
            )}
            {!location.pathname.startsWith("/allgames") && (
              <Link to={"/allgames"}>All Games</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
