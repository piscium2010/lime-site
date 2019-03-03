import React from 'react';
import Collapsible from 'lime/Collapsible'

export default class Li extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expand: props.defaultExpand || false }
    }

    get expand() {
        return this.props.expand || this.state.expand
    }

    onClick = evt => {
        console.log(`click`)
        if (evt.target != evt.currentTarget) return
        let { children } = this.props
        let { expand } = this.state
        this.setState({
            expand: children ? !expand : false,
        })
    }

    render() {
        let { children, title } = this.props
        //let s = {  maxHeight: 0, overflow: 'hidden', height: 'auto'}
        //let ss = {  maxHeight: 500, height: 'auto'}
        return (
            <li className={'sd-menu-item'} onClick={this.onClick}>
                {title}
                <Collapsible expand={this.expand}>
                    {
                        children
                    }
                </Collapsible>
            </li>
        )
    }
}
