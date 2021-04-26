import React from "react";
import { PropTypes } from 'prop-types';

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Location</th>
        <th>Description</th>
        <th>Difficulty</th>
        <th>Rating</th>
        <th>Tags</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  const rows = props.hikeList.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.location}</td>
        <td>{row.description}</td>
        <td>{row.difficulty}</td>
        <td>{row.rating}</td>
        <td>{JSON.stringify(row.tags)}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

function Table(props) {
  return (
    <div className="table">
      <table>
        <TableHeader />
        <TableBody hikeList={props.hikeList} />
      </table>
    </div>
  );
}

TableBody.propTypes = {
  hikeList: PropTypes.node,
}

Table.propTypes = {
  hikeList: PropTypes.node,
}
export default Table;
