import React, { useState } from "react";
import "../css/filterBar.css";

function SortDrop(props) {
  const [difficulty, setDifficulty] = useState(0)

  function handleFilterChange(e) {
    console.log(e.target.value);
    setDifficulty(e.target.value);
    props.onChange(e.target.value);
  }

  return (
    <div id="sort-drop">
      <form>
        <label for="difficulty">Sort Hikes by:</label>
        <select name="difficulty" id="difficulty" onChange={handleFilterChange}>
          <option value="0">None</option>
          <option value="2">Difficulty: Low to High</option>
          <option value="1">Difficulty: High to Low</option>
        </select>
      </form>
    </div>
  );
}

export default SortDrop;
