import React from "react";
import Aux from "../../hoc/Auxiliary";
import styles from './Layout.module.css';

const layout = (props) => {
  return (
    <Aux>
      <div>ToolBar, sideDrawer, Backdrop</div>
      <main className={styles.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
