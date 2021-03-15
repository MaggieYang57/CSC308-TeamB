import React, { useState } from "react";
import "../css/filterBar.css";

function FilterDifficulty(props) {
  const [difficulty, setDifficulty] = useState("All")

  function handleFilterChange(e) {
    console.log(e.target.value);
    setDifficulty(e.target.value);
    props.onChange(e.target.value);
  }

  return (
    <div id="difficultyFilter">
      <form>
        <label for="difficulty">Filter Hikes by Difficulty:</label>
        <select name="difficulty" id="difficulty" onChange={handleFilterChange}>
          <option value="0">All</option>
          <option value="1">Easy</option>
          <option value="3">Moderate</option>
          <option value="4">Hard</option>
          <option value="5">Expert</option>
        </select>
      </form>
    </div>
  );
}

export default FilterDifficulty;
