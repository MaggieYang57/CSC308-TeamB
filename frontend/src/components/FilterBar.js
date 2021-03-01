import React, { Component } from "react";
import axios from "axios";
import "../css/filterBar.css";
import SearchBar from "./SearchBar";


class FilterBar extends Component {
  render() {
    return (
      <div id="filterBar">
        <SearchBar />
        <div id="filter-buttons">
          <button>Dog Friendly</button>
          <button>Family Friendly</button>
          <button>Horseback Riding</button>
          <button>Bike Riding</button>
        </div>
      </div>
    );
  }
}

export default FilterBar;
