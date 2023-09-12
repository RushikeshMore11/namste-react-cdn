import React from "react";
import ReactDOM from "react-dom/client";
const App = () => {
  const h1 = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste Baby from React"
  );
  const h2 = React.createElement(
    "h2",
    { id: "heading" },
    "Hello Baby from H2 tag"
  );
  const child = React.createElement("div", { id: "child" }, [h1, h2]);
  const parent = React.createElement("div", { id: "parent" }, [child, child]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
};
App();
