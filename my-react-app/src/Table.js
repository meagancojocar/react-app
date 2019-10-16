import React from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Destination</th>
        <th>Country</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.destinations.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.destination}</td>
        <td>{row.country}</td>
        <td><button onClick={() => props.removeDestination(index)}>Remove</button></td>
      </tr>
    )
  })
  return (
    <tbody>{ rows }</tbody>
  )
}

class Table extends React.Component {
  render() {
      const removeDest = this.props.removeDestination
      const destProps = this.props.destinations
    return (
      <table>
        <TableHeader />
        <TableBody destinations = {destProps} removeDestination={removeDest}/>
      </table>
    )
  }
}


export default Table