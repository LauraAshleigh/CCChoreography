import React from 'react'

const feesTable = props => {
  return (
    <table className='fees-table'>
      <thead>
        <tr>
          <th>Classes / Week</th>
          <th>Price (includes GST)</th>
        </tr>
      </thead>
      <tbody>
        {props.tableContent.map(fee =>
          <tr key={fee.class}>
            <td>{fee.class}</td>
            <td>{fee.price}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default feesTable