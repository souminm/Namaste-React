import useUserHook from "../utils/useUserHook";
const User = ()  =>{
  //  const {name} = props; 
  const userInfo = useUserHook();
  console.log(userInfo,'userInfo')
  return (<div className="user-card">
    <h2>Name : {userInfo}</h2>
    <h3>Location : Jagdalpur,Chhattisgarh</h3>
    <h4>Contact :@souminm</h4>
  </div>);
}

export default User;