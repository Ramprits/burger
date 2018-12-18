import React, { Component } from "react";
import propType from "prop-types";
import classes from "./BurgerIngredient.css";
class BurgerIngredient extends Component {
  
  render() {
    ingredient = null;
    switch (this.props.type) {
      case "bread_bottom":
        ingredient = <div className={classes.BreadBottom} />;
        break;
      case "bread-top":
        ingredient = (
          <div>
            <div className={classes.BreadTop} />
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
      case "meat":
        ingredient = <div className={classes.Meat} />;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese} />;
        break;
      case "bacan":
        ingredient = <div className={classes.Bacon} />;
        break;
      case "salad":
        ingredient = <div className={classes.Salad} />;
        break;
      default:
        ingredient = null;
    }
    return <div />;
  }
}

BurgerIngredient.propType = {
  type: this.propType.string.isRequired
};
export default BurgerIngredient;
