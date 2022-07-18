import React from "react";
import Greetings from "./Greetings";
import Heading from "./Heading";
import List from "./List";
// import PI, {doublePI, triplePI} from "./Math";
import {add, multiply, subtract, divide} from "./calculater";

function App() {
    return(
        <div>
            <Heading />
            <Greetings />
            <List />

            {/* Export and Import in React */}
            <ul>
                <li>{add(5,6)} </li>
                <li>{multiply(5,6)} </li>
                <li>{subtract(5,6)} </li>
                <li>{divide(5,6)} </li>
            </ul>
        </div>
    );
}

export default App;