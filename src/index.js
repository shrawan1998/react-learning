import React from "react";
import ReactDOM from "react-dom";

const name = 'User';
const id = 10;
ReactDOM.render(
    <div>
        <h1>Hello {name}!</h1>
        <p>Your id is {id}</p>
        <p>Addition of a two numbers: {2+3}</p>
        <p>Generating random number: {Math.floor(Math.random() * 10)}</p>
    </div>,
    document.getElementById("root")
);