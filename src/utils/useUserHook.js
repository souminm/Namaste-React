import { useEffect,useState } from "react"
import { USER_API } from "./constants";

const useUserHook = () =>{
    //local state variable
    const [userInfo,setUserInfo] = useState(null);
    //fetch the data from github api
    useEffect(()=>{
      fetchData();
    },[])
    const fetchData = async() =>{
        const data = await fetch(USER_API);
        const json = await data.json();
        setUserInfo(json.name);
    }
    return userInfo;
}

export default useUserHook;