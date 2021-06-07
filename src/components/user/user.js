import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Dialog,DialogTitle ,DialogContent, Grid,TextField ,Button  } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { dialogueState } from "../../actions/user/userAction";
//import { ADD_USER } from "../../constants/user/constants";


class User extends React.Component {
  
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    console.log(this.props)
    let {
      user,
      addName,// adduser
      addEmail,
      addContact,
      addGender,
      addUser, // adduser
      deleteUser,
      updateUser,
      editName,
      //editEmail,
      editContact,
      editGender,
      handleClickOpen,
      handleClose,
      dialogueState
      //setEmail
    } = this.props;
 
    return (
      <div > 
{/* =======================================================    */}
       {/* //add user */}
        <Dialog  open={dialogueState}
        
          onClose={() => handleClose(false)}
           aria-labelledby="form-dialog-title">
           <DialogTitle justify ="center" id="form-dialog-title">ADD USER</DialogTitle>  
           <DialogContent> 
           <hr color="red"></hr>
          
            <TextField
               label = 'name'
               fullWidth
               variant = 'outlined'
               margin = 'dense'
               value = {user.name}
               onChange ={(e)=>{addName(e.target.value)}}
           />
           <TextField
               label = 'email'
               fullWidth
               variant = 'outlined'
               margin = 'dense'
               value = {user.email}
               onChange ={(e)=>{addEmail(e.target.value)}}
           />
          
           <TextField
               label = 'contact'
               fullWidth
               variant = 'outlined'
               margin = 'dense'
               value = {user.contact}
               onChange ={(e)=>{addContact(e.target.value)}}
           />
           <TextField
               label = 'gender'
               fullWidth
               variant = 'outlined'
               margin = 'dense'
               value = {user.gender}
               onChange ={(e)=>{addGender(e.target.value)}}
           />
           <Button variant="contained" color="secondary" fullWidth
              onClick = {() => {addUser(user.email,user.name ,user.contact, user.gender)}}>
              ADD</Button>
           <Button  justify="center" variant="contained"  fullWidth
            onClick={() => handleClose(false)} color="primary">
              CANCEL
            </Button>
           </DialogContent>
          </Dialog>
                    
                     


        {/* //add user button */}
        <p align="center" >
        <hr/>
          <div  >
             <Button  
             variant="contained"
             color="primary" 
             //onClick={() => addUser(user.email,user.name ,user.contact, user.gender)}
             //onClick={() => {handleClickOpen();addName();addEmail(); addContact(); addGender()}}
             onClick={() => {handleClickOpen(); addName();addEmail(); addContact(); addGender()}}
              >
              ADD USER
             </Button>
          </div>
          <hr/>
        </p>
        {/* </DialogContent> */}
        
     {/* =======================================================    */}
             
        {user.users.map((s , i) => (
          <Grid container justify ="center" item sm={12} md={6} lg={5} xs={12}>
            <Card  >
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="recipe"
                    style={{ backgroundColor: red[500] }}
                  >
                    {s.gender}
                  </Avatar>
                }
                title={s.name}
                subheader={s.email}
              />
              <CardActions disableSpacing>
                
                <IconButton aria-label="edit" >
                <EditIcon  onClick={() => {handleClickOpen(s.email);editName(s.name); editContact(s.contact); editGender(s.gender)}} />
                {/* <EditIcon  onClick={() => {handleClickOpen(s.email);editName(s.name); editEmail(s.email); editContact(s.contact); editGender(s.gender)}} />  */}
 
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon onClick={() => deleteUser(s.email)} />
                </IconButton>
                
              </CardActions>
              
            </Card>
            <Dialog  open={user.open}
              onClose={() => handleClose(false)}
              aria-labelledby="form-dialog-title">
              <DialogTitle align ="center" id="form-dialog-title">UPDATE USER</DialogTitle>  
              <DialogContent>
              <hr color="red"></hr>
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    //fullWidth
                    label="Email Address"
                    type="email"
                    value={user.email}
                />
                {/* <TextField
                    label = 'email'
                    fullWidth
                    variant = 'outlined'
                    margin = 'dense'
                    value = {user.email}
                    onChange ={(e)=>{editEmail(e.target.value)}}
                /> */}
                <TextField
                    label = 'name'
                    fullWidth
                    variant = 'outlined'
                    margin = 'dense'
                    value = {user.name}
                    onChange ={(e)=>{editName(e.target.value)}}
                />
                <TextField
                    label = 'contact'
                    fullWidth
                    variant = 'outlined'
                    margin = 'dense'
                    value = {user.contact}
                    onChange ={(e)=>{editContact(e.target.value)}}
                />
                <TextField
                    label = 'gender'
                    fullWidth
                    variant = 'outlined'
                    margin = 'dense'
                    value = {user.gender}
                    onChange ={(e)=>{editGender(e.target.value)}}
                />
                <Button variant="contained" color="secondary" fullWidth
                  onClick = {() => {updateUser(user.email,user.name ,user.contact, user.gender)}}
                >EDIT</Button>
                 <Button  justify="center" variant="contained" onClick={() => handleClose(false)} color="primary" fullWidth>
                  CANCEL
                </Button>
              </DialogContent>
            </Dialog>
          </Grid>
        ))}
        
