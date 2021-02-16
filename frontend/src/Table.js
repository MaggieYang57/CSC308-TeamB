import React from 'react'

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
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
