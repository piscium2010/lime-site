import React from 'react';

export default class Li extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
    }

    onClick = evt => {
        let { children } = this.props
        let { show } = this.state
        this.setState({
            show: children ? !show : false,
        })
    }

    render() {
        let style = { background: 'aliceblue', width: 100 }
        let { show } = this.state
        let { children, title } = this.props
        return (
            <React.Fragment>
                <li style={style} onClick={this.onClick}>{title}</li>
                {
                    show &&
                    children
                }
            </React.Fragment>
        )
    }
}
