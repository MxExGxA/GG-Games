import RangeSliders from "../range sliders/RangeSliders";
import FilterColumn from "./FilterColumn";
import { useSelector } from "react-redux";
import { FaCaretRight } from "react-icons/fa";
import { useState } from "react";

const FilterDropDown = () => {
  const filter = useSelector((state) => state.filter);
  const [toggleFilter, setToggleFilter] = useState(false);

  const handleToggleFilter = () => {
    setToggleFilter(!toggleFilter);
  };
  return (
    <div
      className={`filter-dropdown-container !w-full origin-top ${
        toggleFilter ? "h-full" : "h-10"
      } overflow-hidden transition-all duration-300`}
    >
      <div
        onClick={handleToggleFilter}
        className="filter-dropdown-button border border-stone-900 h-10 text-white bg-black bg-opacity-70
       rounded-md mb-2 flex items-center justify-start cursor-pointer"
      >
        <h3 className="button-header p-2 text-lg">Filter</h3>
        <FaCaretRight
          className={`button-arrow ${
            toggleFilter && "rotate-90"
          } transition-all duration-300`}
        />
      </div>
      <div
        className="filter-dropdown-wrapper border border-stone-900 flex justify-evenly max-2xl:justify-start max-lg:justify-center 
      *:w-[200px] max-sm:*:w-full flex-shrink-0 flex-wrap gap-3 p-5 bg-black bg-opacity-70 rounded-md text-white"
      >
        {filter &&
          filter.map((f, index) => (
            <FilterColumn
              key={index}
              colTitle={f.title}
              fieldsData={f.values}
            />
          ))}
        <RangeSliders />
      </div>
    </div>
  );
};

export default FilterDropDown;
