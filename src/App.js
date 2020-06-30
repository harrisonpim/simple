import React, { Component } from "react";
import SimpleText from "./SimpleText";

class App extends Component {
  render() {
    return (
      <div className="pa3 pa5-ns black-80 sans-serif">
        <SimpleText
          placeholder="write a simple title here"
          className="f3 f1-m f-headline-l lh-title b"
          wordLimit={10}
        />
        <SimpleText
          placeholder="write 1000 simple words here"
          className="lh-copy"
          wordLimit={1000}
        />
      </div>
    );
  }
}
export default App;
