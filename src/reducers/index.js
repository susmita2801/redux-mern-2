import { combineReducers } from "redux";
import login from "./login/login-reducer";
import counter from "./counter/counterReducer";
import register from "./register/registerReducer";
import contact from "./contact/contactReducer";
import users from "./user/userReducer";
//import { contactReducer } from "./contactReducer";

export default combineReducers({
    login,
    counter,
    register,
    contact,
    users,
    // contact: contactReducer,
    //user:userReducer,
});
