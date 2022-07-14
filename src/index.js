import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const customStyle = {
    color: "blue",
    border: "1px solid black",
    fontSize: "20px",
};

customStyle.border = "1px dashed green";

ReactDOM.render(
    <div>
        <p style={{color: "red", fontSize: "20px"}}>Hello World!</p>
        <p style={customStyle} >Hello World!</p>
    </div>,
    document.getElementById("root")
);