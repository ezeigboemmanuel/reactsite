import React from "react";
import icon1 from "./icons/earthicon.png";

class Navbar extends React.Component {
    render(){
        return(
            <nav className = "nav">
                <img src = {icon1} alt = "logo" id = "logo" />
                <p id = "nav-text">my travel journal</p>
            </nav>
        )
    }
}

export default Navbar;