import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    // Input Elements Here:
    // Types: Text, Dropdown
    // If dropdown, link -> links, add array of values, otherwise, values is empty array
    // Use <Link/> to connect to routes
    var elements = {
      "1": {
        name: "Who are we?",
        type: "Text",
        values: [],
        links: ["/who"]
      },
      "2": {
        name: "About Us",
        type: "Dropdown",
        values: ["What are we?","Why?","How?"],
        links: ["/what", "/why", "/how"]
      }
    }
    var buttons = []
    for (var i = 0; i < Object.keys(elements).length; i++) {
      var buttonInfo = elements[(i + 1).toString()]
      var name = buttonInfo["name"]
      var type = buttonInfo["type"]
      var values = buttonInfo["values"]
      var links = buttonInfo["links"]

      buttons.push(
      <NavElement
        content = { name }
        type = { type }
        values = { values }
        links = { links }
      />);
    };
    console.log(buttons.length)
    return (
      <div className="headerContainer">
        { buttons }
      </div>
    );
  };
};

class NavElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: this.props.content,
      type: this.props.type,
      values: this.props.value,
      links: this.props.links
    }
  }
 // Use image opacity to make buttons transparent and change color
 render() {
   const type = this.state.type
   if(type.toUpperCase() === "TEXT") {
     return (
       <div>
        <p>
          { this.state.content }
        </p>
       </div>
     )
   }
   // Add in the rest of the link stuff
  if(type.toUpperCase() === "DROPDOWN") {
    var dropdownLinks = []
    for (var value in values) {
      dropdownLinks.push(
        <Link className="dropdown-item">{ value }</Link>
      );
    };

    return (
      <div className="btn-group">
      <button className="btn dropdown-toggle"></button>
        <div className="dropdown-menu">
          { dropdownLinks }
        </div>
      </div>
    )
  }

 }
}
