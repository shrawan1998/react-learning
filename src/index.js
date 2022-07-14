import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const name = "Shrawan";
const year = new Date().getFullYear();
const img = "https://picsum.photos/200";
ReactDOM.render(
    <div>
        <h1 className="heading">Lorem picsum images</h1>
        <img src={img} alt="" />
        <img src={img + "?grayscale"} alt="" />
        <p>Created by {name} & Copyright {year} </p>
    </div>,
    document.getElementById("root")
);