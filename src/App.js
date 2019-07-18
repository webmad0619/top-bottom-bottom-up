import React, { Component } from 'react'
import ComponentA from './ComponentA';
import "./App.css"

export default class App extends Component {
  state = {
    value: 100,
    productName: "no product yet"
  }

  toCurrency(value) {
    return value + " $"
  }

  increaseShoppingCart(productValue, productNameParam) {
    let newState = {...this.state};
    newState.value += productValue
    newState.productName = productNameParam

    this.setState(newState)
  }

  changeValue() {
    this.setState({
      ...this.state,
      value: 200
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>I am app, the top level. The shopping cart value is {this.toCurrency(this.state.value)}</h1>
        <h3>The chosen product is {this.state.productName}</h3>
        <button onClick = {() => this.changeValue()}>Change {this.toCurrency(100)} to {this.toCurrency(200)}</button>
        <ComponentA value={this.state.value} toCurrency={this.toCurrency} increaseShoppingCart={(val, productName) => this.increaseShoppingCart(val, productName)} />
      </React.Fragment>
    )
  }
}
