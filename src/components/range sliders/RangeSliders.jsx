import { Slider } from "@mui/material";
import { useDispatch } from "react-redux";
import { handleRates, handleYears } from "../../redux/rangeFilterSlice";
import { useState } from "react";

const RangeSliders = () => {
  const [years, setYears] = useState([1958, 2026]);
  const [rates, setRates] = useState([0, 100]);
  const dispatch = useDispatch();

  const handleOnYearChange = (event, y) => {
    setYears(y);
  };

  const handleOnRateChange = (event, r) => {
    setRates(r);
  };

  const handleOnYearChangeCommitted = () => {
    dispatch(handleYears(years));
  };

  const handleOnRateChangeCommitted = () => {
    dispatch(handleRates(rates));
  };

  return (
    <div className="border-none flex flex-col justify-between h-[250px]">
      <div>
        <h1 className="text-xl font-bold pb-2">Years</h1>
        <ul className="mx-5 text-l">
          <Slider
            min={1958}
            max={2026}
            value={years}
            onChange={handleOnYearChange}
            onChangeCommitted={handleOnYearChangeCommitted}
            disableSwap
            sx={{ color: "rgb(185,28,28)" }}
          />
          <div className="flex justify-between">
            <div>{years[0]}</div>
            <div>{years[1]}</div>
          </div>
        </ul>
      </div>
      <div>
        <h1 className="text-xl font-bold pb-2">Ratings</h1>
        <ul className="mx-5 text-l">
          <Slider
            min={0}
            max={100}
            value={rates}
            onChange={handleOnRateChange}
            onChangeCommitted={handleOnRateChangeCommitted}
            disableSwap
            sx={{ color: "rgb(185,28,28)" }}
          />
          <div className="flex justify-between">
            <div>{rates[0]}</div>
            <div>{rates[1]}</div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default RangeSliders;
