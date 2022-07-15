import React from "react";
import Greetings from "./Greetings";
import Heading from "./Heading";
import List from "./List";
import PI, {doublePI, triplePI} from "./Math";

function App() {
    return(
        <div>
            <Heading />
            <Greetings />
            <List />

            {/* Export and Import in React */}
            <ul>
                <li>The value of PI: {PI} </li>
                <li>Double of PI: {doublePI()} </li>
                <li>Triple of PI: {triplePI()} </li>
            </ul>
        </div>
    );
}

export default App;