import React, { Component } from 'react';
import Table from './components/Table'

class App extends Component {
  constructor () {
    super()
    this.state = {
      mugiwara: [
        {id: 1, nama: 'Luffy', kuat: 'Haoshaku'},
        {id: 2, nama: 'Zoro', kuat: 'Bushoshoku'},
        {id: 3, nama: 'Sanji', kuat: 'Kenbunshoku'},
        {id: 4, nama: 'Jinbei', kuat: 'Gyojin Karate'}
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>List Data Monster</h1>
        <Table 
          mugiwara = {this.state.mugiwara}
        />
      </div>
    );
  }
}

export default App;
