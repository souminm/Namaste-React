//class based component

import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo : {
        name : 'dummy',
        avatar_url:'default',
      }
    };
    console.log(this.props.name+'child constructor');
  }
  async componentDidMount(){
    console.log(this.props.name+"Child componentDidMount()");
   const data = await fetch('https://api.github.com/users/souminm');
   const json =  await data.json();
  //  debugger;
   this.setState({
    userInfo : json
   })
   console.log(json);
  }

  componentDidUpdate(){
    console.log('class based componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('component unmounted');
  }
  render() {
    // const { name } = this.props;
    console.log(this.props.name+" Child Render");
    const {name,avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location : Jagdalpur,Chhattisgarh</h3>
        <h4>Contact :@souminm</h4>
      </div>
    );
  }
}
export default UserClass;
