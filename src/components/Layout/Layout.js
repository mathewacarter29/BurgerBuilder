import React from "react";
import Aux from "../../hoc/Auxiliary";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { Component } from "react";

//This will hold all the main components, holding the burger builder in props.children
class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        ></SideDrawer>
        <main className={styles.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
