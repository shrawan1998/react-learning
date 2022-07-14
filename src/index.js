import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

const name = "Shrawan";
const year = new Date().getFullYear();
ReactDOM.render(
    <div>
        <h1 className="heading" contentEditable="true" spellCheck="false">Great Forts of Rajasthan</h1>
        <ul>
            <li>Chittorgarh Fort - Chittorgarh</li>
            <li>Kumbhalgarh Fort - Udaipur</li>
            <li>Golden Fort - Jaisalmer</li>
            <li>Amer Fort - Jaipur</li>
            <li>Meharangarh Fort - Jodhpur</li>
        </ul>
        <p>Created by {name} & Copyright {year} </p>
    </div>,
    document.getElementById("root")
);