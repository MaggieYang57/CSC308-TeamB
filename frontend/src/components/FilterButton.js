import React from "react";
import "../css/filterButton.css";
import { PropTypes } from 'prop-types';

function FilterButton(props) {
  function handleFilterChange() {
    props.onChange(props.filterType);
  }

  return (
    <div className="filterButton">
      <label>
        <input type="checkbox" value="1" onClick={handleFilterChange} />
        <span>{props.name}</span>
      </label>
    </div>
  );
}

FilterButton.propTypes = {
  name: PropTypes.string,
  filterType: PropTypes.string,
  onChange: PropTypes.func,
};
export default FilterButton;
