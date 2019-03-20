import React, { Component } from "react";
import WorkflowManager from "./components/WorkflowManager";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          Unified Transcription Factor Binding Site Analysis Tool
        </header>
        <div className="content">
          <WorkflowManager />
        </div>
      </div>
    );
  }
}

export default App;
