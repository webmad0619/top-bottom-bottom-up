import React, { Component } from 'react'

export default class ComponentD extends Component {
    render() {
        return (
            <div className="component componentD">
                <p>I am component D and my value (from App) is {this.props.toCurrency(this.props.value)}</p>
            </div>
        )
    }
}
