import {
    SET_USERS,
    SET_EMAIL,
    //EDIT_EMAIL,
    EDIT_NAME,
    EDIT_CONTACT,
    EDIT_GENDER,

    //ADD_USER,
    ADD_NAME,
    ADD_EMAIL,
    ADD_CONTACT,
    ADD_GENDER,

    SET_TRUE,
    SET_FALSE
} from "../../constants/user/constants";

const initial_state = {
    dialogueState:false,
    email:"",
    name:"",
    contact:"",
    gender:"",
    users : [],
    open:false
}
export default function reducer (state = initial_state, action) {
    switch (action.type) {
        case SET_USERS :
            return state = { ...state, users : action.payload };
        case SET_EMAIL :
           return  { ...state, email : action.payload };
        // case EDIT_EMAIL :
        //   return { ...state, email : action.payload };   
        case EDIT_NAME :
            return { ...state, name : action.payload };
        case EDIT_GENDER :
            return { ...state, gender : action.payload };
        case EDIT_CONTACT :
            return { ...state, contact : action.payload };   
            
        //add user
        case ADD_NAME :
           return { ...state, name : action.payload };
        case ADD_EMAIL :
            return { ...state, email : action.payload };  
        case ADD_CONTACT :
            return { ...state, contact : action.payload };        
        case ADD_GENDER :
            return { ...state, gender : action.payload };

        // case ADD_USER :
        //     return { ...state, user : action.payload };
             

        case SET_TRUE :
            return {...state , open : true, email: action.payload};
        case SET_FALSE :
            return  {...state , open : false}; 
        case 'SET-DIALOGUE-STATE':
            return{...state ,dialogueState:action.payload}   ; 
        default : 
            return state;
    }
    
}











































































// // import { startOfYesterday } from "date-fns";
// import {
//     // users,
//     SET_USERS,
//     //UPDATE_USER
//     // DELETE_USERS
// } from "../../constants/user/constants";

// const initial_state = {
//     users : [],
    

// }

// // let initial_state ={
// //     name:"",
// //     email:"",
// //     contact:"",
// //     gender:""
// // }

// export default function reducer (state = initial_state, action) {
//     switch (action.type) {
//         case SET_USERS :
//             return state = { ...state, users : action.payload };
//         // case DELETE_USERS :
//         //     // return state = { ...state, users : state.users.filter((user) => user.id !=action.payload), };   
//         //     return state = { ...state, users : action.payload };   

//     //     case UPDATE_USER:
//     //     return {
//     //      ...state,
//     //      contacts: state.users.map((user) =>
//     //       user.user = action.payload.user ? action.payload : user
//     //     ),
//     //   };
//         default : 
//             return state;
//     }
    
// }