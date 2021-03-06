import React, { useState } from "react";
import "../css/filterBar.css";
import { PropTypes } from 'prop-types';

function SortDrop(props) {
  const [ , setDifficulty] = useState(0);

  function handleFilterChange(e) {
    setDifficulty(e.target.value);
    props.onChange(e.target.value);
  }

  return (
    <div id="sort-drop">
      <form>
        <label htmlFor="difficulty">Sort Hikes by:</label>
        <select name="difficulty" onChange={handleFilterChange}>
          <option value="0">None</option>
          <option value="2">Difficulty: Low to High</option>
          <option value="1">Difficulty: High to Low</option>
        </select>
      </form>
    </div>
  );
}

SortDrop.propTypes = {
  onChange: PropTypes.func,
}

export default SortDrop;
