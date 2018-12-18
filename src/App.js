import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
        <div className="container mt-4">
          <BurgerBuilder />
        </div>
      </div>
    );
  }
}

export default App;
