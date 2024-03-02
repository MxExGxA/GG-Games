import PropTypes from "prop-types";

const CarouselSwitches = ({ arr, swClick, active }) => {
  return (
    <div className="carousel-switches max-sm:p-0">
      {arr?.map((ele) => (
        <div
          key={ele}
          data-index={ele}
          onClick={swClick}
          className={`cursor-pointer ${
            active == ele
              ? "!w-4 !h-4 !opacity-100"
              : ele > 1 && active == ele - 1
              ? "!w-3 !h-3 !opacity-75"
              : ele < 10 && active == ele + 1
              ? "!w-3 !h-3 !opacity-75"
              : ""
          }`}
        ></div>
      ))}
    </div>
  );
};

CarouselSwitches.propTypes = {
  arr: PropTypes.array,
  swClick: PropTypes.func,
  active: PropTypes.number,
};

export default CarouselSwitches;
