// import User from "./User";
// import UserClass from "./UserClass";

// const About = () =>{
//     return (
//     <div>
//         <h1>About</h1>
//         <h2>This is Namaste React web series</h2>
//         {/* <User name ={'Soumin Mohanty (function)'}/> */}
//         <UserClass name = {'Soumin Mohanty (class)'}/>
//     </div>
// );
// }
// export default About;
import React from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log(' Parent constructor');
  }
  componentDidMount(){
    // console.log("Parent componentDidMount()");
    //api call
  }
  render() {
    // console.log(' Parent render');
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React web series</h2>
        <UserClass name={"Soumin Mohanty (class)"} />
        <User name={"Soumin Mohanty (class)"}/>
      </div>
    );
  }
}
export default About;
