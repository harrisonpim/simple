import React, { Component } from "react";
import "./SimpleText.css";

class SimpleText extends Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div
        contentEditable="true"
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
        className={"simpletext " + this.props.className}
      />
    );
  }
}

export default SimpleText;