      </div>
      
    );
  }
}

export default User;











































































































































//============================================================================
// import React from "react";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardActions from "@material-ui/core/CardActions";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
// // import {deleteUsers} from "../../actions/user/userAction";

// //import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import { Grid, TextField } from "@material-ui/core";
// import { red } from "@material-ui/core/colors";
// //import { useDispatch } from 'react-redux';



// class User extends React.Component {
  
//   componentDidMount() {
//     this.props.getUsers();
//   }
//   render() {
//     console.log(this.props)
//     let {
//        user,
//       //getUsers,
//       // addUser,
//       // setName,
//       // setEmail,
//       // setContact,
//       // setGender,
//       deleteUser,
//       // handleClickOpen,
//       // handleClose ,
//       updateUser
//     } = this.props;

//     //const dispatch= useDispatch;
//     //const{ name , email , contact , gender , id }= user;
    
//     return (
//       <div align ="center">      
//         {user.users.map((s, i) => (
//           <Grid container item sm={12} md={6} lg={4} xs={12}>
//             <Card>
//               <CardHeader
//                 avatar={
//                   <Avatar
//                     aria-label="recipe"
//                     style={{ backgroundColor: red[500] }}
//                   >
//                     {s.gender}
//                   </Avatar>
//                 }
//                 title={s.name}
//                 subheader={s.email}
//               />
//               {/* <cardContent>
//                 <TextField
//                 label="name"
//                 fullWidth
//                 variant="outlined"
//                 margin="dense"
//                 value={user.name}
//                 onChange={(e)=>{setName(e.target.value)}}
//                 />
//                 <TextField
//                 label="email"
//                 fullWidth
//                 variant="outlined"
//                 margin="dense"
//                 value={user.email}
//                 onChange={(e)=>{setEmail(e.target.value)}}
//                 />
//                 <TextField
//                 label="contact"
//                 fullWidth
//                 variant="outlined"
//                 margin="dense"
//                 value={user.contact}
//                 onChange={(e)=>{setContact(e.target.value)}}
//                 />
//                 <TextField
//                 label="gender"
//                 fullWidth
//                 variant="outlined"
//                 margin="dense"
//                 value={user.gender}
//                 onChange={(e)=>{setGender(e.target.value)}}
//                 />
//                 <button
//                   variant="contained"
//                   color="secondary"
//                   fullWidth
//                   onClick ={()=> {

//                   }}
//                 >
//                   ADD USER
//                 </button>
//               </cardContent> */}
//               <CardActions disableSpacing>
//                 {/* <IconButton aria-label="add">
//                   <PersonAddIcon onClick={() => addUser()} />
//                 </IconButton> */}
//                 <IconButton aria-label="edit" >
//                   <EditIcon  onClick={() => updateUser()} /> 
//                 </IconButton>
//                 <IconButton aria-label="delete">
//                   {/* <DeleteIcon onClick={() => dispatch(deleteUser(id))} /> */}
//                   <DeleteIcon onClick={() => deleteUser(s.email)} />
//                 </IconButton>
                
//               </CardActions>
              
//             </Card>
//           </Grid>
//         ))}
        
//       </div>
      
//     );
//   }
// }

// export default User;