import React, { Component } from "react";
import Simple from "./Simple";

class App extends Component {
  render() {
    return (
      <div className="pv4 ph4 ph5-l black-80 sans-serif vh-100">
        <Simple
          placeholder="write some big, simple words for the top"
          className="f2 f1-l lh-title b"
          wordLimit={10}
        />
        <Simple
          placeholder="write some more simple words down here"
          className="f4 lh-copy measure-wide"
          wordLimit={1000}
        />
      </div>
    );
  }
}
export default App;
