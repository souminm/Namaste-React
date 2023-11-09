import { createContext} from "react";

//React Context for accessing the data globally across all components.
const UserContext = createContext({
     loggedInUser : "Default User",
})

export default UserContext;