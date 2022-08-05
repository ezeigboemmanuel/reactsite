import React from "react";
import ReactDOM from "react-dom";

const navs = ["Home", "About", "Contact"];
const navLinks = navs.map(nav => <a href = "home">{nav}</a>)
export class NavBar extends React.Component {
    render() {
        return navLinks;
    }
}