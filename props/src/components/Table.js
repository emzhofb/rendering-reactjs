import React, {Component} from 'react'

class Table extends Component {
    render () {
        console.log(this.props)
        return (
            <table>
              <thead>
                <th>{this.props.judulBaru}</th>
              </thead>
              <tbody>
                {
                  this.props.mugiwara.map((data, index) => {
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
}

export default Table