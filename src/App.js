import React, { Component } from "react";
import SimpleText from "./SimpleText";

class App extends Component {
  render() {
    return (
      <div className="pa3 pa5-ns sans-serif debug debug-grid">
        <SimpleText
          placeholder="write a simple title here"
          className="f3 f1-m f-headline-l lh-title b h-auto"
          wordLimit={10}
        />
        <SimpleText
          placeholder="write 1000 simple words here"
          className="lh-copy h-auto"
          wordLimit={1000}
        />
      </div>
    );
  }
}
export default App;
