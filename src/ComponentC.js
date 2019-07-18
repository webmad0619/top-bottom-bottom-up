import React, { Component } from 'react'

export default class ComponentC extends Component {
    priceOfRoomba = 245

    render() {
        return (
            <div className="component componentC">
                <p>I am component C and my value (from App) is {this.props.toCurrency(this.props.value)}</p>
                <button onClick={() => this.props.increaseShoppingCart(this.priceOfRoomba, "Roomba hoover")}>Add product of {this.props.toCurrency(this.priceOfRoomba)} to shopping cart</button>
            </div>
        )
    }
}
