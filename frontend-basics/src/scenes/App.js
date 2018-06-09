import React, { Component } from "react";
import Resume from "../components/resume/Resume";
import SkillsPanel from "../components/skillsPanel/SkillsPanel";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">lohnns tribune</h1>
        </header>
        <Resume />
        <SkillsPanel />
      </div>
    );
  }
}

export default App;
