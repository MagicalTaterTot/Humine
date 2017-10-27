import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Header extends React.Component {
  render() {
    // Input Elements Here:
    // Types: Text, Dropdown
    // If dropdown, link -> links, add array of values, otherwise, values is empty array
    // Use <Link/> to connect to routes
    var elements = {
      1: {
        name: "Who are we?",
        type: "Text",
        values: [],
        links: ["/who"]
      }
      2: {
        name: "About Us",
        type, "Dropdown",
        values, ["What are we?","Why?","How?"],
        links, ["/what", "/why", "/how"]
      }
    }
    var buttons = [] 
    
    for(i in elements) {
      let name = i.name;
      let type = i.type;
      let values = i.values;
      let links = i.links;
      
      buttons.push(<NavElement 
        content = { name }
        type = { type }
        values = { values }
        links = { links }
      />)
    };
  };
}

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
   if(type.toUpperCase() === "TEST") {
     return (
       <div>
       // Put button text and style here:
       </div>
     )
   }
   
 }
}
