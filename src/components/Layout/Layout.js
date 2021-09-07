import React from "react";
import Aux from "../../hoc/Auxiliary";
import styles from './Layout.module.css';

//This will hold all the main components, holding the burger builder in props.children
const layout = (props) => {
  return (
    <Aux>
      <div>ToolBar, sideDrawer, Backdrop</div>
      <main className={styles.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
