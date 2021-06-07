import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Login from "../../containers/loginCon";
import Counter from "../../containers/counter/counterCont";
import Register from "../../containers/register/registerCon";
import Contact from "../../containers/contact/contactCon";
import User from "../../containers/user/userContainer";
// import UpdateUser from "../../containers/user/userContainer";



import {
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1) * 3,
  },
  content2: {
    flexGrow: 1,
  },
});
class Routes extends Component {
  render() {
    //const { login, classes } = this.props;
    const { classes } = this.props;
    
    return (
      <Router>
        <div className={classes.root}>
          <main className={classes.content2}>
            <Route exact path="/" component={Login} />
            <Route path="/counterpath" component={Counter} />
            <Route path="/register" component={Register} />
            <Route path="/contact" component={Contact} />
            <Route path="/user" component={User} />
            {/* <Route path="/user/1" component={UpdateUser} /> */}
          </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(Routes);
