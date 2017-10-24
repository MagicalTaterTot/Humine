import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Header extends React.Component {
  render() {
    // Input Elements Here:
    // Types: Text, Dropdown
    var elements = {
      1: {
        name: "About Us",
        type: "Text",
        link: "/about"
      }
      2: {
        name: "",
        type, "",
        link, ""
      }
    }


  }
}

class NavElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: this.props.content,
      type: this.props.type,
      link: this.props.link
    }
  }
}
