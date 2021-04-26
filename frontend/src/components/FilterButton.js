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
  onChange: PropTypes.node,
  onDiff: PropTypes.node,
  name: PropTypes.node,
  filterType: PropTypes.node,
}

export default FilterButton;
