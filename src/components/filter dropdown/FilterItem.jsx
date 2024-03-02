import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/filterSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FilterItem = ({ fieldData, colTitle }) => {
  const [toggleCheck, setToggleCheck] = useState(false);
  const dispatch = useDispatch();

  const { id } = useParams();

  const handleOnChange = () => {
    setToggleCheck(!toggleCheck);
  };

  useEffect(() => {
    dispatch(filter({ colTitle, fieldData, toggleCheck }));
  }, [toggleCheck]);

  useEffect(() => {
    if (id == fieldData.title.toLowerCase()) {
      setToggleCheck(true);
    }
  }, []);
  return (
    <li className="*:mr-2 *:select-none flex items-center">
      <input
        id={fieldData.title + "-" + fieldData.id}
        type="checkbox"
        className="focus:ring-1 w-5 h-5 appearance-none rounded-md border-2 border-red-700 checked:bg-white  transition-all duration-300"
        onChange={handleOnChange}
        checked={toggleCheck}
      />
      <label htmlFor={fieldData.title + "-" + fieldData.id}>
        {fieldData.title}
      </label>
    </li>
  );
};

FilterItem.propTypes = {
  fieldData: PropTypes.object,
  colTitle: PropTypes.string,
};

export default FilterItem;
