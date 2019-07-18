import React, { Component } from 'react'
import ComponentC from './ComponentC';

export default class ComponentB extends Component {
    render() {
        return (
            <div className="component componentB">
                <p>I am component B and my value (from App) is {this.props.toCurrency(this.props.value)}</p>

                <ComponentC value={this.props.value} toCurrency={this.props.toCurrency} increaseShoppingCart={this.props.increaseShoppingCart} ></ComponentC>
            </div>
        )
    }
}
