import React from 'react'

const Table = (props) => {
    return (
        <table>
          <thead>
            <th>Nama</th>
          </thead>
          <tbody>
            {
              props.mugiwara.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.nama}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    )
}

export default Table