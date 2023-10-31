import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout />);

//React Component
//class based component - old way of writing code
//functional Component - new way of writing code
