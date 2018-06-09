import React, { Component } from "react";
import Resume from "../components/resume/Resume";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">lohnns tribune</h1>
        </header>
        <Resume />
      </div>
    );
  }
}

export default App;
