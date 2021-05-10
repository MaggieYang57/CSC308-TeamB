import React from "react";
import "../css/filterBar.css";
import FilterButton from "./FilterButton";
import SortDrop from "./SortDrop";
import SearchBar from "./SearchBar";
import { PropTypes } from 'prop-types';

function FilterBar(props) {
  return (
    <div id="filterBar">
      <SearchBar updateBySearch={props.updateBySearch}/>
      <SortDrop onChange={props.onDiff} />

      <div id="filter-buttons">
        <FilterButton
          name="Dog Friendly"
          filterType="dog_friendly"
          onChange={props.onChange}
        />
        <FilterButton
          name="Family Friendly"
          filterType="family_friendly"
          onChange={props.onChange}
        />
        <FilterButton
          name="Horseback Riding"
          filterType="horseback_riding"
          onChange={props.onChange}
        />
        <FilterButton
          name="Bike Riding"
          filterType="biking"
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}

FilterBar.propTypes = {
  onChange: PropTypes.node,
  onDiff: PropTypes.node,
  keyword: PropTypes.node,
  setKeyword: PropTypes.node,
  updateBySearch: PropTypes.node
}

export default FilterBar;
