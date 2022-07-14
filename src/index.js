import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const currentTime = new Date().getHours();

const customStyle = {
    color: "",
    borderBottom: "",
}

let greetings;

if (currentTime > 5 && currentTime < 12) {
    greetings = "Good Morning!!";
    customStyle.color = "Green";
    customStyle.borderBottom = "3px solid green";
} else if(currentTime > 12 && currentTime < 15) {
    greetings = "Good Afternoon!!";
    customStyle.color = "yellow";
    customStyle.borderBottom = "3px solid yellow";
} else if(currentTime > 15 && currentTime < 21) {
    greetings = "Good Evening!!";
    customStyle.color = "blue";
    customStyle.borderBottom = "3px solid blue";
} else{
    greetings = "Good Night!!";
    customStyle.color = "red";
    customStyle.borderBottom = "3px solid red";
}

ReactDOM.render(
    <h1 className="greet-message" style={customStyle}>{greetings} </h1>,
    document.getElementById("root")
);