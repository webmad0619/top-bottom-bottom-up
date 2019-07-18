import React, { Component } from 'react'
import ComponentB from './ComponentB';
import ComponentD from './ComponentD';

export default class ComponentA extends Component {
    render() {
        return (
            <div className="component componentA">
                <p>I am component A and my value (from App) is {this.props.toCurrency(this.props.value)}</p>

                <ComponentB value={this.props.value} toCurrency={this.props.toCurrency} increaseShoppingCart={this.props.increaseShoppingCart} />
                <ComponentD value={this.props.value} toCurrency={this.props.toCurrency} increaseShoppingCart={this.props.increaseShoppingCart}  />
            </div>
        )
    }
}
