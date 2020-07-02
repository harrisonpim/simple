import React, { Component } from "react";
import Simple from "./Simple";
import { vocabulary } from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { vocabulary: vocabulary };
  }

  render() {
    return (
      <div className="pv4 ph4 ph5-l black-80 sans-serif vh-100">
        <Simple
          placeholder="write some big, simple words for the top"
          className="f2 f1-l lh-title b"
          wordLimit={10}
          vocabulary={this.state.vocabulary}
        />
        <Simple
          placeholder="write some more simple words down here"
          className="f4 lh-copy measure-wide"
          wordLimit={1000}
          vocabulary={this.state.vocabulary}
        />
      </div>
    );
  }
}
export default App;
