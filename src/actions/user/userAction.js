import {
     SET_USERS,
     //UPDATE_USER,
     //GET_USERS
     SET_EMAIL,
    // EDIT_EMAIL,
     EDIT_NAME ,
     EDIT_GENDER, 
     EDIT_CONTACT,

     //ADD_USER,
     ADD_NAME,
     ADD_EMAIL,
     ADD_CONTACT,
     ADD_GENDER,

     SET_TRUE,
     SET_FALSE
     

} from "../../constants/user/constants";

export function setUsers (user) {
    return {
        type : SET_USERS,
        payload : user
    }
}
export function dialogueState (param){
    return {
        type:'SET-DIALOGUE-STATE',
        payload:param
    }
}

// export function getUsers (email) {
//     return {
//         type : GET_USERS,
//         payload : email
//     }
// }

export function getUsers() {
    return(dispatch) =>{
        return fetch("http://localhost:8000/get_users",{
            method: 'POST',
            // type : GET_USERS,
            // payload : email,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                limit : 100,
                skip : 0
            })
        })
        .then( res => res.json())
        .then ((resJson) => {
            dispatch(setUsers(resJson.result))
        })
        .catch((error) => {
            console.error(error);
          });
    }
}

//delete a user
export function deleteUser(email) {
    return (dispatch) => {
        return fetch("http://localhost:8000/delete_user",{
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-type': 'application/json'
          },
          body: JSON.stringify({
              email: email
          })  
        })
        .then(res => res.json())
        .then((resJson) => {
             console.log("hello from delete")
            dispatch(getUsers())
        })
        .catch((error) => {
            console.log(error);
        });
    }
}


//update user

export function setEmail (email) {
    return {
        type : SET_EMAIL,
        payload : email
    }
}

// export function editEmail (email) {
//     return {
//         type : EDIT_EMAIL,
//         payload : email
//     }
// }

export function editName (name) {
    return {
        type : EDIT_NAME,
        payload : name
    }
}
export function editGender (gender) {
    return {
        type : EDIT_GENDER,
        payload : gender
    }
}
export function editContact (contact) {
    return {
        type : EDIT_CONTACT,
        payload : contact
    }
}





//add user
export function addName (name) {
    return {
        type : ADD_NAME,
        payload : name
    }
}
export function addEmail (email) {
    return {
        type : ADD_EMAIL,
        payload : email
    }
}

export function addContact (contact) {
    return {
        type : ADD_CONTACT,
        payload : contact
    }
}
export function addGender (gender) {
    return {
        type : ADD_GENDER,
        payload : gender
    }
}




export function handleClickOpen (email) {
    return {
        type : SET_TRUE,
        payload : email
    }
}

export function handleClose () {
    return {
        type : SET_FALSE
    }
}

export function handleClickOpen1 (value) {
    return {
        type : SET_TRUE,
        payload :value
    }
}

export function handleClose1 () {
    return {
        type : SET_FALSE
    }
}


// export function updateUser(email , name , gender) {
//   return(dispatch) =>{
//       return fetch("http://localhost:8000/update_user",{
//           method: 'POST',
//           headers: {
//               Accept: 'application/json',
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//               email : email,
//               name : name,
//               gender : gender
//           })
//       })
//       .then( res => res.json())
//       .then ((resJson) => {
//           console.log(resJson);
//           dispatch(handleClose())
//           dispatch(getUsers())
//       })
//       .catch((error) => {
//           console.error(error);
//         });
//   }
// }

export function updateUser(email,name,contact,gender) {
    return(dispatch) =>{
        return fetch("http://localhost:8000/update_user",{
            method: 'POST',
            // type: UPDATE_USER,
            // payload: email,
      
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email : email,
                name : name,
                gender : gender,
                contact : contact
           
            })
        })
        .then( res => res.json())
        .then ((resJson) => {
            console.log (resJson);
            //console.log ("hello from update");
            dispatch(handleClose())
            dispatch(getUsers())
        })
        .catch((error) => {
            console.error(error);
          });

          
    }
}


//add user

export function addUser(email,name,contact,gender) {
    return(dispatch) =>{
        return fetch("http://localhost:8000/add_user",{
            method: 'POST',
            // type: UPDATE_USER,
            // payload: email,
      
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email : email,
                name : name,
                gender : gender,
                contact : contact
           
            })
        })
        .then( res => res.json())
        .then ((resJson) => {
            console.log (resJson);
            console.log ("hello from add");
            dispatch(handleClose())
            dispatch(getUsers())
        })
        .catch((error) => {
            console.error(error);
          });

          
    }
}













































































































































// import {
//     SET_USERS,
//     //UPDATE_USER
//    // // SET_NAME,
//    // // SET_EMAIL,
//    // // SET_CONTACT,
//    // // SET_GENDER,
//    // DELETE_USERS,
//    // SET_TRUE,
//    // SET_FALSE
// } from "../../constants/user/constants";

// export function setUsers (user) {
//    return {
//        type : SET_USERS,
//        payload : user
//    }
// }
// //==================================
// // export function setName (name) {
// //     return {
// //         type : SET_NAME,
// //         payload : name
// //     }
// // }

// // export function setEmail (email) {
// //     return {
// //         type : SET_EMAIL,
// //         payload : email
// //     }
// // }

// // export function setContact (contact) {
// //     return {
// //         type : SET_CONTACT,
// //         payload : contact
// //     }
// // }

// // export function setGender (gender) {
// //     return {
// //         type : SET_GENDER,
// //         payload : gender
// //     }
// // }

// //====================================
// export function getUsers() {
//    return(dispatch) =>{
//        return fetch("http://localhost:8000/get_users",{
//            method: 'POST',
//            headers: {
//                Accept: 'application/json',
//                'Content-Type': 'application/json'
//            },
//            body: JSON.stringify({
//                limit : 100,
//                skip : 0
//            })
//        })
//        .then( res => res.json())
//        .then ((resJson) => {
//            dispatch(setUsers(resJson.result))
//        })
//        .catch((error) => {
//            console.error(error);
//          });
//    }
// }

// //delete a user
// export function deleteUser(email) {
//    return (dispatch) => {
//        return fetch("http://localhost:8000/delete_user",{
//          method: 'POST',
//          headers: {
//              Accept: 'application/json',
//              'Content-type': 'application/json'
//          },
//          body: JSON.stringify({
//              email: email
//          })  
//        })
//        .then(res => res.json())
//        .then((resJson) => {
//             console.log("hello")
//            dispatch(getUsers())
//        })
//        .catch((error) => {
//            console.log(error);
//        });
//    }
// }


// // export const updateUser = (user) => ({
   
// //     type: UPDATE_USER,
// //     payload: user,
// //   });

// export function updateUser(user) {
//    return(dispatch) =>{
//        return fetch("http://localhost:8000/update_user",{
//            method: 'POST',
     
//            headers: {
//                Accept: 'application/json',
//                'Content-Type': 'application/json'
//            },
//            body: JSON.stringify({
//                email : "email",
//                name : "name",
//                contact:"contat",
//                gender : "gender"
               
//            })
//        })
//        .then( res => res.json())
//        .then ((resJson) => {
//            dispatch(getUsers())
//        })
//        .catch((error) => {
//            console.error(error);
//          });

         
//    }
// }
