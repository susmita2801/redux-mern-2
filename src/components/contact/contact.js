
// //========================================================
// /*
// import {CardHeader,CardActions,Avatar,IconButton,MoreVertIcon  , Card, Grid} from "@material-ui/core";
// import React from "react";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 0,
//       paddingTop: '56.25%', // 16:9
//     },
//     expand: {
//       transform: 'rotate(0deg)',
//       marginLeft: 'auto',
//       transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//       }),
//     },
//     expandOpen: {
//       transform: 'rotate(180deg)',
//     },
//     avatar: {
//       backgroundColor: red[500],
//     },
//   }));
  

// export default class Contact extends React.Component {

//   render() {

//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//       };

//     return (
//       <Grid container justify="center">
//         <Grid item xs={12} md={4}>
//         <Card className={classes.root}>
//       <CardHeader
//         avtar={
//           <Avatar aria-label="gender" className={classes.gender}>
//             F
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="Add user">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         name="Shrimp and Chorizo Paella"
//         email id="September 14, 2016"
//       />
     
      
//       <CardActions disableSpacing>
//         <IconButton aria-label="edit">
//           <EditIcon />
//         </IconButton>
//         <IconButton aria-label="delete">
//           <DeleteIcon />
//         </IconButton>
  
//       </CardActions>
      
//     </Card>
//         </Grid>
//       </Grid>
//     )
//   }
// }
// */
// //========================================================================
// /*
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// export default function RecipeReviewCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         className={classes.media}
//         image="/static/images/cards/paella.jpg"
//         title="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           This impressive paella is a perfect party dish and a fun meal to cook together with your
//           guests. Add 1 cup of frozen peas along with the mussels, if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//             minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
//             heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
//             browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
//             and chorizo in the pan. Add piment??n, bay leaves, garlic, tomatoes, onion, salt and
//             pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
//             without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
//             medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
//             again without stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don???t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }
//  */

// //===================================================================================================================================================================

// import React from "react";
// import Avatar from "react-avatar";
// import { Link } from "react-router-dom";
// import { deleteContact } from "../../actions/contactAction";
// import { useDispatch } from "react-redux";

// const Contact = ({ contact, selectAll }) => {
//   const dispatch = useDispatch();
//   const { name, phone, email, id } = contact;
//   return (
//     <tr>
//       <td>
//         <div className="custom-control custom-checkbox">
//           <input
//             checked={selectAll}
//             type="checkbox"
//             className="custom-control-input"
//           />
//           <label className="custom-control-label"></label>
//         </div>
//       </td>
//       <td>
//         <Avatar className="mr-2" name={name} size="45" round={true} /> {name}
//       </td>
//       <td>{phone}</td>
//       <td>{email}</td>
//       <td className="actions">
//         <Link to={`/contacts/edit/${id}`}>
//           <span className="material-icons mr-2">edit</span>
//         </Link>
//         <span
//           className="material-icons  text-danger"
//           onClick={() => dispatch(deleteContact(id))}
//         >
//           remove_circle
//         </span>
//       </td>
//     </tr>
//   );
// };

// export default Contact;