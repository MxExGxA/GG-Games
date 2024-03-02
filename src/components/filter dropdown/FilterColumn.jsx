import FilterItem from "./FilterItem";
import PropTypes from "prop-types";

const FilterColumn = ({ colTitle, fieldsData }) => {
  return (
    <div className="filter-column-container">
      <h1 className="text-xl font-bold pb-2">{colTitle}</h1>
      <ul className="filter-list text-l">
        {fieldsData &&
          fieldsData?.map((field, index) => (
            <FilterItem key={index} fieldData={field} colTitle={colTitle} />
          ))}
      </ul>
    </div>
  );
};

FilterColumn.propTypes = {
  colTitle: PropTypes.string,
  fieldsData: PropTypes.array,
};

export default FilterColumn;
