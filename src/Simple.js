import React, { Component } from "react";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";
import "./simple.css";

class Simple extends Component {
  constructor(props) {
    super(props);
    this.state = { html: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  labelTokens(tokens) {
    // loop through tokens and if they're invalid, wrap them in a <span />
    let labelledTokens = [];
    for (var i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      if (this.props.vocabulary.includes(token)) {
        labelledTokens.push(token);
      } else {
        labelledTokens.push(`<span>${token}</span>`);
      }
    }
    return labelledTokens;
  }

  handleChange(event) {
    // remove html tags and tokenise text
    let cleanText = sanitizeHtml(event.target.value, {
      allowedTags: [],
      allowedAttributes: {},
    });
    let tokens = cleanText.split(" ");
    let labelledHTML = this.labelTokens(tokens).join(" ");

    this.setState({ html: labelledHTML });
  }

  render() {
    return (
      <ContentEditable
        className={"simpletext " + this.props.className}
        placeholder={this.props.placeholder}
        html={this.state.html}
        onChange={this.handleChange}
        onBlur={this.handleChange}
      />
    );
  }
}

export default Simple;
