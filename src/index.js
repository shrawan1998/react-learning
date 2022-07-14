import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const name = "Shrawan";
const year = new Date().getFullYear();
ReactDOM.render(
    <div>
        <h1 className="heading">Great Forts of Rajasthan</h1>
        <div className="fort-imgs">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSIKUbjrjsN00dBurCkkwY6VQSh6uqj4pKXQ&usqp=CAU" alt="Chittorgarh Fort - Chittorgarh"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFYVyly1ImRWrklVDOLtIDJ4kPqvcKxYNiA&usqp=CAU" alt="Kumbhalgarh Fort - Udaipur"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMzR4D198O0Lrj9eA4Wo3x-Ww6Mew9P9r-Q&usqp=CAU" alt="Meharangarh Fort - Jodhpur"/>
        </div>
        <p>Created by {name} & Copyright {year} </p>
    </div>,
    document.getElementById("root")
);