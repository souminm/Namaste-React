import React from "react";
import ReactDOM from "react-dom/client";


const parent = <span>Hey hi!!</span>
  const Title= () =>{return <h1>Hello world from React
    {parent}  
    {/* <HeadingComponent/> */}
  </h1>
  
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);
// root.render(heading);

//React element
//JSX heading
//JSX(Transpilesbefore it reaches the JS) - PARCEL - Babel
//JSX => Babel transpiles it to React.createElement => ReactElement ->JS Object -> HTMLElement(render)
const heading = <h1 className="head">Namaste React using JSX!</h1>;

const HeadingComponent = () =>(
  <div className="container">
    <h1>Namaste React functional component</h1>
     <Title/>
  </div> 
 
);  

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent/>)

//React Component
//class based component - old way of writing code
//functional Component - new way of writing code

