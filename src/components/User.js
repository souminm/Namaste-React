import { useEffect, useState } from "react";

const User = (props)  =>{
   const {name} = props; 

   useEffect(()=>{
    fetchData();
   },[]);

   const fetchData = async()=>{
     const data = await fetch('https://api.github.com/users/souminm');
     const json = await data.json();
   }
  return (<div className="user-card">
    <h2>Name : {name}</h2>
    <h3>Location : Jagdalpur,Chhattisgarh</h3>
    <h4>Contact :@souminm</h4>
  </div>);
}

export default User;