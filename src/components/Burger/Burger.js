import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

//Holds all the ingredients in the burger
const burger = (props) => {
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            <BurgerIngredient type="cheese"></BurgerIngredient>
            <BurgerIngredient type="salad"></BurgerIngredient>
            <BurgerIngredient type="bacon"></BurgerIngredient>
            <BurgerIngredient type="meat"></BurgerIngredient>
            <BurgerIngredient type = "bread-bottom"></BurgerIngredient>
        </div>
    );
};

export default burger;