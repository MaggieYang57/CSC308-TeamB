import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';


const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

function SearchBar(props) {
  const [inputVal, setInputVal] = useState('');
  const [debounceFunc, setFunc] = useState(null);

  useEffect(() => {
    const debFn = debounce(props.updateBySearch, 500);
    setFunc(() => debFn);
  }, [props.updateBySearch]);

  const onInputChange = (val) => {
    debounceFunc(val);
    setInputVal(val);
  };

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
      value={inputVal}
      placeholder={'Search Hikes'}
      onChange={(e) => onInputChange(e.target.value)}
    />
  )
}

SearchBar.propTypes = {
  updateBySearch: PropTypes.node
}
export default SearchBar
