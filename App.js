import React  from "react";
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am Namaste react 🚀"),
    React.createElement("h2", {}, "I am H2 tags"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 tags"),
    React.createElement("h2", {}, "I am H2 tags"),
  ]),
]);

console.log(parent);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 



// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child", key: "child1" }, [
//     React.createElement("h1", { key: "h1-1" }, "I am  Namaste React 🚀"),
//     React.createElement("h2", { key: "h2-1" }, "I am H2 tags"),
//   ]),
//   React.createElement("div", { id: "child2", key: "child2" }, [
//     React.createElement("h1", { key: "h1-2" }, "I am H1 tags"),
//     React.createElement("h2", { key: "h2-2" }, "I am H2 tags"),
//   ]),
// ]);


// console.log(parent);



// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent); 