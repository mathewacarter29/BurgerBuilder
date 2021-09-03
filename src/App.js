import "./App.css";
import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuider from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuider></BurgerBuider>
        </Layout>
      </div>
    );
  }
}

export default App;
