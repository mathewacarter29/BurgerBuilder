import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

//Holds all the ingredients in the burger
const burger = (props) => {
  /*
  1. turns ingredients object into array of ingredient names
  2. turns each element of this ingredient name array into an empty array of length (ingredient #)
  3. turns each element of the empty array into a jsx of the correct burger ingredient
  */
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igName) => {
      return [...Array(props.ingredients[igName])].map((_, i) => {
        return (
          <BurgerIngredient key={igName + i} type={igName}></BurgerIngredient>
        );
      });
    })
    .reduce((arr, el) => {
      //concat() will merge 2 or more arrays into 1
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
