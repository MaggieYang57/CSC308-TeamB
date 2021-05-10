import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PropTypes } from 'prop-types';
import { Container, Row, Col } from "react-bootstrap";
import { HikeCardList } from "./components/HikeCardList";
import FilterBar from './components/FilterBar'

// const averageRatings = (ratings) => {
//   let sum = 0;
//   for (const i in ratings) sum += +ratings[i];
//   return (sum / ratings.length).toFixed(1);
// };


function HikeFinder(props) {
  const [finderState, setFinderState] = useState({
    filteredDataIndexes: new Set([...Array(props.hikeList.length).keys()]),
    beforeSearchIndices: new Set([...Array(props.hikeList.length).keys()]),
    recentlySearched: false, 
    filters: new Set(),
  })

  useEffect(() => {
    setFinderState({
      ...finderState,
      filteredDataIndexes: new Set([...Array(props.hikeList.length).keys()]),
    });
  }, [props.hikeList]);


  function addFilter(filter) {
    let hikeData = props.hikeList;
    const filters = new Set([...finderState.filters])
    filters.add(filter)
    let indices = new Set([...finderState.filteredDataIndexes])
    if (filters.size === 1 && !finderState.recentlySearched) {
      indices = new Set()
    }
    else if (finderState.recentlySearched) {
      hikeData = props.hikeList.filter((_, i) =>
        finderState.filteredDataIndexes.has(i)
      )
    }
    for (let i = 0; i < hikeData.length; i++) {
      if (hikeData[i][filter] === true) {
        indices.add(i)
      }
    }

    setFinderState({
      filteredDataIndexes: indices,
      beforeSearchIndices: indices,
      recentlySearched: finderState.recentlySearched, 
      filters,
    })

  }

  function removeFilter(filter) {
    const hikeData = props.hikeList
    const filters = new Set([...finderState.filters])
    filters.delete(filter)
    let indices = new Set()
    if (filters.size > 0) {
      for (let i = 0; i < hikeData.length; i++) {
        for (const filterOpt of filters) {
          if (hikeData[i][filterOpt] === true) {
            indices.add(i)
          }
        }
      }
    } else {
      indices = new Set([...Array(props.hikeList.length).keys()])
    }

    setFinderState({
      filteredDataIndexes: indices,
      beforeSearchIndices: indices,
      recentlySearched: finderState.recentlySearched, 
      filters: filters,
    })
  }

  const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

  function sortByDifficulty(a, b) {
    return average(b.difficulty) - average(a.difficulty)
  }

  function handleDifficultyChange(diff) {
    const diffNum = parseInt(diff, 10)
    const hikeData = props.hikeList.filter((_, i) =>
      finderState.filteredDataIndexes.has(i)
    )
    let indices = new Set()
    if (hikeData.length > 0 && diffNum !== 0) {
      let sortedHikes
      if (diffNum === 1) {
        sortedHikes = hikeData.sort(sortByDifficulty)
      } else if (diffNum === 2) {
        sortedHikes = hikeData.sort(sortByDifficulty).reverse()
      }
      for (let i = 0; i < sortedHikes.length; i++) {
        indices.add(props.hikeList.indexOf(sortedHikes[i]))
      }
    } else if (diffNum === 0) {
      indices = new Set([...finderState.filteredDataIndexes])
    }

    setFinderState({
      filteredDataIndexes: indices,
      beforeSearchIndices: indices,
      recentlySearched: finderState.recentlySearched, 
      filters: finderState.filters,
    })
  }

  function handleFilterChange(newFilter) {
    if (finderState.filters.has(newFilter)) {
      removeFilter(newFilter)
    } else {
      addFilter(newFilter)
    }
  }

  function updateBySearch(input) {
    console.log('here')
    const hikeData = props.hikeList.filter((_, i) =>
      finderState.filteredDataIndexes.has(i)
    )
    let indices = new Set([...finderState.filteredDataIndexes])
    const beforeSearch = new Set([...finderState.filteredDataIndexes])
    let searched = true;
    if (hikeData.length > 0) {
      for (let i = 0; i < hikeData.length; i++) {
        if (!(hikeData[i].description.includes(input))) {
          indices.delete(i)
        }
      }
    }

    console.log(hikeData)

    if (input.length === 0 && finderState.recentlySearched) {
      indices = new Set([...finderState.beforeSearchIndices])
      searched = false;
    }

    else if (indices.size === 0) {
      console.log("Nothing matched your search results, please try something else!")
    }


    setFinderState({
      recentlySearched: searched, 
      filteredDataIndexes: indices,
      beforeSearchIndices: beforeSearch,
      filters: finderState.filters,
    })

  }

  function chooseHikes() {
    const renderHikes = [...finderState.filteredDataIndexes].map((i) => props.hikeList[i])
    if (renderHikes.length === 0) {
      return props.hikeList
    }
    else {
      return renderHikes;
    }
  }
  return (
    <React.Fragment>
      <FilterBar
        onChange={handleFilterChange}
        onDiff={handleDifficultyChange}
        updateBySearch={updateBySearch}
      />
      <Container style={{ marginTop: "5vw" }}>
        <b className="text text-center " style={{ fontSize: 50, color: "#2C6674" }}>
          Hike Finder
          </b>
        <p className="text text-center " style={{ fontSize: 30, color: "#59BCA6" }}>
          Find one that is just right for you!
          </p>
      </Container>
      <Container style={{ marginTop: "2vw" }}>
        <hr
          style={{
            color: "#BDBDBDBD",
            height: 3,
          }}
        />
      </Container>

      <Container>
        <Col>
          {chooseHikes().map((hike) => (
            <Row className="mb-5" key={hike._id} style={{ marginTop: "3.2vw" }}>
              <HikeCardList hike={hike} />
            </Row>
          ))}
        </Col>
      </Container>
    </React.Fragment>
  );
}

HikeFinder.propTypes = {
  hikeList: PropTypes.array,
}

HikeFinder.propTypes = {
  hikeList: PropTypes.array,
};
export default HikeFinder;
