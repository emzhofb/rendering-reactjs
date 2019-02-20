import React, { Component } from 'react';

class App extends Component {

  constructor () {
    super ()
    this.state = {
      tinggiBadan: ''
    }
  }

  _handleChange = (element) => {
    this.setState({[element.target.name]: element.target.value})
  }

  render() {
    return (
      <div>
        <h1>Test Tinggi Badan</h1>
        <input 
          name = "tinggiBadan"
          onChange = {this._handleChange}
          value = {this.state.tinggiBadan}
        />
        {
          Number(this.state.tinggiBadan) > 170 ? (
            <h1>Hasil : Boleh Naik</h1>
          ) : (
            <h1>Hasil : Tidak Boleh Naik</h1>
          )
        }
      </div>
    );
  }
}

export default App;
