/* eslint-disable react/prop-types */
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export function SortBy({ hike }) {
  const ListStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
    marginTop: ".5vw",
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Select Option"
      style={{ ListStyling }}
    >
      <Dropdown.Item href="#/action-1">Alphabetical: A-Z</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Alphabetical: Z - A</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Difficulty: Low to High</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Difficulty: High to Low</Dropdown.Item>
      <Dropdown.Item href="#/action-5">Closest to Me</Dropdown.Item>
    </DropdownButton>
  );
}
