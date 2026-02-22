// <div id="parent">
//     <div id="child1">
//         <h1>I'm h1 tag</h1>
//         <h2>I'm h2 tag</h2>
//     </div>
//      <div id="child2">
//         <h1>I'm h1 tag</h1>
//         <h2>I'm h2 tag</h2>
//     </div>
// </div>

// ReactElement(Object) => HTML(Browser Understand)

const heading = React.createElement("h1", {}, "Hello World from React!");

// Nested Structure
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "i am heading 1"),
        React.createElement("h2", {}, "i am heading 2"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "i am heading 1"),
        React.createElement("h2", {}, "i am heading 2"),
    ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
