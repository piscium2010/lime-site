import React from 'react'
import Collapsible from 'lime/Collapsible'

class Panel extends React.Component {
    render() {
        let { title, children, activeKey, eventKey, ...rest } = this.props
        return (
            <React.Fragment>
                <h5 className='sd-card' eventkey={eventKey} {...rest}>{title}</h5>
                <Collapsible expand={activeKey == eventKey}>
                    {children}
                </Collapsible>
            </React.Fragment>
        )
    }
}

export default class Accordion extends React.Component {
    static Panel = Panel

    constructor(props) {
        super(props)
        this.state = {
            activeKey: props.defaultActiveKey || ''
        }
    }

    get activeKey() {
        return 'activeKey' in this.props ? this.props.activeKey : this.state.activeKey
    }

    onClick = evt => {
        if (evt.target.hasAttribute('eventKey')) {
            this.setState({
                activeKey: evt.target.getAttribute('eventKey')
            })
        }
    }

    render() {
        let { children, ...rest } = this.props
        let prop = { activeKey: this.activeKey }

        return (
            <div onClickCapture={this.onClick} {...rest}>
                {
                    React.Children.toArray(children).map(el =>
                        React.cloneElement(el, prop)
                    )
                }
            </div>
        )
    }
}