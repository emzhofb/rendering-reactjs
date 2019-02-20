import React, { Component } from 'react';
import axios from 'axios'


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
      ],
      planets: []
    }
  }

  _handleChange = (element) => {
    this.setState({[element.target.name]: element.target.value})
  }

  _handleClick = () => {
    axios.get("https://swapi.co/api/planets/").then((res) => {
      this.setState({planets: res.data.results})
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this._handleClick} >Tampilkan data planet</button>
        <h1>List Data Planet Starwars</h1>
        <table>
          <thead>
            <th>Nama Planet</th>
          </thead>
          <tbody>
            {
              this.state.planets.map((data, index) => {
                return (
                  <tr key={index}>
                    <td> { data.name } </td>
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
