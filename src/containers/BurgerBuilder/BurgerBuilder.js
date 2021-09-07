import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'

//Holds the burger and the build controls
class BurgerBuilder extends Component {

    render() {
        return (
            <Aux>
                <Burger></Burger>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;