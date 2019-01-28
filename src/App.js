import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1 className="display-3">React Nextagram</h1>
          <Button color="primary">Click</Button>
        </Jumbotron>
        <div className="border border-warning">
          <p>test</p>
        </div>
      </div>
    );
  }
}

export default App;
