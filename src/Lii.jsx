import React from 'react';
import Collapsible from 'lime/Collapsible'

export default class Li extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expand: props.defaultExpand || false }
    }

    get expand() {
        return 'expand' in this.props ? this.props.expand : this.state.expand
    }

    onClick = evt => {
        if (evt.target !== evt.currentTarget) return
        let { children, onClick = () => { } } = this.props
        let { expand } = this.state
        this.setState({
            expand: children ? !expand : false,
        })

        onClick(evt)
    }

    render() {
        let { children, title } = this.props
        return (
            <React.Fragment>
                <li className={'sd-menu-item'} onClick={this.onClick}>
                    <span>{title}</span>
                </li>
                <Collapsible expand={this.expand}>
                    {children}
                </Collapsible>
            </React.Fragment>
        )
    }
}
