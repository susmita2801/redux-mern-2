import { connect } from "react-redux";
import User from "../../components/user/user";

import {
    getUsers,
    deleteUser,
    updateUser,
    setEmail,
    //editEmail,
    editName,
    editContact,
    editGender,

    addName,
    addEmail,
    addContact,
    addGender,
    addUser,

    handleClose, 
    handleClickOpen,
    dialogueState

    // handleClose1, 
    // handleClickOpen1

  } from "../../actions/user/userAction";

  export const mapStateToProps = (store) => {
        return {
            user : store.users
        }
  }

  export const mapDispatchToProps = (dispatch) => {
    return {
        getUsers : () => {
            dispatch(getUsers());
        },
        deleteUser : (email) => {
          dispatch(deleteUser(email));
        },
        setEmail : (email) => {
          dispatch(setEmail(email));
        },
        // editEmail : (email) => {
        //   dispatch(editEmail(email));
        // },
        editName : (name) => {
          dispatch(editName(name));
        },
        editContact : (contact) => {
          dispatch(editContact(contact));
        },
        editGender : (gender) => {
          dispatch(editGender(gender));
        },

        //add user
        addName : (name) => {
          dispatch(addName(name));
        },
        addEmail : (email) => {
          dispatch(addEmail(email));
        },
        addContact : (contact) => {
          dispatch(addContact(contact));
        },
        addGender : (gender) => {
          dispatch(addGender(gender));
        },

        addUser : (email , name ,contact, gender) => {
          dispatch(addUser(email, name,contact , gender));
        },

        handleClickOpen : (email) => {
          dispatch(handleClickOpen(email));
        },
        handleClose : () => {
          dispatch(handleClose());
        },
        handleDialogueState :(param) => {
          dispatch(dialogueState(param));
        },


        // handleClickOpen1 : () => {
        //   dispatch(handleClickOpen());
        // },
        // handleClose1 : () => {
        //   dispatch(handleClose());
        // },


        updateUser : (email , name ,contact, gender) => {
          dispatch(updateUser(email, name,contact , gender));
        }
      }

  }


export default connect (mapStateToProps, mapDispatchToProps) (User);









































































// import { connect } from "react-redux";
// import User from "../../components/user/user";

// import {
//     getUsers,
//     // setName,
//     // setEmail,
//     // setContact,
//     // setGender,
//     deleteUser,
//     updateUser
//   } from "../../actions/user/userAction";

//   export const mapStateToProps = (store) => {
//         return {
//             user : store.users
//         }
//   }

//   export const mapDispatchToProps = (dispatch) => {
//     return {
//         getUsers : () => {
//             dispatch(getUsers());
//         },
//         // setName : (name) => {
//         //   dispatch(setName(name));
//         // },
//         // setEmail : (email) => {
//         //   dispatch(setEmail(email));
//         // },
//         // setContact : (contact) => {
//         //   dispatch(setContact(contact));
//         // },
//         // setGender : (gender) => {
//         //   dispatch(setGender(gender));
//         // },
       

//         deleteUser : (email) => {
//           dispatch(deleteUser(email));
//         },
//         updateUser : (user) => {
//           dispatch(updateUser(user));
//         }
//       }

//   }


// export default connect (mapStateToProps, mapDispatchToProps) (User);

