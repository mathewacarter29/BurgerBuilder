import React, { Component } from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types'

//This class renders a burger ingredient depending on the input given to the ingredient
//by the burger class. How the ingredient looks is inside the burger ingredient css class
class BurgerIngredient extends Component {

    render() {
        let ingredient;
        switch(this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>
                break;
            default:
                ingredient = null;
    
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    //You have to pass a string and if you try to pass nothing, it will throw an error
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;