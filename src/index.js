import React from "react";
import ReactDOM from "react-dom";

const fname = 'Varun';
const lname = 'Singh';
ReactDOM.render(
    <div>
        {/* JavaScript expressions in JSX and ES6 template literals */}
        <h1>Hello {`${fname} ${lname}`}!</h1>

        <h1>Hello {fname} {lname}!</h1>

        <h1>Hello {fname +" "+ lname}</h1>
    </div>,
    document.getElementById("root")
);