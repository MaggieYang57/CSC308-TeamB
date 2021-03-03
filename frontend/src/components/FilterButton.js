import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import "../css/filterBar.css";


function FilterButton(props) {
  const filterType = String(props.filterType);
  const [message, setMessage] = useState([]);
  async function fetchAll() {
    try {
      const response = await axios.get("http://localhost:3001/hike");
      return response.data;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    fetchAll().then((result) => {
      if (result) setMessage(result);
    });
  }, []);


  async function fetchFiltered() {
    try {
      const response = await axios.get("http://localhost:3001/hike/" + filter);
      return response.data;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  const [hikes, setHikes] = useState(message);
  const [filter, setFilter] = useState("all");
  const handlefilterChange = (e, filterType) => {
    switch (filterType) {
      case "dog-friendly":
        setFilter(e.target.name);
        break;
      case "bike-riding":
        setFilter(e.target.name);
        break;
      case "horseback-riding":
        setFilter(e.target.name);
        break;
      case "family-friendly":
        setFilter(e.target.name);
        break;
      default: break;
    }
  };

  useEffect(() => {
    fetchFiltered().then(result => {
      if (result)
        setHikes(result)
    });
  }, [filter])

  return <button onClick={() => handlefilterChange(e, {filterType})}>{props.name}</button>
}

export default FilterButton;