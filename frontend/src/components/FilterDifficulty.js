import React, { useState } from "react";
import "../css/filterBar.css";

function FilterDifficulty(props) {
  const [difficulty, setDifficulty] = useState("All")

  function handleFilterChange(value) {
    setDifficulty(value)
    props.onChange(difficulty);
  }

  return (
    <div id="difficultyFilter">
      <form>
        <label for="difficulty">Filter Hikes by Difficulty:</label>
        <select name="difficulty" onChange={(value) => handleFilterChange}>
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Hard">Hard</option>
          <option value="Expert">Expert</option>
        </select>
      </form>
    </div>
  );
}

export default FilterDifficulty;
