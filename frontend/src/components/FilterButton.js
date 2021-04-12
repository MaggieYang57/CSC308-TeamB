import React from "react";
import "../css/filterButton.css";


function FilterButton(props) {

  function handleFilterChange() {
    props.onChange(props.filterType);
  }

  return (
    <div className="filterButton">
      <label>
        <input type="checkbox" value="1" onClick={handleFilterChange}/>
        <span>{props.name}</span>
      </label>
    </div>

  )
}

export default FilterButton;