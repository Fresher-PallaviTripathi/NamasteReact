/*********
 *
 * <div id= "parent">
 *     <div id = "child">
 *        <h1>I am H1 tags</h1>
 *
 * </div>
 * </div>
 *
 *
 * *********** */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tags"),
    React.createElement("h2", {}, "I am H2 tags"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 tags"),
    React.createElement("h2", {}, "I am H2 tags"),
  ]),
]);

console.log(parent);

// const heading = React.createElement(
//   "h1", //heading
//   { id: "heading", abc: "xyz" }, //id or heading  and attribute
//   "Hello World! from React" // what data we want to put in h1
// );

// console.log(heading); //Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //it is resposible for create object and show us on browser
