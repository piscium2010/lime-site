import React from 'react'

export default class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="lime-textField-input">
                <input type="text" />
            </div>)
    }
}