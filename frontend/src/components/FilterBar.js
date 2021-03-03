import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "../css/filterBar.css";
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";

function FilterBar() {

  return (
    <div id="filterBar">
      <SearchBar />
      <div id="filter-buttons">
        <FilterButton name="Dog Friendly" filterType='dog-friendly' />
        <FilterButton name="Family Friendly" filterType='family-friendly' />
        <FilterButton name="Horseback Riding" filterType='horseback-riding' />
        <FilterButton name="Bike Riding" filterType='bike-riding' />
      </div>
    </div>
  );
  
}

export default FilterBar;
