import React, { Component } from "react";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";
import { emoji, punctuation, vocabulary } from "./data.json";
import "./simple.css";

class Simple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: "",
      punctuation: punctuation,
      vocabulary: vocabulary.concat(emoji),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  tokenise(inputHTML) {
    // remove html tags and tokenise text
    let cleanText = sanitizeHtml(inputHTML, {
      allowedTags: [],
      allowedAttributes: {},
    }).toLowerCase();
    return cleanText.split(" ");
  }

  labelTokens(tokens) {
    // loop through tokens and if they're invalid, wrap them in a <span />
    let labelledTokens = [];
    for (var i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      if (this.state.vocabulary.includes(token)) {
        labelledTokens.push(token);
      } else if (
        this.state.vocabulary.includes(token.slice(0, -1)) &
        this.state.punctuation.includes(token.slice(-1))
      ) {
        labelledTokens.push(token);
      } else {
        labelledTokens.push(`<span>${token}</span>`);
      }
    }
    return labelledTokens;
  }

  handleChange(event) {
    let tokens = this.tokenise(event.target.value);
    let labelledHTML = this.labelTokens(tokens).join(" ");
    this.setState({ html: labelledHTML });
  }

  handleBlur(event) {
    console.log(event.type);
  }

  render() {
    return (
      <ContentEditable
        className={"simpletext " + this.props.className}
        placeholder={this.props.placeholder}
        html={this.state.html}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}

export default Simple;
