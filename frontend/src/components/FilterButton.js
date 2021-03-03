import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import "../css/filterButton.css";


function FilterButton(props) {
  return (
    <div className="filterButton">
      <label>
        <input type="checkbox" value="1" />
        <span>{props.name}</span>
      </label>
    </div>

  )
}

export default FilterButton;