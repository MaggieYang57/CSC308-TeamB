import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "../css/filterBar.css";
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";
import FilterDifficulty from "./FilterDifficulty";

function FilterBar(props) {

  return (
    <div id="filterBar">
      <SearchBar />
      <div id="filter-buttons">
        <FilterButton name="Dog Friendly" filterType='dog_friendly' onChange={props.onChange} />
        <FilterButton name="Family Friendly" filterType='family_friendly' onChange={props.onChange}/>
        <FilterButton name="Horseback Riding" filterType='horseback_riding' onChange={props.onChange}/>
        <FilterButton name="Bike Riding" filterType='biking' onChange={props.onChange}/>
      </div>
      <FilterDifficulty onChange={props.onChange}/>
    </div>
  );
  
}

export default FilterBar;
