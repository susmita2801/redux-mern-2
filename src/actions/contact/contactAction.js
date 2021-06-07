// import {
//     GET_USER,
//     ADD_USER,
//     EDIT_USER,
//     DELETE_USER
    
//   } from "../../constants/contact/contactConstants";
  



//   export function getUsers() {
//     return (dispatch) => {
//       return fetch("http://localhost:8000/get_users")
//         .then(res => res.json())
//         .then((resJson) => {
//           dispatch(
//               {
//                 type: GET_USER 
//               });
//         })
//     }
//   };

// // export function getUser() {  
// //     return dispatch => {  
// //         return dispatch({  
// //             type: GET_USER 
// //         });  
// //     }  
// // };  
  
// export function addUser(data) {  
//     return dispatch => {  
//         return dispatch({  
//             type: ADD_USER,  
//             payload:data  
//         });  
//     }  
// };  
  
// export function editUser(data) {  
//     return dispatch => {  
//         return dispatch({  
//             type: EDIT_USER,  
//             payload:data
//         });  
//     }  
// };  
  
// export function deleteUser(userId) {  
//     return dispatch => {  
//         return dispatch({  
//             type: DELETE_USER,  
//             payload: userId  
//         });  
//     }  

    
// }; 


  
// //   export function increaseCount() {
// //     return {
// //       type: INCREASE_COUNTER
// //     }
// //   }
  
// //   export function setUsers(users) {
// //     return {
// //       type: SET_USERS,
// //       payload: users
// //     }
// //   }
  
// //   export function getUsers() {
// //     return (dispatch) => {
// //       return fetch("https://reqres.in/api/users?page=1")
// //         .then(res => res.json())
// //         .then((resJson) => {
// //           dispatch(setUsers(resJson.data));
// //         })
// //     }
// //   }

