import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Travel } from './travel';

class App extends Component {
  render() {
    return < div className="App">
      <header className="App-header">
        <h1 className="App-title">My Travels</h1>
      </header>
      <Travel
        image="http://zupimages.net/viewer.php?id=19/41/eskm.png"
        name="Toscane"
        destination="Toscane"
        country="Italia"
        distance="800 km"
      />
      <Travel
        image="http://zupimages.net/viewer.php?id=19/41/7ml8.png"
        name="New York"
        destination="New York"
        country="America"
        distance="8000 km"
      />

    </div>
  }
}
export default App;
