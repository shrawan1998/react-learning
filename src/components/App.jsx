import React from "react";
import Greetings from "./Greetings";
import Heading from "./Heading";
import List from "./List";
// import PI, {doublePI, triplePI} from "./Math";
import * as Calculator from "./calculater";

function App() {
    return(
        <div>
            <Heading />
            <Greetings />
            <List />

            {/* Export and Import in React */}
            <ul>
                <li>{Calculator.add(5,6)} </li>
                <li>{Calculator.multiply(5,6)} </li>
                <li>{Calculator.subtract(5,6)} </li>
                <li>{Calculator.divide(5,6)} </li>
            </ul>
        </div>
    );
}

export default App;