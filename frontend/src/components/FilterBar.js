import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "../css/filterBar.css";
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";

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
      <div id="difficultyFilter">
        <form>
        <label for="difficulty">Filter Hikes by Difficulty:</label>
          <select name="difficulty" onChange={props.onChange}>
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Hard">Hard</option>
            <option value="Expert">Expert</option>
          </select>
        </form>
      </div>
    </div>
  );
  
}

export default FilterBar;
