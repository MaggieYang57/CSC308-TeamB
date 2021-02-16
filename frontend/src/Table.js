import React from 'react'

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Difficulty</th>
        <th>Length</th>
        <th>Elevation Gain</th>
        <th>Route Type</th>
        <th>Rating</th>
        <th>Reviews</th>
      </tr>
    </thead>
  );
}

function TableBody (props) {
  const rows = props.hikeList.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.description}</td>
        <td>{row.difficulty}</td>
        <td>{row.length}</td>
        <td>{row.elevation_gain}</td>
        <td>{row.route_type}</td>
        <td>{row.rating}</td>
        <td>{row.reviews}</td>
      </tr>
    );
  })
  return (
    <tbody>
      {rows}
    </tbody>
  );
}

function Table(props) {
   return(
      <table>
        <TableHeader />
        <TableBody hikeList={props.hikeList} />
      </table>
   );
}

export default Table;
