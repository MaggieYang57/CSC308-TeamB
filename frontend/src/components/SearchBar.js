import React from 'react';
import { PropTypes } from 'prop-types';

function SearchBar(props) {
  const BarStyling = {
    width: '20rem',
    background: '#F2F1F9',
    border: 'none',
    padding: '0.5rem',
    marginTop: '4vw',
  }

  return (
    <input
      style={BarStyling}
      key="random1"
      value={props.keyword}
      placeholder={'Search Hikes'}
      onChange={(e) => props.setKeyword(e.target.value)}
    />
  )
}

SearchBar.propTypes = {
  keyword: PropTypes.node,
  setKeyword: PropTypes.node
}
export default SearchBar
