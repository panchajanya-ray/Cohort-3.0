console.log(React);

let h1 = document.querySelector("h1");
h1.textContent = "hello"
document.body.append(h1);

let rh1 = React.createElement("h1", {className: "box"}, "hello i am from react");

console.log(rh1);

let realRoot = document.querySelector("#root");

let reactRoot = ReactDOM.createRoot(realRoot);

reactRoot.render(rh1);

import {a, sum} from "./main.js";

console.log("a = ",a);

console.log("sum = ",sum(10,20));

let div = React.createElement("div", {}, React.createElement("h1", {}, "I am h1"), React.createElement("h2",{},"This is H2"));

reactRoot.render(div);