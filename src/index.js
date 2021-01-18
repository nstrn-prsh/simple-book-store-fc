import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement(
     "div",
     { id: "main", className: "container" },
     "hello world!"
);

ReactDOM.render(element, document.getElementById("root"));
