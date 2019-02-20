import React, { Component } from 'react';

class App extends Component {

  constructor () {
    super ()
    this.state = {
      tinggiBadan: '',
      monster: [
        {id: 1, nama: 'Luffy', kelas: 'Captain'},
        {id: 2, nama: 'Zoro', kelas: 'Vice-Captain'},
        {id: 3, nama: 'Sanji', kelas: 'Chef'},
        {id: 4, nama: 'Jinbei', kelas: 'Skipper'}
      ]
    }
  }

  _handleChange = (element) => {
    this.setState({[element.target.name]: element.target.value})
  }

  render() {
    return (
      <div>
        <h1>List Monster</h1>
        <table>
          <thead>
            <th>Id</th>
            <th>Nama</th>
            <th>Posisi</th>
          </thead>
          <tbody>
            {
              this.state.monster.map((data, index) => {
                return (
                  <tr key={index}>
                    <td> { data.id } </td>
                    <td> { data.nama } </td>
                    <td> { data.kelas } </td>
                  </tr>
                )
              })
            }   
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
