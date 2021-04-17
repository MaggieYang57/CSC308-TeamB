import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
    marginTop: ".5vw",
  };

  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Search Hikes"}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
