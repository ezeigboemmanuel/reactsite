import React from "react";
import icon2 from "./icons/locationicon.png";

class Main extends React.Component {
    render() {
        return (
            <div id = "all">
                <div id = "main-flex">
                    <div id = "image-div">
                        <img src = {this.props.item.img} alt = "img" />
                    </div>
                    <div id = "text-div">
                        <div id = "country-div">
                            <img src = {icon2} alt = "icon" id = "locationicon" />
                            <p className = "country-objs">{this.props.item.country}</p>
                            <p><a href = "#dd" className = "country-objs">View on Google Maps</a></p>
                        </div>
                        <h1 id = "title">{this.props.item.title}</h1>
                        <p id = "date">{this.props.item.date}</p>
                        <p id = "text">{this.props.item.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;